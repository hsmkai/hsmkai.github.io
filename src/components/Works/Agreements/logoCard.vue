<script setup lang="ts">
import { defineProps } from 'vue';
interface Prop {
  imgFileName: string
  btnLabel: string
}
const prop = defineProps<Prop>()

function getImg() {
  return require(`@/assets/logo/${prop.imgFileName}_black.svg`)
}
</script>

<template>
  <q-card class="q-pa-lg q-ma-lg column">
    <div class="fit" style="flex: 1 0 0;">
      <div class="fit" style="display: flex; align-items: center;">
        <q-img :src="getImg()"/>
      </div>
    </div>

    <q-card-actions align="center" class="q-pt-xl">
      <q-btn :label="btnLabel" color="primary" :href="`/download/${imgFileName}.zip`"/>
    </q-card-actions>
  </q-card>
</template>