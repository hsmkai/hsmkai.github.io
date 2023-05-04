<script lang="ts" setup>
import { defineProps } from 'vue';

interface Prop {
  title: string,
  subTitle?: string
}
defineProps<Prop>()
</script>

<template>
  <div class="row vertical-top q-pa-none justify-between">
    <h1>{{ title }} {{ subTitle }}</h1>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  margin-top: 0;
  font-weight:lighter;
}
</style>