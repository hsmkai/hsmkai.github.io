<script lang="ts" setup>
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import TopImage from '@/components/Home/TitleView.vue';
import About from '@/components/Home/AboutView.vue';
import Member from '@/components/Home/MemberView.vue';
</script>


<template>
  <TopImage/>
  <div id="about" class="article">
    <About/>
    <Member class="q-pt-xl"/>
  </div>
</template>