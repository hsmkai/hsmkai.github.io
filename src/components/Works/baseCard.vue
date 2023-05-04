<script lang="ts" setup>
import { defineProps } from 'vue';

interface Prop {
  imgsrc: string
  title: string
  text: string[]
  to: string
}
defineProps<Prop>()
</script>

<template>
  <q-card bordered flat class="baseCard">
    <q-card-section horizontal>
      <q-img :src="imgsrc" class="col-8" width="40vw"/>

      <q-card-section>
        <div class="text-overline">配布ワールド</div>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ title }}</div>
        <template v-for="line in text" :key="line">
          <p class="text-caption q-ma-none"  style="width: 100%">{{ line }}</p>
        </template>
      </q-card-section>
    </q-card-section>

    <div class="absolute-top btn">
      <q-btn :to="to" replace color="transparent" class="btn"/>
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

.btn {
  width: 100%;
  height: 100%;
}
</style>