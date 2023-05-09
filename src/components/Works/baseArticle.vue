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

  <q-page-container>
    <download-btn :product-name="productName" :download-link="downloadLink"/>
  </q-page-container>
</template>