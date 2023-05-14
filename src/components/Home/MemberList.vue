<script setup lang="ts">
import { defineProps } from 'vue';
import IconLink from '../utils/IconLink.vue';
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
  <q-item class="desktop-only q-py-lg">
    <q-item-section side>
      <q-avatar square size="130px">
        <q-img :src="loadAvatar()" class="avater-img"/>
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <div class="text-h5 q-mt-sm">{{ name }}</div>
      <icon-link :href="`https://twitter.com/${twitterName}`" icon="Twitter">
        @{{ twitterName }}
      </icon-link>
      <div class="q-pt-md">
        <template v-for="line in text" :key="line">
          <p style="width: 100%">{{ line }}</p>
        </template>
      </div>
    </q-item-section>
  </q-item>

  <q-expansion-item class="mobile-only" style="width: 80vw;">
    <template v-slot:header>
      <q-item-section side>
        <q-avatar square size="130px">
          <q-img :src="loadAvatar()" class="avater-img"/>
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <div class="text-h4 q-mt-sm">{{ name }}</div>
        <a :href="`https://twitter.com/${twitterName}`" target="_blank" class="text-h5 q-pa-none" style="width: max-content;">
          <q-img src="@/assets/icons/twitter_blue.svg" width="1.6rem"/>@{{ twitterName }}
        </a>
      </q-item-section>
    </template>

    <q-item-section>
      <div class="q-pa-md">
        <template v-for="line in text" :key="line">
          <p style="width: 100%">{{ line }}</p>
        </template>
      </div>
    </q-item-section>
  </q-expansion-item>
</template>

<style scoped lang="scss">
.avater-img {
  height: 100%;
}
</style>