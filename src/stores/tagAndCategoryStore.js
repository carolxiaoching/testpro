import { ref } from 'vue';
import { defineStore } from 'pinia';
import { loadingStore, messageStore } from './index.js';
import { apiGetTags, apiGetCategories } from '@/scripts/api';

export default defineStore('tagAndCategoryStore', () => {
  const loading = loadingStore();
  const message = messageStore();
  const tags = ref([]);
  const categories = ref([]);

  // 取得分類與標籤
  async function getTagsAndCategories() {
    loading.openLoading();
    try {
      const tagsRes = await apiGetTags();
      const categoriesRes = await apiGetCategories();
      tags.value = tagsRes.data.data;
      categories.value = categoriesRes.data.data;

      loading.closeLoading();
    } catch (err) {
      message.pushMessage({
        style: 'danger',
        title: '取得標籤與分類失敗',
        text: err.response?.data?.message || '取得標籤與分類失敗，請重整網頁',
      });
      loading.closeLoading();
    }
  }

  return {
    tags,
    categories,
    getTagsAndCategories,
  };
});
