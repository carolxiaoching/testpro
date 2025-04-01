import axios from 'axios';

const { VITE_APIURL } = import.meta.env;
const api = VITE_APIURL;

// User
export const apiSignUp = (data) => axios.post(`${api}/api/user/signUp`, data);
export const apiSignIn = (data) => axios.post(`${api}/api/user/signIn`, data);
export const apiForgetPassword = (data) => axios.post(`${api}/api/forget-password`, data);
export const apiResetPassword = (data) => axios.post(`${api}/api/reset-password`, data);
export const apiGetUserPublicProfile = (id) => axios.get(`${api}/api/user/${id}/profile`);
export const apiGetMyProfile = () => axios.get(`${api}/api/user/profile`);
export const apiUpdateProfile = (data) => axios.patch(`${api}/api/user/profile`, data);
export const apiUpdatePassword = (data) => axios.post(`${api}/api/user/updatePassword`, data);
export const apiGetCollectList = ({
  page = 1,
  perPage = 8,
  sort = 'desc',
  category = '',
  keyword = '',
  tags = [],
} = {}) =>
  axios.get(`${api}/api/user/getCollectList`, {
    params: {
      page,
      perPage,
      sort: sort ? sort : undefined,
      category: category && category !== '全部' ? category : undefined,
      keyword: keyword ? keyword : undefined,
      tags: tags.length ? tags.join(',') : undefined,
    },
  });

// Category
export const apiGetCategories = () => axios.get(`${api}/api/categories`);

// Tag
export const apiGetTags = () => axios.get(`${api}/api/tags`);

// Image
export const apiGetImage = (id) => axios.get(`${api}/api/image/${id}`);
export const apiDelImage = (id) => axios.delete(`${api}/api/image/${id}`);
export const apiCreateImage = (data, type) => axios.post(`${api}/api/image?type=${type}`, data);

// Recipe
export const apiGetRecipes = ({
  page = 1,
  perPage = 9,
  sort = 'desc',
  category = '',
  keyword = '',
  tags = [],
  isRecommended,
} = {}) =>
  axios.get(`${api}/api/publicRecipes`, {
    params: {
      page,
      perPage,
      sort: sort ? sort : undefined,
      category: category && category !== '全部' ? category : undefined,
      keyword: keyword ? keyword : undefined,
      tags: tags.length ? tags.join(',') : undefined,
      isRecommended: isRecommended ?? undefined,
    },
  });

export const apiGetUserRecipes = (
  userId,
  { page = 1, perPage = 8, sort = 'desc', category = '', keyword = '', tags = [] } = {}
) =>
  axios.get(`${api}/api/publicRecipes/user/${userId}`, {
    params: {
      page,
      perPage,
      sort: sort ? sort : undefined,
      category: category && category !== '全部' ? category : undefined,
      keyword: keyword ? keyword : undefined,
      tags: tags.length ? tags.join(',') : undefined,
    },
  });
export const apiGetRecipe = (id) => axios.get(`${api}/api/recipe/${id}`);
export const apiGetMyRecipes = ({
  page = 1,
  perPage = 9,
  sort = 'desc',
  category = '',
  keyword = '',
  tags = [],
  isPublic,
} = {}) =>
  axios.get(`${api}/api/recipes`, {
    params: {
      page,
      perPage,
      sort: sort ? sort : undefined,
      category: category && category !== '全部' ? category : undefined,
      keyword: keyword ? keyword : undefined,
      tags: tags.length ? tags.join(',') : undefined,
      isPublic: isPublic ?? undefined,
    },
  });

export const apiCreateRecipe = (data) => axios.post(`${api}/api/recipe`, data);
export const apiUpdateRecipe = (data, id) => axios.patch(`${api}/api/recipe/${id}`, data);
export const apiDelRecipe = (id) => axios.delete(`${api}/api/recipe/${id}`);
export const apiCreateCollect = (id) => axios.post(`${api}/api/recipe/${id}/collect`);
export const apiDelCollect = (id) => axios.delete(`${api}/api/recipe/${id}/collect`);
