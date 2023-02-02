<script lang="ts" setup>

import { ref } from 'vue';

var slide = ref(1)
var autoplay = ref(true)

</script>

<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card flat class="caption-card">
      <h1>Works</h1>
    </q-card>
    <q-card flat class="caption-card">
      <h1>新世界へ旅立とう。</h1>
      <p>コマンド、テクスチャ、音楽など。我々は様々なアプローチでちょっと新しいコンテンツをMinecraftを通して制作しています。</p>
    </q-card>
  </div>
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      :autoplay="autoplay"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      infinite
      swipeable
      animated
      control-color="primary"
      navigation
      padding
      arrows
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/mountains.jpg" />
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/parallax1.jpg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/parallax1.jpg" />
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/quasar.jpg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/quasar.jpg" />
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/linux-avatar.png" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/linux-avatar.png" />
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/mountains.jpg" />
        </div>
      </q-carousel-slide>
    </q-carousel>
</template>

<style lang="scss" scoped>
.caption-card {
  width: 49%
}
</style>