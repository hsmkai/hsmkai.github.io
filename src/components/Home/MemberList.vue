<script setup lang="ts">
import { defineProps } from 'vue';
interface Props {
  imgPath: string
  name: string
  twitterName: string
  text: string[]
}
const prop = defineProps<Props>()

function loadAvatar() {
  return require(`@/assets/Home/${prop.imgPath}`)
}
</script>

<template>
  <q-item>
    <q-item-section side>
      <q-avatar size="130px">
        <q-img :src="loadAvatar()" class="avater-img"/>
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <div class="text-h5 q-mt-sm">{{ name }}</div>
      <a :href="`https://twitter.com/${twitterName}`" target="_blank" class="text-h6 q-pa-none" style="width: max-content;">
        Twitter_@{{ twitterName }}
      </a>
      <div class="q-pt-md">
        <template v-for="line in text" :key="line">
          <p class="caption q-ma-none"  style="width: 100%">{{ line }}</p>
        </template>
      </div>
    </q-item-section>
  </q-item>
</template>

<style scoped lang="scss">
.avater-img {
  height: 100%;
}

.caption {
  font-size: 1rem;
}
</style>