<script setup lang="ts">
import { ref } from 'vue';

var slide = ref(1)
</script>

<template>
  <q-page>
    <div class="" style="height: 100vh;">
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
        <q-carousel-slide :name="1" img-src="@/assets/Home/museum.png"/>
        <q-carousel-slide :name="2" img-src="@/assets/Home/prologram.png"/>
        <q-carousel-slide :name="3" img-src="@/assets/Home/cutie_trick.png"/>

        <template v-slot:navigation-icon="{ active, btnProps, onClick }">
          <q-btn v-if="active" size="5pt" :icon="btnProps.icon" color="primary" flat round dense @click="onClick" />
          <q-btn v-else size="5pt" :icon="btnProps.icon" color="white" flat round dense @click="onClick" />
        </template>
      </q-carousel>
    </div>
  </q-page>
</template>