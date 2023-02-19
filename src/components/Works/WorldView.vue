<script lang="ts" setup>
import baseCard from './baseCard.vue';
import TitleCard from '../utils/TitleCard.vue';

const cards = [
  {
    title: 'prologram++',
    imgsrc: require('@/assets/Works/Worlds/prologram.png'),
    to: '/works/prologram',
    text: 'プログラムを構築してパズルを解け！'
  },
  {
    title: 'prologram++',
    imgsrc: require('@/assets/Works/Worlds/prologram.png'),
    to: '/works/prologram',
    text: 'プログラムを構築してパズルを解け！'
  },
  {
    title: 'Code:Survival',
    imgsrc: require('@/assets/Works/Worlds/CodeSurvival.jpg'),
    to: '/works/code.survival',
    text: '荒廃した世界で一人称RTS!'
  },
  {
    title: 'Code:Survival',
    imgsrc: require('@/assets/Works/Worlds/CodeSurvival.jpg'),
    to: '/works/code.survival',
    text: '荒廃した世界で一人称RTS!'
  },
]
</script>

<template>
  <TitleCard title="World" sub-title="個性豊かな新世界。"/>

  <div class="q-pa-md row q-gutter-md justify-center">
    <template v-for="(card, index) in cards" :key="index">
      <baseCard :to="card.to" :imgsrc="card.imgsrc" :title="card.title" :text="card.text"/>
    </template>
  </div>
</template>