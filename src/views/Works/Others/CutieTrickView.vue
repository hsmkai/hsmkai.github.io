<script lang="ts" setup>
import TitleCard from '@/components/utils/TitleCard.vue';
import BaseArticle from '@/components/Works/baseArticle.vue';
import { ref } from 'vue';

const slide = ref(1)
const videoIds = [
  'wqiobdp_bnA',
  'di2BPEWqSVY',
]
</script>

<template>
  <BaseArticle
    product-name="Cutie-Trick!!"
    :imgsrc="require('@/assets/Works/Others/cutie_trick.png')"
    download-link="https://drive.google.com/uc?id=1TUPhD7HfmB7BHOQmXhGI06jH8GntrqQk"
  >
    <TitleCard 
      title="マイクラのハロウィンを更に楽しく！"
      :desc="[
        'かわいい魔女が!?',
        'かわいいピグリンが!?',
        'リソースパックでハロウィンを楽しもう！',
      ]"
    />

    <TitleCard
      title="かわいいピグリンと一緒に冒険!?"
      :desc="[
        ]"
    >
      <template v-slot:desc>
        <p>サバイバルでもかわいいピグリンたちと一緒に冒険したい！！</p>
        <p>そんな願いが叶うデータパック<a href="https://ux.getuploader.com/sayasashi/download/23">『Friendship with Piglin!』</a>を鞘笹さんが配布されています！</p>
        <p>一緒にDLして遊んでみてはいかがでしょうか！</p>
        <br/>
        <p>※『Friendship with Piglin!』は斜向とは無関係です。利用規約などは別途ご確認ください。</p>
      </template>
    </TitleCard>

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

    <TitleCard
      title="ダウンロード"
      :desc="[
        '右下の丸いアイコンから、規約に同意することでダウンロードできます。',
        '対応バージョン：Minecraft 1.16.x',
        '必須ソフトウェア：OptiFine',
      ]"
    />
  </BaseArticle>
</template>