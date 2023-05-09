<script lang="ts" setup>
import TitleCard from '@/components/utils/TitleCard.vue';
import BaseArticle from '@/components/Works/baseArticle.vue';
</script>

<template>
  <BaseArticle
    product-name="prologram++"
    :imgsrc="require('@/assets/Works/Worlds/prologram.png')"
    download-link="https://drive.google.com/uc?id=1af7lR06kG7eW1WpDktaBGt71GvWx1CA9"
  >
    <TitleCard
      title="プログラムを構築してパズルを解け！"
      :desc="[
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
        :desc="[
          'プログラムの基本は、動作と数値。',
          '動作ブロックと数値ブロックをセットで使うことでドローンを操作できる。',
          '幾つかのルールがあるのでお忘れなく。',
        ]"
      />
    </div>

    <TitleCard
      title="ダウンロード"
      :desc="[
        '右下の丸いアイコンから、規約に同意することでダウンロードできます。',
        '対応バージョン：Minecraft 1.15.2 / 1.16 / 1.16.1'  
      ]"
    />
  </BaseArticle>
</template>

<style scoped lang="scss">
.video {
  margin: 0 auto;
  width: min(900px, 80vw);
  aspect-ratio: 16/9;
}
</style>