<script lang="ts" setup>
import TitleCard from '@/components/utils/TitleCard.vue';
import BaseArticle from '@/components/Works/baseArticle.vue';
import { ref } from 'vue';

const slide = ref(1)
const videoIds = [
  '7xZwQdOsvUM',
  'G52AYzpK6gs',
  'b5UYokxXX-A'
]
</script>

<template>
  <BaseArticle
    product-name="Code:Survival"
    :imgsrc="require('@/assets/Works/Worlds/CodeSurvival.jpg')"
    download-link="https://drive.google.com/uc?id=1ONEUychp5ug8ADqWxM2xtkqgs3NzhIKp"
  >
    <TitleCard
      title="荒廃した世界で一人称RTS!"
      :abst="[
        '舞台は、文明が一度滅んだ世界。',
        'ロボットである自分たちは、生きるために必要な鉱石を採掘して暮らしている。',
        'ガンタレットとバリケードを駆使して、採掘の邪魔をしてくるロボットから採掘機を守り切れ！',
      ]"
    />

    <TitleCard title="紹介映像"/>
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="5000"
      transition-prev="slide-right"
      transition-next="slide-left"
      style="height: 100%;"
    >
      <template v-for="(id, idx) in videoIds" :key="id">
        <q-carousel-slide :name="idx">
          <q-video :src="`https://www.youtube.com/embed/${id}`" class="video"/>
        </q-carousel-slide>
      </template>
    </q-carousel>

    <div class="q-pt-xl">
      <TitleCard
        title="Real-Time Strategy(RTS)とは？"
        :abst="[
          'Real-time Strategy(RTS)とは、リアルタイムで進行する戦況を俯瞰視点で捉え、戦略を立てて敵と戦うゲームです。',
          'この配布ワールドでは、俯瞰視点ではなく一人称で敵に対応して採掘機を守ります。',
        ]"
      />
    </div>

    <TitleCard
      title="採掘機の防衛"
      :abst="[
        '採掘機を作動させると、敵が察知して30秒後に襲撃してきます。',
        '敵は最短経路で採掘機に向かってくるので経路を考え、アームズを駆使して採掘機を守りましょう！',
      ]"
    />

    <TitleCard
      title="ダウンロード"
      :abst="[
        '右下の丸いアイコンから、規約に同意することでダウンロードできます。',
        '対応バージョン：Minecraft 1.14.4  シングルプレイ専用',
        '必須ソフトウェア：OptiFine',
      ]"
    />

  </BaseArticle>
</template>