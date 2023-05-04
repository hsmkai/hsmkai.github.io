<script setup lang="ts">
import { defineProps } from 'vue';
interface Props {
  imgPath: string
  name: string
}
defineProps<Props>()

function loadAvatar(fileName: string) {
  // return require(`@/assets/Member/${name}`)
  return fileName
}
</script>

<template>
  <q-item>
    <q-item-section side>
      <q-avatar size="130px">
        <q-img :src="loadAvatar(imgPath)" class="avater-img"/>
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <p class="title q-ma-none">{{ name }}</p>
    </q-item-section>
  </q-item>
</template>

<style scoped lang="scss">
.avater-img {
  height: 100%;
}
</style>