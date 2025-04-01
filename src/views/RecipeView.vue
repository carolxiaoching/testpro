<template>
  <div class="row">
    <div class="col-12 py-8">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/recipes"> 所有食譜 </router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link :to="`/recipes?category=${recipe.category}`">
              {{ getCategoryName(categories, recipe.category) }}
            </router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">洋蔥炒牛肉</li>
        </ol>
      </nav>
    </div>
    <div class="col-12 col-md-6 col-xl-7 mb-11 mb-md-16">
      <div
        class="recipeCover backgroundCover w-100 h-100 rounded-2"
        :style="{ backgroundImage: `url(${recipe.coverImgUrl})` }"
        :alt="recipe.title"
      ></div>
    </div>
    <div class="col-12 col-md-6 col-xl-5 mb-16">
      <div class="position-relative p-16 bg-white shadow-sm rounded">
        <a
          href="#"
          class="collectBtn position-absolute top-0 end-0 p-14 text-secondary fs-4"
          v-if="myProfile.collects?.includes(recipe._id)"
          @click.prevent="toggleCollect({ active: 'remove', recipeId: recipe._id })"
        >
          <i class="bi bi-heart-fill"></i>
        </a>
        <a
          href="#"
          class="collectBtn position-absolute top-0 end-0 p-14 text-secondary fs-4"
          v-else
          @click.prevent="toggleCollect({ active: 'create', recipeId: recipe._id })"
        >
          <i class="bi bi-heart"></i>
        </a>
        <router-link :to="`/recipes?category=${recipe.category}`" class="d-block mb-4">
          {{ getCategoryName(categories, recipe.category) }}
        </router-link>
        <h1 class="mb-11">{{ recipe.title }}</h1>
        <ul class="list-unstyled mb-11">
          <li class="mb-2">
            <i class="bi bi-person-fill me-4"></i>
            作者：
            <router-link :to="`/user/${recipe.user?._id}`" class="link-muted">
              {{ recipe.user?.nickName }}
            </router-link>
          </li>
          <li class="mb-2">
            <i class="bi bi-calendar3 me-4"></i>
            建立日期：{{ $getTime(recipe.createdAt) }}
          </li>
          <li class="mb-2">
            <i class="bi bi-calendar3 me-4"></i>
            更新日期：{{ $getTime(recipe.updatedAt) }}
          </li>
          <li class="mb-2">
            <i class="bi bi-bookmark-heart me-4"></i>
            收藏人數：{{ recipe.collectsCount }}
          </li>
          <li>
            <i class="bi bi-clock-history me-4"></i>
            烹飪時長：{{ recipe.cookingTime }}
          </li>
        </ul>
        <p class="textClamp textClampLg textLsSm text-muted">
          {{ recipe.description }}
        </p>
        <ul class="list-unstyled mt-11 mb-0" v-if="recipe.tags?.length">
          <li v-for="tag in recipe.tags" :key="tag" class="d-inline-block me-2">
            <span class="badge text-bg-secondary fs-6">{{ getTagName(tags, tag) }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-12 col-lg-6 mb-16">
      <h2 class="title justify-content-start mb-11">
        <span class="titleIcon bg-secondary-subtle">
          <i class="bi bi-people-fill"></i>
        </span>
        <span class="me-6"> 食材 </span>
        <span class="fs-5 text-muted">({{ recipe.servings }} 人份)</span>
      </h2>
      <ul class="row list-unstyled mb-0">
        <li
          class="col-12 col-sm-6"
          v-for="(ingredientItem, index) in recipe.ingredients"
          :key="`ingredient${index}`"
        >
          <p class="d-flex justify-content-between py-4 border-bottom">
            <span> {{ ingredientItem.ingredientName }} </span>
            <span>{{ ingredientItem.ingredientQty }}</span>
          </p>
        </li>
      </ul>
    </div>
    <div class="col-12 col-lg-6 mb-16">
      <h2 class="title justify-content-start mb-11">
        <span class="titleIcon bg-secondary-subtle">
          <i class="bi bi-people-fill"></i>
        </span>
        <span> 營養成分 </span>
      </h2>
      <ul class="row list-unstyled mb-0">
        <li class="col-12 col-sm-6">
          <p class="d-flex justify-content-between py-4 border-bottom">
            <span> 總熱量 </span>
            <span>{{ recipe.nutritionFacts?.calories }} 大卡</span>
          </p>
        </li>
        <li class="col-12 col-sm-6">
          <p class="d-flex justify-content-between py-4 border-bottom">
            <span> 蛋白質 </span>
            <span>{{ recipe.nutritionFacts?.protein }} 克</span>
          </p>
        </li>
        <li class="col-12 col-sm-6">
          <p class="d-flex justify-content-between py-4 border-bottom">
            <span> 碳水化合物 </span>
            <span>{{ recipe.nutritionFacts?.totalCarb }} 克</span>
          </p>
        </li>
        <li class="col-12 col-sm-6">
          <p class="d-flex justify-content-between py-4 border-bottom">
            <span> 總脂肪 </span>
            <span>{{ recipe.nutritionFacts?.totalFat }} 克</span>
          </p>
        </li>
        <li class="col-12 col-sm-6">
          <p class="d-flex justify-content-between py-4 border-bottom">
            <span> 醣類 </span>
            <span>{{ recipe.nutritionFacts?.sugar }} 克</span>
          </p>
        </li>
        <li class="col-12 col-sm-6">
          <p class="d-flex justify-content-between py-4 border-bottom">
            <span> 鹽 </span>
            <span>{{ recipe.nutritionFacts?.sodium }} 克</span>
          </p>
        </li>
      </ul>
    </div>
    <div class="col-12 mb-16">
      <h2 class="title justify-content-start mb-11">
        <span class="titleIcon bg-secondary-subtle">
          <i class="bi bi-people-fill"></i>
        </span>
        <span> 步驟 </span>
      </h2>
      <div class="step mx-auto">
        <ul class="stepList list-unstyled position-relative m-0 p-0">
          <li
            class="stepItem position-relative"
            v-for="(stepItem, index) in recipe.steps"
            :key="`step${index}`"
          >
            <div class="stepOrder px-8 py-4 bg-secondary rounded-circle text-white fw-bold">
              {{ stepItem.stepOrder }}
            </div>
            <div class="ms-17 ms-md-23 p-11 bg-white rounded-2 shadow-sm">
              {{ stepItem.stepContent }}
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-12 mb-16">
      <h2 class="title justify-content-start mb-11">
        <span class="titleIcon bg-secondary-subtle">
          <i class="bi bi-people-fill"></i>
        </span>
        <span> 小撇步 </span>
      </h2>
      <div class="textLsSm text-muted">{{ recipe.note || '無' }}</div>
    </div>
    <div class="col-12 mb-17">
      <h2 class="title justify-content-start mb-11">
        <span class="titleIcon bg-secondary-subtle">
          <i class="bi bi-people-fill"></i>
        </span>
        <span> 更多料理選擇 </span>
      </h2>
      <div class="row row-cols-1 row-cols-md-2 row-cols-xxl-3 gy-14 mb-11" v-if="recipes.length">
        <div class="col" v-for="item in recipes.slice(0, 3)" :key="item._id">
          <CardComponent
            :recipe="item"
            :categories="categories"
            :collects="myProfile.collects"
            @toggle-collect="toggleCollect"
          ></CardComponent>
        </div>
      </div>
    </div>
  </div>

  <AlertModal ref="alertModalRef">
    <template #modal-header>
      <span class="titleIcon bg-danger-subtle">
        <i class="bi bi-exclamation-triangle-fill"></i>
      </span>
      找不到此食譜
    </template>
    <template #modal-content> 找不到此食譜，將為您導入食譜列表頁面 </template>
    <template #modal-footer>
      <button type="button" class="w-50 btn btn-primary" @click="closeAlertModal">關閉</button>
    </template>
  </AlertModal>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { apiGetRecipe, apiGetRecipes } from '@/scripts/api.js';
import { useRoute, useRouter } from 'vue-router';
import messageStore from '@/stores/messageStore.js';
import loadingStore from '@/stores/loadingStore.js';
import tagAndCategoryStore from '@/stores/tagAndCategoryStore.js';
import userStore from '@/stores/userStore.js';

import { getCategoryName, getTagName } from '@/scripts/methods.js';
import AlertModal from '@/components/AlertModal.vue';
import CardComponent from '@/components/CardComponent.vue';

const route = useRoute();
const router = useRouter();
const alertModalRef = ref(null);
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
const recipe = ref({});
const recipes = ref([]);

// 關閉 modal
function closeAlertModal() {
  alertModalRef.value?.hideModal();
  router.push('/recipes');
}

// // 取得食譜資料
// async function getRecipe(id) {
//   console.log('open - getRecipe');
//   openLoading('getRecipe');

//   try {
//     const res = await apiGetRecipe(id);
//     recipe.value = res.data.data;

//     await getRelatedRecipes(recipe.value.category);

//     console.log('close - getRecipe');
//     closeLoading('getRecipe');
//   } catch (err) {
//     pushMessage({
//       style: 'danger',
//       title: '載入失敗',
//       text: err.response?.data?.message || '食譜載入失敗，請重整網頁',
//     });
//     console.log('close err - getRecipe');
//     closeLoading('err getRecipe');
//     router.push('/recipes');
//   }
// }

// // 取得關聯食譜資料
// async function getRelatedRecipes(category) {
//   console.log('open - getRelatedRecipes');
//   openLoading('getRecipe');

//   try {
//     const res = await apiGetRecipes({ category });
//     recipes.value = res.data.data.results;
//     console.log('close - getRelatedRecipes');
//     closeLoading('getRecipe');
//   } catch (err) {
//     pushMessage({
//       style: 'danger',
//       title: '載入失敗',
//       text: err.response?.data?.message || '相關食譜載入失敗，請重整網頁',
//     });
//     console.log('close err - getRelatedRecipes');
//     closeLoading('err getRecipe');
//   }
// }

// 取得食譜資料
async function getData(id) {
  openLoading('getRecipe');

  try {
    // 先取得主要食譜資料
    const resRecipe = await apiGetRecipe(id);
    recipe.value = resRecipe.data.data;

    const a = recipe.value.category;
    console.log('apiGetRecipe 單一食譜成功, category 是 ', a);

    // 並行請求關聯食譜資料
    const resRecipes = await Promise.all([apiGetRecipes({ category: a })]);

    // 設定關聯食譜資料
    recipes.value = resRecipes.data.data.results;

    console.log('apiGetRecipes 關聯食譜成功');

    closeLoading('getRecipe');
  } catch (err) {
    pushMessage({
      style: 'danger',
      title: '載入失敗',
      text: err.response?.data?.message || '食譜載入失敗，請重整網頁',
    });
    closeLoading('err getRecipe', err);
    router.push('/recipes');
  }
}

onMounted(async () => {
  const { id } = route.params;
  if (!id) {
    alertModalRef.value?.openModal();
    return;
  }

  if (!tags.value.length || !categories.value.length) {
    console.log('開啟 - getTagsAndCategories');
    await getTagsAndCategories();
    console.log('關閉 - getTagsAndCategories');
  }

  console.log('開啟 - getRecipe');
  // await getRecipe(id);
  await getData(id);
});
</script>
