<script lang="ts" setup>
import TitleCard from '@/components/utils/TitleCard.vue';
import BaseArticle from '@/components/Works/baseArticle.vue';
</script>

<template>
  <BaseArticle
    product-name="マイクラ博物館の謎"
    :imgsrc="require('@/assets/Home/museum.png')"
  >
    <TitleCard
      title="マインクラフト × 謎解き！"
      :abst="[
        'マインクラフトの全てが展示されている博物館。',
        'そこに迷い込んだあなたは一人の少女と出会う。',
        '「お願い、博物館の時間を動かしたいの！」',
        'どうやら博物館の時間が止まってしまったらしい。',
        'なぜ時間が止まってしまったのか？',
        'そもそもマイクラ博物館とは何なのか？',
        'ラナと呼ばれる少女と共に、博物館の謎を解き明かせ！',
      ]"
    />

    <TitleCard title="1stPV">
      <template v-slot:abst>
        <q-video src="https://www.youtube.com/embed/EYcTYiIgwIs" class="innerAssets"/>
      </template>
    </TitleCard>

    <TitleCard title="続報をお楽しみに！"/>
  </BaseArticle>
</template>