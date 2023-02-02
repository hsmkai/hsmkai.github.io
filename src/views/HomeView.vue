<script lang="ts" setup>
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import TitleView from '@/components/Home/TitleView.vue';
import AboutView from '@/components/Home/AboutView.vue';
import WorksView from '@/components/Home/WorksView.vue';

</script>


<template>
  <div class="home">
    <TitleView />
    <AboutView />
    <WorksView />
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>