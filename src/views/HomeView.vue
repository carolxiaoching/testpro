<template>
  <section class="position-relative mt-lg-17 mb-18">
    <Swiper
      :pagination="{
        el: '.homeBannerPagination',
        bulletClass: 'homeBannerBullet',
        bulletActiveClass: 'homeBannerBulletActive',
        clickable: true,
      }"
      :navigation="{
        nextEl: `.homeBannerBtnNext`,
        prevEl: `.homeBannerBtnPrev`,
      }"
      :freeMode="true"
      :spaceBetween="30"
      :centeredSlides="true"
      :loop="true"
      :loopAdditionalSlides="3"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :modules="modules"
      :slidesPerView="2"
      :breakpoints="{
        0: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 2,
        },
      }"
    >
      <SwiperSlide v-for="item in recommendRecipes" :key="item._id">
        <div v-if="item.loading">載入中...</div>
        <router-link :to="`/recipe/${item._id}`" class="homeBannerLink" v-else>
          <div :style="`background-image: url(${item.coverImgUrl});`" class="homeBannerImg">
            <div class="homeBannerText">
              <h2 class="mb-4 h4">{{ item.title }}</h2>
              <p class="w-75 mx-auto text-truncate">{{ item.description }}</p>
            </div>
          </div>
        </router-link>
      </SwiperSlide>
    </Swiper>
    <div class="homeBannerPagination" />
    <div class="homeBannerBtnNext">
      <i class="bi bi-caret-right-fill"></i>
    </div>
    <div class="homeBannerBtnPrev">
      <i class="bi bi-caret-left-fill"></i>
    </div>
  </section>
  <section class="position-relative mt-24 mt-md-25 mb-22 mb-md-25">
    <img v-lazy="featureBgImg" class="featureBg d-none d-md-block z-n1" />
    <div class="container text-center">
      <h2 class="mb-12 h3">我的秘密食譜，發現美味的秘密！</h2>
      <p class="featureSubtitle textLs mx-auto mb-18 mb-md-22 text-muted">
        探索我的秘密食譜，讓每道料理都成為你獨特的創作！在這裡，你可以輕鬆記錄、分享和發現各式各樣的食譜，讓烹飪變得更簡單、更有趣，讓每餐都充滿驚喜！
      </p>
      <ul class="row gy-17 mb-0 list-unstyled">
        <li class="col-12 col-sm-6 col-lg-3" v-for="featureItem in feature" :key="feature.title">
          <img v-lazy="featureItem.img" :alt="featureItem.title" class="featureImg mb-8" />
          <p class="mb-8 fs-6 fw-medium">{{ featureItem.title }}</p>
          <p class="featureContent textLs mx-auto text-muted">{{ featureItem.content }}</p>
        </li>
      </ul>
    </div>
  </section>
  <section class="position-relative mb-22 mb-md-25">
    <img v-lazy="recipesSectionBgImg" class="recipesSectionBg d-none d-md-block z-n1" />
    <div class="container">
      <div class="d-flex justify-content-between align-items-end mb-11">
        <h2 class="title justify-content-start">
          <span class="titleIcon bg-secondary-subtle">
            <i class="bi bi-people-fill"></i>
          </span>
          <span> 最新食譜 </span>
        </h2>
        <router-link to="/recipes">看更多 >></router-link>
      </div>
      <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-4 gy-14 mb-22">
        <div class="col" v-for="item in recentRecipes.slice(0, 4)" :key="item._id">
          <CardComponent :recipe="item" :categories="categories" :tags="tags"></CardComponent>
        </div>
      </div>
      <div class="d-flex justify-content-between align-items-end mb-11">
        <h2 class="title justify-content-start">
          <span class="titleIcon bg-secondary-subtle">
            <i class="bi bi-people-fill"></i>
          </span>
          <span> 熱門食譜 </span>
        </h2>
        <router-link to="/recipes">看更多 >></router-link>
      </div>
      <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-4 gy-14">
        <div class="col" v-for="item in hotRecipes.slice(0, 4)" :key="item._id">
          <CardComponent :recipe="item" :categories="categories" :tags="tags"></CardComponent>
        </div>
      </div>
    </div>
  </section>

  <section class="position-relative mb-22 mb-md-25">
    <img v-lazy="categoryTagSectionBgImg" class="categoryTagBg d-none d-md-block z-n1" />
    <div class="container text-center">
      <h2 class="h3 mb-12">尋找靈感？從分類與標籤開始！</h2>
      <p class="categoriesSubtitle textLs mx-auto mb-18 mb-md-22 text-muted">
        不確定要煮什麼嗎？使用分類與標籤，輕鬆找到你喜愛的食譜，無論是快速料理、健康餐點，還是異國風味，幫助你快速找到適合的食譜靈感！
      </p>
      <div class="row align-items-center">
        <div class="col-12 col-lg-6 mb-16 mb-lg-0">
          <div class="d-flex flex-wrap justify-content-center">
            <router-link
              class="categoryBadge d-block mx-8 mx-md-14 mx-lg-8 mx-xl-14 mb-8"
              :to="`/recipes?category=${category._id}`"
              v-for="category in categories.slice(0, 6)"
              :key="category._id"
            >
              <div class="categoryBadgeImage p-8 rounded-4">
                <img
                  v-lazy="category.categoryImgUrl"
                  :alt="category.title"
                  class="categoryBadgeIcon"
                />
              </div>
              <span class="d-block mt-12 text-center h5">
                {{ category.title }}
              </span>
            </router-link>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="d-flex justify-content-center flex-wrap mx-auto p-0">
            <router-link
              class="tagBadge d-block mx-4 mx-xxl-10 my-8 px-8 px-xxl-14 py-4 py-xxl-8 rounded-2 fw-semibold"
              v-for="tag in tags.slice(0, 9)"
              :key="tag._id"
              :to="`/recipes?tag=${tag._id}`"
            >
              # {{ tag.title }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="container mb-22">
    <div class="row">
      <div class="col-12 col-lg-8">
        <div class="p-17 bg-white shadow-sm rounded">
          <h2 class="mb-8 text-center text-lg-start">加入我們的美食訂閱</h2>
          <p class="textLs mb-14 text-center text-lg-start text-muted">
            訂閱我們，獲取最新的美食食譜、烹飪技巧和專屬優惠！立即加入，探索無限的烹飪靈感，讓您的廚房創作更加豐富多彩。不要錯過任何一道美味，成為我們的訂閱會員，讓美食陪伴您的每一天！
          </p>
          <VForm v-slot="{ errors, meta }" @submit="subscription" ref="formRef">
            <label for="email" class="d-block mb-4">
              <span class="text-danger">*</span>
              電子信箱
            </label>
            <div class="input-group">
              <VField
                type="email"
                name="電子信箱"
                id="email"
                class="form-control"
                :class="{
                  'is-invalid': errors['電子信箱'],
                }"
                placeholder="請輸入電子信箱"
                rules="email|required"
                v-model="subscriptionEmail"
                required
              />
              <button
                type="submit"
                id="email"
                class="subscriptionBtn btn btn-primary px-16"
                :class="{ disabled: !meta.valid }"
                :disabled="!meta.valid"
              >
                確認訂閱
              </button>
            </div>

            <ErrorMessage name="電子信箱" class="d-block text-danger" />
          </VForm>
        </div>
      </div>
      <div class="d-none d-lg-block col-4">
        <div class="subscriptionImg w-100 h-100 rounded-2"></div>
      </div>
    </div>
  </section>

  <AlertModal ref="alertModalRef">
    <template #modal-header>
      <span class="titleIcon bg-secondary text-white">
        <i class="bi bi-bell-fill"></i>
      </span>
      感謝您的訂閱
    </template>
    <template #modal-content>
      <p>謝謝您的訂閱！</p>
      <p>最新的美食訊息，將不定時寄送到您的電子信箱</p>
    </template>
    <template #modal-footer>
      <button type="button" class="w-50 btn btn-primary" @click="closeAlertModal">關閉</button>
    </template>
  </AlertModal>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { apiGetRecipes } from '@/scripts/api.js';
import CardComponent from '@/components/CardComponent.vue';
import AlertModal from '@/components/AlertModal.vue';
import messageStore from '@/stores/messageStore.js';
import loadingStore from '@/stores/loadingStore.js';
import tagAndCategoryStore from '@/stores/tagAndCategoryStore.js';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import featureBgImg from '@/assets/images/icon/feature-bg.svg';
import recipesSectionBgImg from '@/assets/images/icon/recipes-section-bg.svg';
import categoryTagSectionBgImg from '@/assets/images/icon/category-tag-section-bg.svg';

import featureImg1 from '@/assets/images/icon/feature-img1.webp';
import featureImg2 from '@/assets/images/icon/feature-img2.webp';
import featureImg3 from '@/assets/images/icon/feature-img3.webp';
import featureImg4 from '@/assets/images/icon/feature-img4.webp';

const loadingRef = loadingStore();
const messageRef = messageStore();
const tagAndCategoryRef = tagAndCategoryStore();
const { openLoading, closeLoading } = loadingRef;
const { pushMessage } = messageRef;
const { getTagsAndCategories } = tagAndCategoryRef;
const { categories, tags } = storeToRefs(tagAndCategoryRef);
const hotRecipes = ref([]);
const recentRecipes = ref([]);
const recommendRecipes = ref(Array.from({ length: 5 }, () => ({ loading: true })));

const modules = [Autoplay, Pagination, Navigation, FreeMode];

const alertModalRef = ref();
const formRef = ref();
const subscriptionEmail = ref('');

const feature = ref([
  {
    img: featureImg1,
    title: '記錄專屬食譜',
    content: '讓您輕鬆記錄和保存每一道獨家美味，不再擔心食譜遺失',
  },
  {
    img: featureImg2,
    title: '收藏夾功能',
    content: '方便地收藏和管理您喜愛的食譜，隨時輕鬆查找和使用。',
  },
  {
    img: featureImg3,
    title: '分享烹飪創意',
    content: '輕鬆分享您的創新料理，讓美食愛好者學習您的獨特風味。',
  },
  {
    img: featureImg4,
    title: '探索美味靈感',
    content: '來自世界各地的豐富美味食譜，讓烹飪創作充滿靈感和新意',
  },
]);

// 開啟訂閱 modal
function subscription() {
  alertModalRef.value?.openModal();
}

// 關閉 modal
function closeAlertModal() {
  formRef.value.resetForm();
  alertModalRef.value?.hideModal();
}

// 取得食譜列表
async function getRecipes() {
  openLoading();
  try {
    const [hotRecipesRes, recentRecipesRes, recommendRecipesRes] = await Promise.all([
      apiGetRecipes({ sort: 'hot' }), // 熱門食譜
      apiGetRecipes({ sort: 'desc' }), // 最新食譜
      apiGetRecipes({ isRecommended: true }), // 編輯推薦
    ]);

    // 更新數據
    hotRecipes.value = hotRecipesRes.data.data.results;
    recentRecipes.value = recentRecipesRes.data.data.results;
    recommendRecipes.value = recommendRecipesRes.data.data.results;

    closeLoading();
  } catch (err) {
    pushMessage({
      style: 'danger',
      title: '取得食譜列表失敗',
      text: err.response?.data?.message || '請重整網頁再試一次',
    });
    closeLoading();
  }
}

onMounted(async () => {
  if (!tags.value.length || !categories.value.length) {
    await getTagsAndCategories();
  }

  getRecipes();
});
</script>
