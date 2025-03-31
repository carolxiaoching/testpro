<template>
  <Loading v-model:active="isLoading" :can-cancel="false" :is-full-page="true" :z-index="1060" />
  <Toast />
  <RouterView :key="$route.name === 'user' ? $route.fullPath : $route.path" />
</template>

<script setup>
import { storeToRefs } from 'pinia';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import loadingStore from '@/stores/loadingStore.js';
import Toast from '@/components/ToastComponent.vue';

const loadingRef = loadingStore();
const { isLoading } = storeToRefs(loadingRef);
</script>

<style lang="scss">
@import '@/assets/scss/all.scss';
</style>
