import axios from 'axios';
import { ref } from 'vue';
import { defineStore } from 'pinia';
import { loadingStore, messageStore } from './index.js';
import { apiGetMyProfile, apiCreateCollect, apiDelCollect } from '@/scripts/api';
import { getToken, clearToken } from '@/scripts/methods';

export default defineStore('userStore', () => {
  const loading = loadingStore();
  const message = messageStore();

  const isLogin = ref(false);
  const myProfile = ref({
    email: '',
    nickName: '',
    gender: 'secret',
    description: '',
    avatarImgUrl: '',
    createdAt: '',
    updatedAt: '',
    _id: '',
    collects: [],
    collectCount: 0,
    recipeCount: 0,
  });

  // 確認是否登入
  function checkLogin() {
    const token = getToken();
    if (token) {
      isLogin.value = true;
      getMyProfile(true, token);
    } else {
      isLogin.value = false;
      clearToken();
      updateMyProfile('reset');
    }
  }

  // 取得我的資料
  async function getMyProfile(isTokenRequired, accessToken) {
    loading.openLoading();
    if (isTokenRequired) {
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    }
    try {
      const res = await apiGetMyProfile();

      updateMyProfile('update', res.data.data);

      loading.closeLoading();
    } catch (err) {
      clearToken();
      updateMyProfile('reset');

      message.pushMessage({
        style: 'danger',
        title: '取得用戶資料失敗',
        text: err.response?.data?.message || '取得用戶資料失敗，請重新註冊',
      });
      loading.closeLoading();
    }
  }

  // 更新我的資料
  function updateMyProfile(action, data) {
    if (action === 'reset') {
      myProfile.value = {
        email: '',
        nickName: '',
        gender: 'secret',
        description: '',
        avatarImgUrl: '',
        createdAt: '',
        updatedAt: '',
        _id: '',
        collects: [],
        collectCount: 0,
        recipeCount: 0,
      };
    } else {
      myProfile.value = data;
    }
  }

  // 收藏/取消收藏
  async function toggleCollect({ active, recipeId }) {
    if (myProfile.value._id == '') {
      message.pushMessage({
        style: 'danger',
        title: '收藏失敗',
        text: '請先登入會員',
      });
      return;
    }
    const apiMethods = {
      create: apiCreateCollect,
      remove: apiDelCollect,
    };
    try {
      loading.openLoading();
      await apiMethods[active](recipeId);
      message.pushMessage({
        style: 'success',
        title: `${active == 'create' ? '新增' : '取消'}收藏成功`,
        text: `${active == 'create' ? '新增' : '取消'}收藏成功`,
      });
      loading.closeLoading();
      await getMyProfile();
    } catch (err) {
      message.pushMessage({
        style: 'danger',
        title: `${active == 'create' ? '新增' : '取消'}收藏失敗`,
        text:
          err.response?.data?.message ||
          `${active == 'create' ? '新增' : '取消'}收藏失敗，請重整網頁`,
      });
      loading.closeLoading();
    }
  }

  return {
    isLogin,
    myProfile,
    checkLogin,
    getMyProfile,
    updateMyProfile,
    toggleCollect,
  };
});
