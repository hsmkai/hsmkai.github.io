<script lang="ts" setup>
import { defineProps } from 'vue';

interface Prop {
  imgsrc: string
  title: string
  text: string[]
  toName: string
}
defineProps<Prop>()
</script>

<template>
  <q-card bordered flat class="baseCard">
    <div class="desktop-only">
      <q-card-section horizontal>
        <q-img :src="imgsrc" class="col-8" width="40vw"/>
  
        <q-card-section>
          <div class="text-overline">配布ワールド</div>
          <div class="text-h5 q-my-md title">{{ title }}</div>
          <template v-for="line in text" :key="line">
            <p class="q-ma-none caption"  style="width: 100%">{{ line }}</p>
          </template>
        </q-card-section>
      </q-card-section>
    </div>

    <div class="mobile-only">
      <q-img :src="imgsrc"/>
      <q-card-section>
        <div class="text-overline">配布ワールド</div>
        <div class="text-h4">{{ title }}</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <template v-for="line in text" :key="line">
          <p class="q-ma-none caption"  style="width: 100%">{{ line }}</p>
        </template>
      </q-card-section>
    </div>

    <div class="absolute-top btn">
      <q-btn :to="`works/${toName}`" color="transparent" class="btn"/>
    </div>
  </q-card>
</template>

<style lang="scss" scoped>
.baseCard {
  margin-right: 3em;
  margin-left: 3em;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
}

.title {
  font-weight: bold;
  font-size: 1.3rem;

}

.caption {
  font-size: 1rem;
  margin-bottom: 3px;
}

.btn {
  width: 100%;
  height: 100%;
}
</style>