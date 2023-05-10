<script setup lang="ts">
import { defineProps } from 'vue';

interface Prop {
  href: string
  icon?: 'Twitter' | 'GitHub' | 'YouTube'
}
const prop = defineProps<Prop>()

function getIcon() {
  switch (prop.icon) {
    case 'Twitter':
      return require('@/assets/icons/twitter_blue.svg')
    case 'GitHub':
      return require('@/assets/icons/github.svg')
    case 'YouTube':
      return require('@/assets/icons/youtube_red.svg')
    default:
      break;
  }
}
</script>

<template>
  <a :href="href" target="_blank" class="text-h6 q-pa-none">
    <slot name="icon">
      <q-img :src="getIcon()" width="1.3rem" class="q-mr-xs"/>
    </slot>
    <slot/>
  </a>
</template>