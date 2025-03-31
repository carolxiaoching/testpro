<template>
  <NavbarComponent />
  <main
    class="main"
    :class="{
      'container-lg': $route.name !== 'home',
      'd-flex justify-content-center align-items-center':
        $route.name == 'forgetPassword' || $route.name == 'resetPassword',
    }"
  >
    <RouterView />
  </main>
  <FooterComponent />
</template>

<script setup>
import NavbarComponent from '@/components/NavbarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
</script>
