<script lang="ts" setup>
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import TopImage from '@/components/Home/TitleView.vue';
import About from '@/components/Home/AboutView.vue';
import Member from '@/components/Home/MemberView.vue';
</script>


<template>
  <div class="home">
    <TopImage/>
    <div class="outline">
      <About/>
      <Member/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.outline {
  margin-left: min(50px, 5vw);
  margin-top: 5rem;
}
</style>