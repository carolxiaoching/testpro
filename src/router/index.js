import { createRouter, createWebHashHistory } from 'vue-router';
import { getToken } from '@/scripts/methods';
import { messageStore, userStore } from '@/stores/index';

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('../views/LayoutView.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/HomeView.vue'),
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/AboutView.vue'),
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('../views/ContactView.vue'),
      },
      {
        path: 'qa',
        name: 'qa',
        component: () => import('../views/QAView.vue'),
      },
      {
        path: 'signin',
        name: 'signin',
        component: () => import('../views/SignInView.vue'),
      },
      {
        path: 'signup',
        name: 'signup',
        component: () => import('../views/SignUpView.vue'),
      },
      {
        path: 'reset-password',
        name: 'resetPassword',
        component: () => import('../views/ResetPassword.vue'),
      },
      {
        path: 'forget-password',
        name: 'forgetPassword',
        component: () => import('../views/ForgetPassword.vue'),
      },
      {
        path: 'recipes',
        name: 'recipes',
        component: () => import('../views/RecipesView.vue'),
      },
      {
        path: 'recipe/:id',
        name: 'recipe',
        component: () => import('../views/RecipeView.vue'),
      },
      {
        path: 'recipe-edit/:id',
        name: 'recipeEdit',
        component: () => import('../views/RecipeEditView.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'user/:id',
        name: 'user',
        component: () => import('../views/UserView.vue'),
      },
      {
        path: 'setting',
        name: 'setting',
        component: () => import('../views/SettingView.vue'),
      },
    ],
  },
  {
    path: '/:pathMath(.*)*',
    component: () => import('../views/NotFoundView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: 'active',
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

router.beforeEach((to) => {
  // 若無 token 且為需要登入的頁面，則轉址到登入頁面
  const userRef = userStore();
  const messageRef = messageStore();
  const token = getToken();

  if (to.meta.requiresAuth && token === '') {
    userRef.checkLogin();
    messageRef.pushMessage({
      style: 'danger',
      title: '您尚未登入',
      text: '請先登入後再進行操作',
    });
    router.push('/signIn');
  }
});

export default router;
