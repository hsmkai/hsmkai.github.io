<script lang="ts" setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import TitleCard from '../utils/TitleCard.vue';
</script>

<template>
  <title-card title="About us" sub-title="踏み出せ、新世界へ。">
    <p>コマンド、テクスチャ、音楽など。</p>
    <p>我々は様々なアプローチでちょっと新しいコンテンツをMinecraftを通して制作しています。</p>
  </title-card>
  
  <title-card title="Works" sub-title="新世界へ旅立とう。">
    <p>コマンド、テクスチャ、音楽など。</p>
    <p>我々は様々なアプローチでちょっと新しいコンテンツをMinecraftを通して制作しています。</p>
  </title-card>

  <!-- ドキュメント: https://antoniandre.github.io/vueper-slides/ -->
  <vueper-slides
    autoplay
    :gap="1"
    :visible-slides="3"
    :dragging-distance="70"
    :arrows-outside="false"
    duration="3000"
    fixed-height="300px"
    class="no-shadow"
  >
    <vueper-slide image="https://cdn.quasar.dev/img/mountains.jpg"/>
    <vueper-slide image="https://cdn.quasar.dev/img/parallax1.jpg"/>
    <vueper-slide image="https://cdn.quasar.dev/img/quasar.jpg"/>
    <vueper-slide image="https://cdn.quasar.dev/img/linux-avatar.png"/>
  </vueper-slides>
</template>

<style lang="scss" scoped>
p {
  margin: 0pt;
  font-size: 16pt;
}
</style>