<template>
  <div class="container-fluid">
    <div class="row justify-content-center py-17">
      <ul class="list-unstyled d-flex justify-content-center mb-16 p-0">
        <li
          class="stepProgressItem active position-relative me-lg-17 px-14 py-8 rounded-3 text-center"
          :class="{ stepProgressActive: step === 1 }"
        >
          <span class="d-block fw-medium">STEP 1</span>
          封面與資料
        </li>
        <li
          class="stepProgressItem position-relative me-lg-17 px-14 py-8 rounded-3 text-center"
          :class="{ active: step > 1, stepProgressActive: step === 2 }"
        >
          <span class="d-block fw-medium">STEP 2</span>
          成分與食材
          <span class="stepProgressLine d-none d-lg-block w-100 z-n1"></span>
        </li>
        <li
          class="stepProgressItem position-relative me-lg-17 px-14 py-8 rounded-3 text-center"
          :class="{ active: step > 2, stepProgressActive: step === 3 }"
        >
          <span class="d-block fw-medium">STEP 3</span>
          步驟與備註
          <span class="stepProgressLine d-none d-lg-block w-100 z-n1"></span>
        </li>
        <li
          class="stepProgressItem position-relative me-lg-17 px-14 py-8 rounded-3 text-center"
          :class="{ active: step == 4, stepProgressActive: step === 4 }"
        >
          <span class="d-block fw-medium">STEP 4</span>
          確認與送出
          <span class="stepProgressLine d-none d-lg-block w-100 z-n1"></span>
        </li>
      </ul>

      <RecipeBasicsEdit
        v-if="step == 1"
        @update-step="updateStep"
        :recipe="recipe"
        :categories="categories"
        :tags="tags"
        :temp-recipe="tempRecipe"
      />
      <RecipeIngredientsEdit v-if="step == 2" @update-step="updateStep" :temp-recipe="tempRecipe" />
      <RecipeStepsEdit v-if="step == 3" @update-step="updateStep" :temp-recipe="tempRecipe" />
      <RecipeSubmit
        v-if="step == 4"
        @update-step="updateStep"
        :recipe="recipe"
        :categories="categories"
        :tags="tags"
        :temp-recipe="tempRecipe"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router';
import { apiGetRecipe } from '@/scripts/api.js';
import RecipeBasicsEdit from '@/components/RecipeBasicsEdit.vue';
import RecipeIngredientsEdit from '@/components/RecipeIngredientsEdit.vue';
import RecipeStepsEdit from '@/components/RecipeStepsEdit.vue';
import RecipeSubmit from '@/components/RecipeSubmit.vue';
import messageStore from '@/stores/messageStore.js';
import loadingStore from '@/stores/loadingStore.js';
import tagAndCategoryStore from '@/stores/tagAndCategoryStore.js';
import userStore from '@/stores/userStore.js';

const router = useRouter();
const route = useRoute();
const userRef = userStore();
const tagAndCategoryRef = tagAndCategoryStore();
const loadingRef = loadingStore();
const messageRef = messageStore();
const { openLoading, closeLoading } = loadingRef;
const { pushMessage } = messageRef;
const { getTagsAndCategories } = tagAndCategoryRef;
const { myProfile } = storeToRefs(userRef);
const { categories, tags } = storeToRefs(tagAndCategoryRef);
const step = ref(1);
const recipe = ref({});
const tempRecipe = ref({
  nutritionFacts: {
    calories: 0,
    protein: 0,
    totalFat: 0,
    totalCarb: 0,
    sodium: 0,
    sugar: 0,
  },
  title: '',
  coverImgUrl: '',
  isPublic: false,
  category: '',
  cookingTime: '',
  description: '',
  servings: 1,
  ingredients: [
    {
      ingredientName: '',
      ingredientQty: '',
    },
  ],
  steps: [
    {
      stepContent: '',
    },
  ],
  note: '',
  tags: [],
});

// 更新步驟
function updateStep(item) {
  Object.assign(tempRecipe.value, item.data);
  step.value = item.step;
}

// 取得食譜資料
async function getRecipe(id) {
  openLoading();

  try {
    const res = await apiGetRecipe(id);
    recipe.value = { ...res.data?.data };
    tempRecipe.value = JSON.parse(JSON.stringify(res.data?.data));

    // 若食譜不是自己的，則跳轉至食譜列表
    if (tempRecipe.value.user._id !== myProfile.value._id) {
      pushMessage({
        style: 'danger',
        title: '權限不足',
        text: '您無法編輯他人的食譜',
      });
      router.push('/recipes');
    }

    closeLoading();
  } catch (err) {
    pushMessage({
      style: 'danger',
      title: '載入失敗',
      text: err.response?.data?.message || '載入失敗，請重整網頁',
    });
    closeLoading();
  }
}

onMounted(async () => {
  if (!tags.value.length || !categories.value.length) {
    await getTagsAndCategories();
  }
  // getData();
  const { id } = route.params;
  if (id !== 'new') {
    await getRecipe(id);
  }
});
</script>
