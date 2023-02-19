<script lang="ts" setup>
import TitleCard from '@/components/utils/TitleCard.vue';
import BaseArticle from '@/components/Works/baseArticle.vue';
</script>

<template>
  <BaseArticle :imgsrc="require('@/assets/Works/Worlds/CodeSurvival.jpg')">
    <TitleCard title="Code:Survival" sub-title="荒廃した世界で一人称RTS!"/>

    <p>舞台は、文明が一度滅んだ世界。</p>
    <p>ロボットである自分たちは、生きるために必要な鉱石を採掘して暮らしている。</p>
    <p>ガンタレットとバリケードを駆使して，採掘の邪魔をしてくるロボットから採掘機を守り切れ！</p>
  </BaseArticle>
</template>