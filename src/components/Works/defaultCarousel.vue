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

      <template v-slot:navigation-icon="{ active, btnProps, onClick }">
        <q-btn v-if="active" size="5pt" :icon="btnProps.icon" color="primary" flat round dense @click="onClick" />
        <q-btn v-else size="5pt" :icon="btnProps.icon" color="grey-5" flat round dense @click="onClick" />
      </template>
    </q-carousel>
  </div>
</template>