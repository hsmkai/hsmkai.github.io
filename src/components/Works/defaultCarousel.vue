<script setup lang="ts">
import { defineProps, ref } from 'vue';

interface Prop {
  startIdx?: number
}
const prop = defineProps<Prop>()

const slide = ref(prop.startIdx ?? 1)
</script>

<template>
  <div class="innerAssets">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="5000"
      transition-prev="slide-right"
      transition-next="slide-left"
      height="100%"
    >
      <slot/>
    </q-carousel>
  </div>
</template>