<script lang="ts" setup>
import TitleCard from '@/components/utils/TitleCard.vue';
import BaseArticle from '@/components/Works/baseArticle.vue';
</script>

<template>
  <BaseArticle :imgsrc="require('@/assets/Works/Worlds/prologram.png')">
    <TitleCard title="prologram" sub-title="プログラムを構築してパズルを解け！"/>

    <p>ここはドローンが飛び回る未来世界。</p>
    <p>君はドローン操縦士になるため、この試験飛行場へやってきた。</p>
    <p>さぁ、君の手でプログラムを構築し、難解なステージに挑め！</p>
  </BaseArticle>
</template>