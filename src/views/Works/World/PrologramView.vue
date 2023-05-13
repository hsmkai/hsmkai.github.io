<script lang="ts" setup>
import TitleCard from '@/components/utils/TitleCard.vue';
import BaseArticle from '@/components/Works/baseArticle.vue';
import { ref } from 'vue';

const slide = ref(1)
</script>

<template>
  <BaseArticle
    product-name="prologram++"
    :imgsrc="require('@/assets/Works/Worlds/prologram.png')"
    download-link="https://drive.google.com/uc?id=1af7lR06kG7eW1WpDktaBGt71GvWx1CA9"
  >
    <TitleCard
      title="プログラムを構築してパズルを解け！"
      :abst="[
        'ここはドローンが飛び回る未来世界。',
        '君はドローン操縦士になるため、この試験飛行場へやってきた。',
        'さぁ、君の手でプログラムを構築し、難解なステージに挑め！'
      ]"
    />

    <TitleCard title="紹介映像"/>
    <q-video src="https://www.youtube.com/embed/T-l7o9YdEq0" class="video"/>

    <div class="q-pt-xl">
      <TitleCard
        title="プログラミング"
        :abst="[
          'プログラムの基本は、動作と数値。',
          '動作ブロックと数値ブロックをセットで使うことでドローンを操作できる。',
          '幾つかのルールがあるのでお忘れなく。',
        ]"
      />
      <div class="video">
        <q-carousel
          animated
          v-model="slide"
          navigation
          infinite
          :autoplay="5000"
          transition-prev="slide-right"
          transition-next="slide-left"
          height="100%"
        >
          <q-carousel-slide :name="1" img-src="@/assets/Works/Worlds/prologram/HP_Prologram_1.png" class="video"/>
          <q-carousel-slide :name="2" img-src="@/assets/Works/Worlds/prologram/HP_Prologram_2.png" class="video"/>
        </q-carousel>
      </div>
    </div>

    <TitleCard
      title="ダウンロード"
      :abst="[
        '右下の丸いアイコンから、規約に同意することでダウンロードできます。',
        '対応バージョン：Minecraft 1.15.2 / 1.16 / 1.16.1'  
      ]"
    />
  </BaseArticle>
</template>