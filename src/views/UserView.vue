<template>
  <div class="row mb-17">
    <div class="col-12 py-8">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">首頁</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">{{ user.nickName }} 的個人頁面</li>
        </ol>
      </nav>
    </div>
    <div class="col-12 col-md-4 mb-16">
      <div
        class="userBannerAvatar backgroundCover h-100 bg-white rounded-2 shadow-sm"
        :style="{ backgroundImage: `url(${user.avatarImgUrl})` }"
        v-if="user.avatarImgUrl"
      ></div>
      <div
        class="userBannerAvatar d-flex justify-content-center align-items-center h-100 bg-dark-subtle rounded-2 shadow-sm text-white"
        v-else
      >
        <i class="bi bi-person-fill"></i>
      </div>
    </div>
    <div class="col-12 col-md-8 mb-16">
      <div class="position-relative p-14 p-lg-16 bg-white shadow-sm rounded">
        <router-link to="/setting" class="userBannerLink text-secondary fs-4" v-if="isOwner">
          <i class="bi bi-pencil-square"></i>
        </router-link>
        <h1 class="mb-11 text-center text-lg-start">{{ user.nickName }}</h1>
        <p class="textClamp textLs mb-11 text-center text-md-start text-muted">
          {{ user.description ? user.description : '尚未填寫' }}
        </p>
        <ul
          class="list-unstyled d-flex flex-column flex-md-row justify-contnet-center m-0 p-0 text-center"
        >
          <li class="mb-8 mb-md-0 me-md-17 px-11 py-4 bg-light rounded-2 text-muted">
            <span class="d-block h3 mb-2 text-dark">
              {{ user.recipeCount ? user.recipeCount : 0 }}
            </span>
            擁有食譜
          </li>
          <li class="mb-8 mb-md-0 me-md-17 px-11 py-4 bg-light rounded-2 text-muted">
            <span class="d-block h3 mb-2 text-dark"> {{ getDaysDifference(user.createdAt) }} </span>
            註冊天數
          </li>
          <li class="mb-8 mb-md-0 px-11 py-4 bg-light rounded-2 text-muted">
            <span class="d-block h3 mb-2 text-dark">
              {{ user.collectCount ? user.collectCount : 0 }}
            </span>
            收藏食譜
          </li>
        </ul>
      </div>
    </div>
    <div class="col-12 col-xl-3">
      <h5 class="sidebarTitle">{{ user.nickName }} 的食譜</h5>
      <ul class="sidebarList">
        <li>
          <a
            href="#"
            class="sidebarLink"
            :class="{ active: currentTab == '公開食譜' }"
            @click.prevent="toggleCurrentTab('公開食譜')"
          >
            公開食譜
          </a>
        </li>
        <li v-if="isOwner">
          <a
            href="#"
            class="sidebarLink"
            :class="{ active: currentTab == '私人食譜' }"
            @click.prevent="toggleCurrentTab('私人食譜')"
          >
            私人食譜
          </a>
        </li>
        <li v-if="isOwner">
          <a
            href="#"
            class="sidebarLink"
            :class="{ active: currentTab == '我的收藏' }"
            @click.prevent="toggleCurrentTab('我的收藏')"
          >
            我的收藏
          </a>
        </li>
      </ul>
    </div>
    <div class="col-12 col-xl-9">
      <div class="cardVerticalList">
        <CardVerticalComponent
          :recipe="item"
          :categories="categories"
          :tags="tags"
          :collects="myProfile.collects"
          v-for="item in recipes"
          :key="item._id"
          @toggle-collect="toggleCollect"
          :mode="currentTab !== '我的收藏' && isOwner ? 'edit' : 'collect'"
          @open-del-modal="openDelModal"
        ></CardVerticalComponent>
      </div>
      <div
        v-if="recipes.length === 0"
        class="d-flex justify-content-center align-items-center h-100 me-4"
      >
        <p class="fs-3 text-dark-emphasis">
          <em>沒有符合條件的食譜</em>
        </p>
      </div>
      <div class="mt-14" v-if="pagination.totalPage">
        <Pagination :pagination="pagination" @update-page="getUserRecipes" />
      </div>
    </div>
  </div>

  <AlertModal ref="alertModalRef">
    <template #modal-header>
      <span class="titleIcon bg-danger-subtle">
        <i class="bi bi-exclamation-triangle-fill"></i>
      </span>
      找不到此會員
    </template>
    <template #modal-content> 找不到此會員，將為您導入首頁 </template>
    <template #modal-footer>
      <button type="button" class="w-50 btn btn-primary" @click="closeAlertModal">關閉</button>
    </template>
  </AlertModal>

  <DelModal ref="delModalRef" :del-id="tempRecipe.id" @del-item="delRecipe">
    <template #modal-header> 刪除食譜 </template>
    <template #modal-content>
      確定要刪除 <strong> 食譜：{{ tempRecipe.title }} </strong>
    </template>
  </DelModal>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router';
import {
  apiDelRecipe,
  apiGetMyRecipes,
  apiGetUserPublicProfile,
  apiGetUserRecipes,
  apiGetCollectList,
} from '@/scripts/api';
import { getDaysDifference } from '@/scripts/methods.js';
import AlertModal from '@/components/AlertModal.vue';
import DelModal from '@/components/DelModal.vue';
import CardVerticalComponent from '@/components/CardVerticalComponent.vue';
import Pagination from '@/components/PaginationComponent.vue';
import messageStore from '@/stores/messageStore.js';
import loadingStore from '@/stores/loadingStore.js';
import tagAndCategoryStore from '@/stores/tagAndCategoryStore.js';
import userStore from '@/stores/userStore.js';

const route = useRoute();
const router = useRouter();
const alertModalRef = ref(null);
const delModalRef = ref(null);
const tempRecipe = ref({
  id: '',
  title: '',
});

const loadingRef = loadingStore();
const messageRef = messageStore();
const userRef = userStore();
const tagAndCategoryRef = tagAndCategoryStore();
const { openLoading, closeLoading } = loadingRef;
const { pushMessage } = messageRef;
const { getTagsAndCategories } = tagAndCategoryRef;
const { toggleCollect } = userRef;
const { myProfile } = storeToRefs(userRef);
const { categories, tags } = storeToRefs(tagAndCategoryRef);
const userId = ref('');
const user = ref({});
const recipes = ref([]);
const pagination = ref({});
const isOwner = ref(false);
const currentTab = ref('公開食譜');

// 取得用戶資料
async function getUserData() {
  openLoading();

  try {
    if (isOwner.value) {
      user.value = myProfile.value;
    } else {
      const res = await apiGetUserPublicProfile(userId.value);
      user.value = res.data.data;
    }
  } catch (err) {
    pushMessage({
      style: 'danger',
      title: '載入失敗',
      text: err.response?.data?.message || '會員載入錯誤',
    });
    alertModalRef.value?.openModal();
    closeLoading();
  }
}

// 切換選單
function toggleCurrentTab(tab) {
  currentTab.value = tab;
  getUserRecipes();
}

// 取得用戶 收藏食譜/公開食譜/私人食譜
async function getUserRecipes(page = 1) {
  openLoading();
  try {
    let res = [];

    if (currentTab.value === '我的收藏') {
      if (!isOwner.value) return;
      res = await apiGetCollectList({ page, perPage: 5 });
    } else if (currentTab.value === '公開食譜') {
      res = isOwner.value
        ? await apiGetMyRecipes({ isPublic: true, page, perPage: 5 })
        : await apiGetUserRecipes(userId.value, { isPublic: true, page, perPage: 5 });
    } else if (currentTab.value === '私人食譜') {
      if (!isOwner.value) return;
      res = await apiGetMyRecipes({ isPublic: false, page, perPage: 5 });
    }

    recipes.value = res.data?.data?.results;
    pagination.value = res.data?.data?.pagination;

    closeLoading();
  } catch (err) {
    pushMessage({
      style: 'danger',
      title: '載入失敗',
      text: err.response?.data?.message || '會員載入錯誤',
    });
    alertModalRef.value?.openModal();
    closeLoading();
  }
}

// 開啟 modal
function closeAlertModal() {
  alertModalRef.value?.hideModal();
  router.push('/');
}

// 開啟 modal
function openDelModal({ recipeId, recipeTitle }) {
  tempRecipe.value = {
    id: recipeId,
    title: recipeTitle,
  };
  delModalRef.value?.openModal();
}

// 刪除食譜
async function delRecipe(id) {
  openLoading();
  try {
    await apiDelRecipe(id);
    getUserRecipes();
    tempRecipe.value = {
      id: '',
      title: '',
    };
    pushMessage({
      style: 'success',
      title: '刪除食譜成功',
      text: '您已刪除食譜',
    });
    delModalRef.value?.hideModal();
    closeLoading();
  } catch (err) {
    console.log(err);

    pushMessage({
      style: 'danger',
      title: '載入失敗',
      text: err.response?.data?.message || '會員載入錯誤',
    });
    delModalRef.value?.hideModal();
    closeLoading();
  }
}

onMounted(async () => {
  const { id } = route.params;
  const { current } = route.query;

  if (id) {
    console.log('user id ', id);

    if (!tags.value.length || !categories.value.length) {
      await getTagsAndCategories();
    }
    if (current) {
      currentTab.value = current === '我的收藏' ? current : '公開食譜';
    }
    isOwner.value = id === myProfile.value._id ? true : false;
    userId.value = route.params.id;
    await getUserData();
    await getUserRecipes();
  } else {
    alertModalRef.value?.openModal();
  }
});
</script>
