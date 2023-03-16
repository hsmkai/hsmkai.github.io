<script lang="ts" setup>
import { defineProps } from 'vue';
defineProps(['title', 'subTitle'])
</script>

<template>
  <div class="row vertical-top q-pa-none justify-between">
    <h1>{{ title }}</h1>
    <div class="gt-md col-md-6">
      <h1 style="font-size: 4rem;">{{ subTitle }}</h1>
      <slot></slot>
    </div>
    <div class="lt-md">
      <h1 style="font-size: 2.2rem;">{{ subTitle }}</h1>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  margin-top: 0;
  font-weight:lighter;
}
</style>