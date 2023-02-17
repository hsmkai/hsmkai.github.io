<script lang="ts" setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
</script>

<template>
  <div class="q-pa-md">
    <q-card flat class="caption-card">
      <q-card-actions align="around" class="title-actions">
        <q-card-section>
          <h1 class="title-h1">About us</h1>
        </q-card-section>
        <q-card-section>
          <h1>踏み出せ、新世界へ。</h1>
          <p>コマンド、テクスチャ、音楽など。</p>
          <p>我々は様々なアプローチでちょっと新しいコンテンツをMinecraftを通して制作しています。</p>
        </q-card-section>
      </q-card-actions>
    </q-card>
  </div>

  <div class="q-pa-md">
    <q-card flat class="caption-card">
      <q-card-actions align="around" class="title-actions">
        <q-card-section>
          <h1 class="title-h1">Works</h1>
        </q-card-section>
        <q-card-section>
          <h1>新世界へ旅立とう。</h1>
          <p>コマンド、テクスチャ、音楽など。</p>
          <p>我々は様々なアプローチでちょっと新しいコンテンツをMinecraftを通して制作しています。</p>
        </q-card-section>
      </q-card-actions>
    </q-card>
  </div>

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
.caption-card {
  align-items: baseline;
}
.title-h1 {
  width: 300px;
  margin-bottom: 0;
}
.title-actions {
  align-items: baseline;
}

h1 {
  margin-top: 0;
  font-weight:lighter;
}

p {
  margin: 0pt;
  font-size: 16pt;
}
</style>