import { ref, onMounted } from 'vue';
import Modal from 'bootstrap/js/dist/modal';

// Modal
export function useModal(modalRef) {
  const modal = ref(null);

  onMounted(() => {
    modal.value = new Modal(modalRef.value);

    // 解決 Bootstrap Modal 關閉後焦點問題
    // https://github.com/twbs/bootstrap/issues/41005
    modalRef.value.addEventListener('hide.bs.modal', () => {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    });
  });

  const openModal = () => {
    modal.value?.show();
  };

  const hideModal = () => {
    modal.value?.hide();
  };

  return {
    modal,
    openModal,
    hideModal,
  };
}

// token 相關

export const setToken = (token) => {
  const expries = new Date(Date.now() + 1000 * 60 * 60).toGMTString();
  document.cookie = `mySecretCookbookFront=${token}; expires=${expries}; path=/`;
};

export const getToken = () => {
  const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)mySecretCookbookFront\s*=\s*([^;]*).*$)|^.*$/,
    '$1'
  );
  return token;
};

export const clearToken = () => {
  document.cookie = 'mySecretCookbookFront=;expires=;path=/';
};

// 取得時間
export const getTime = (time) => {
  const newTime = new Date(time);
  const year = newTime.getFullYear();
  const month = newTime.getMonth() < 9 ? `0${newTime.getMonth() + 1}` : newTime.getMonth() + 1;
  const date = newTime.getDate() < 9 ? `0${newTime.getDate()}` : newTime.getDate();
  return `${year}/${month}/${date}`;
};

// 利用分類 ID 取得分類名稱
export function getCategoryName(categoriesValue, categoryId) {
  const category = categoriesValue.find((item) => item._id === categoryId);
  return category ? category.title : '未分類';
}

// 利用標籤 ID 取得標籤名稱
export function getTagName(tagsValue, tagId) {
  const tag = tagsValue.find((item) => item._id === tagId);
  return tag ? tag.title : '';
}

// 差幾天
export function getDaysDifference(targetDateStr) {
  const targetDate = new Date(targetDateStr);
  const today = new Date();

  // 設定時間為 00:00:00 避免影響計算
  targetDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const diffTime = today - targetDate; // 只計算過去的日期
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); // 轉換為天數

  return diffDays >= 0 ? diffDays : 0; // 避免未來日期返回負數
}
