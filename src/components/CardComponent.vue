<template>
  <div class="card h-100 position-relative">
    <router-link :to="`/recipe/${recipe._id}`" class="cardHedaer position-relative">
      <div class="cardCategory py-2 px-6 bg-secondary rounded-2 text-white z-99">
        {{ getCategoryName(categories, recipe.category) }}
      </div>
      <div class="cardCover d-block rounded-2 overflow-hidden">
        <img
          v-lazy="recipe.coverImgUrl"
          class="cardImage w-100 h-100 object-fit-cover"
          :alt="recipe.title"
        />
      </div>
      <h5 class="px-4 pt-8 pb-2">
        {{ recipe.title }}
      </h5>
    </router-link>
    <p class="mb-8 px-4">
      <router-link :to="`/user/${recipe.user?._id}`" class="link-muted">
        {{ recipe.user?.nickName }}
      </router-link>
    </p>
    <div class="cardCollect d-block z-99" v-if="mode === 'collect'">
      <a
        href="#"
        class="cardCollectBtn d-block py-4 px-6 rounded-circle text-danger"
        v-if="collects.includes(recipe._id)"
        @click.prevent="$emit('toggle-collect', { active: 'remove', recipeId: recipe._id })"
      >
        <i class="bi bi-heart-fill"></i>
      </a>
      <a
        href="#"
        class="cardCollectBtn d-block py-4 px-6 rounded-circle"
        v-else
        @click.prevent="$emit('toggle-collect', { active: 'create', recipeId: recipe._id })"
      >
        <i class="bi bi-heart"></i>
      </a>
    </div>
    <ul
      class="cardInfo list-unstyled d-flex justify-content-around m-0 p-0 rounded-2 text-center overflow-hidden"
    >
      <li class="d-block w-50 p-4 border-end">
        <i class="bi bi-clock-fill me-4"></i>
        {{ recipe.cookingTime }}
      </li>
      <li class="d-block w-50 p-4">
        <i class="bi bi-emoji-smile-fill me-4"></i>
        {{ recipe.servings }} 人份
      </li>
    </ul>
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
    default: '',
  },
});
</script>
