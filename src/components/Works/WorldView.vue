<script lang="ts" setup>
import baseCard from './baseCard.vue';
import TitleCard from '../utils/TitleCard.vue';

const cards = [
  {
    title: 'マイクラ博物館の謎',
    imgsrc: require('@/assets/Works/Worlds/museum.png'),
    to: '/works/prologram',
    text: [
      'マインクラフトの全てが記された博物館の謎を解き明かせ！',
      '斜向が送る謎解きゲーム'
    ]
  },
  {
    title: 'prologram++',
    imgsrc: require('@/assets/Works/Worlds/prologram.png'),
    to: '/works/prologram',
    text: ['プログラムを構築してパズルを解け！']
  },
  {
    title: 'Code:Survival',
    imgsrc: require('@/assets/Works/Worlds/CodeSurvival.jpg'),
    to: '/works/code.survival',
    text: ['荒廃した世界で一人称RTS!']
  },
  {
    title: 'Code:Survival',
    imgsrc: require('@/assets/Works/Worlds/CodeSurvival.jpg'),
    to: '/works/code.survival',
    text: ['荒廃した世界で一人称RTS!']
  },
]
</script>

<template>
  <TitleCard title="World" sub-title="個性豊かな新世界。"/>
  
  <div class="q-gutter-md justify-center">
    <template v-for="card in cards" :key="card">
      <baseCard :to="card.to" :imgsrc="card.imgsrc" :title="card.title" :text="card.text"/>
    </template>
  </div>
</template>