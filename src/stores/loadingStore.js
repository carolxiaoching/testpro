import { ref } from 'vue';
import { defineStore } from 'pinia';

export default defineStore('loadingStore', () => {
  const isLoading = ref(false);
  // 開啟 Loading
  function openLoading() {
    console.log('openLoading');

    isLoading.value = true;
  }

  // 關閉 Loading
  function closeLoading() {
    console.log('closeLoading');

    isLoading.value = false;
  }
  return {
    isLoading,
    openLoading,
    closeLoading,
  };
});
