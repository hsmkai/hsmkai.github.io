<script lang="ts" setup>
import { defineProps } from 'vue';

interface Prop {
  title: string,
  subTitle?: string
  desc?: string[]
}
defineProps<Prop>()
</script>

<template>
  <div class="row vertical-top q-pa-none justify-between">
    <h1 class="q-ma-none">
      {{ title }} <br v-if="$q.platform.is.mobile"/>{{ subTitle }}
    </h1>
  </div>
  <div v-if="desc !== void 0" class="q-py-xl">
    <template v-for="text in desc" :key="text">
      <p>{{ text }}</p>
    </template>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  font-size: 3.5rem;
  margin-top: 0;
  font-weight:lighter;
}

p {
  padding: 0;
}
</style>