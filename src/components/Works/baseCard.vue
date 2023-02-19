<script lang="ts" setup>
import { defineProps } from 'vue';
defineProps(['imgsrc', 'title', 'text', 'to'])
</script>

<template>
  <q-card class="baseCard">
    <q-img :src="imgsrc">
      <div class="absolute-bottom text-h6">
        {{ title }}
      </div>
    </q-img>

    <!-- <q-card-section>
      {{ text }}
    </q-card-section> -->

    <div class="absolute-top btn">
      <q-btn :to="to" replace color="transparent" class="btn"/>
    </div>
  </q-card>
</template>

<style lang="scss" scoped>
.baseCard {
  width: 80%;
  max-width: 600px;
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