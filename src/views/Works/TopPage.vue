<script lang="ts" setup>
import BaseCard from '@/components/Works/baseCard.vue';
import TitleCard from '@/components/utils/TitleCard.vue';
import { titles, contents } from './Contents'

function getImgPath(src: string, key: string) {
  const folderName = () => {
    switch (key) {
      case 'world':
        return 'Worlds/'
      case 'other':
        return 'Others/'
      default:
        return ''
    }
  }
  
  return require(`@/assets/Works/${folderName()}${src}`)
}
</script>

<template>
  <template v-for="(title, key) in titles" :key="title">
    <div class="article">
      <TitleCard
        :title="title.title.toUpperCase()"
        :sub-title="title.subTitle"
        :abst="title.desc"
      />
      
      <div class="q-gutter-lg justify-center q-pb-xl">
        <template v-for="card in contents[key]" :key="card">
          <BaseCard
            :label="card.cardLabel ?? title.cardLabel"
            :to-name="card.to"
            :imgsrc="getImgPath(card.imgsrc, key.toString())"
            :title="card.title"
            :text="card.text"
          />
        </template>
      </div>
    </div>
  </template>
</template>