<script lang="ts" setup>
import { defineProps } from 'vue';
import DownloadBtn from './downloadBtn.vue';

interface Prop {
  productName: string
  imgsrc: string
  downloadLink?: string
}
defineProps<Prop>()
</script>

<template>
  <q-img :src="imgsrc"/>
  
  <div class="article">
    <slot></slot>
  </div>

  <download-btn :product-name="productName" :download-link="downloadLink"/>
</template>