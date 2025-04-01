import { ref } from 'vue';
import { defineStore } from 'pinia';

export default defineStore('loadingStore', () => {
  const isLoading = ref(false);
  // 開啟 Loading
  function openLoading(from = '') {
    console.log('openLoading from ', from);

    isLoading.value = true;
  }

  // 關閉 Loading
  function closeLoading(from) {
    console.log('closeLoading from ', from);

    isLoading.value = false;
  }
  return {
    isLoading,
    openLoading,
    closeLoading,
  };
});
