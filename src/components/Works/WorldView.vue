<script lang="ts" setup>
import baseCard from './baseCard.vue';
import TitleCard from '../utils/TitleCard.vue';
</script>

<template>
  <div class="article">
    <TitleCard title="World" sub-title="個性豊かな新世界。"/>
  
    <div class="q-pa-md row q-gutter-md justify-center">
      <baseCard imgsrc="https://cdn.quasar.dev/img/mountains.jpg" title="test" text="testtesttesttesttesttest"/>
      <baseCard imgsrc="https://cdn.quasar.dev/img/mountains.jpg" title="test" text="testtesttesttesttesttest"/>
      <baseCard imgsrc="https://cdn.quasar.dev/img/mountains.jpg" title="test" text="testtesttesttesttesttest"/>
      <baseCard imgsrc="https://cdn.quasar.dev/img/mountains.jpg" title="test" text="testtesttesttesttesttest"/>
    </div>
  </div>
</template>