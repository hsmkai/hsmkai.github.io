<script lang="ts" setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import TitleCard from '../utils/TitleCard.vue';
</script>

<template>
  <div class="outline">
    <title-card title="About us" sub-title="踏み出せ、新世界へ。" class="headMargin bottomMargin">
      <p>コマンド、テクスチャ、音楽など。</p>
      <p>我々は様々なアプローチでちょっと新しいコンテンツをMinecraftを通して制作しています。</p>
    </title-card>
    
    <title-card title="Works" sub-title="新世界へ旅立とう。" class="headMargin">
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
      class="no-shadow q-ma-lg"
    >
      <vueper-slide image="https://cdn.quasar.dev/img/mountains.jpg"/>
      <vueper-slide image="https://cdn.quasar.dev/img/parallax1.jpg"/>
      <vueper-slide image="https://cdn.quasar.dev/img/quasar.jpg"/>
      <vueper-slide image="https://cdn.quasar.dev/img/linux-avatar.png"/>
    </vueper-slides>
  </div>
</template>

<style lang="scss" scoped>
.outline {
  margin-left: min(50px, 5vw);
}

.headMargin {
  margin-top: 5rem;
}
.bottomMargin {
  margin-bottom: 15rem;
}

p {
  margin: 0pt;
  font-size: 16pt;
}
</style>