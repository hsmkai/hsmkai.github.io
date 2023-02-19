<script lang="ts" setup>
import { defineProps } from 'vue';
defineProps(['imgsrc'])
</script>

<template>
  <q-img :src="imgsrc" alt="" class="mainImg"/>
  <div class="article">
    <slot></slot>
  </div>

  <q-page-container>
    <q-page-sticky position="bottom-right" :offset="[0, 0]">
      <q-btn label="test" icon="school"/>
    </q-page-sticky>
  </q-page-container>
</template>

<style lang="scss" scoped>
.mainImg {
  top: 50px;
  height: calc(100vh - 50px)
}
</style>