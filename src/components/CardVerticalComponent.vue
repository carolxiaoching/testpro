<template>
  <div
    class="d-flex flex-column flex-md-row position-relative mb-12 p-11 bg-white rounded-2 shadow-sm"
  >
    <div class="cardVerticalCollect d-block" v-if="mode === 'collect'">
      <a
        href="#"
        class="cardVerticalCollectBtn d-block px-6 py-4 rounded-circle text-danger"
        v-if="collects.includes(recipe._id)"
        @click.prevent="$emit('toggle-collect', { active: 'remove', recipeId: recipe._id })"
      >
        <i class="bi bi-heart-fill"></i>
      </a>
      <a
        href="#"
        class="cardVerticalCollectBtn d-block px-6 py-4 rounded-circle"
        v-else
        @click.prevent="$emit('toggle-collect', { active: 'create', recipeId: recipe._id })"
      >
        <i class="bi bi-heart"></i>
      </a>
    </div>
    <div class="cardVerticalCollect d-block" v-if="mode !== 'collect'">
      <a
        href="#"
        class="cardVerticalDelBtn d-block px-6 py-4 rounded-circle text-white"
        @click.prevent="
          $emit('open-del-modal', { recipeId: recipe._id, recipeTitle: recipe.title })
        "
      >
        <i class="bi bi-trash"></i>
      </a>
    </div>
    <div
      class="cardVerticalCover backgroundCover mb-11 mb-md-0 me-md-11 rounded-2"
      :style="{ backgroundImage: `url(${recipe.coverImgUrl})` }"
    ></div>
    <div class="flex-fill text-center text-md-start">
      <div class="d-inline-block mb-8 px-6 py-2 bg-secondary rounded-2 text-white">
        <small>
          {{ getCategoryName(categories, recipe.category) }}
        </small>
      </div>
      <h5 class="mb-2">
        {{ recipe.title }}
      </h5>
      <router-link :to="`/user/${recipe.user?._id}`" class="link-muted d-block mb-6">
        {{ recipe.user?.nickName }}
      </router-link>
      <p class="textClamp textClampSm textLsSm mb-8 text-muted overflow-hidden">
        {{ recipe.description }}
      </p>
      <div class="text-center text-md-end">
        <router-link
          :to="`/recipe-edit/${recipe._id}`"
          class="btn btn-sm btn-outline-primary me-8 px-11"
          v-if="mode === 'edit'"
        >
          編輯食譜
        </router-link>
        <router-link :to="`/recipe/${recipe._id}`" class="btn btn-sm btn-primary px-11">
          查看更多
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getCategoryName, getTagName } from '@/scripts/methods.js';

const props = defineProps({
  recipe: {
    type: Object,
    default() {
      return {};
    },
  },
  categories: {
    type: Object,
    default() {
      return [];
    },
  },
  tags: {
    type: Object,
    default() {
      return [];
    },
  },
  status: {
    type: String,
    default: '',
  },
  collects: {
    type: Array,
    default() {
      return [];
    },
  },
  mode: {
    type: String,
    default: 'collect',
  },
});
</script>
