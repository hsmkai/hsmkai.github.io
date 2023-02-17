<script lang="ts" setup>
import { defineProps } from 'vue';
defineProps(['imgsrc', 'title', 'text'])
</script>

<template>
  <q-card class="baseCard">
    <q-img :src="imgsrc">
      <div class="absolute-bottom text-h6">
        {{ title }}
      </div>
    </q-img>

    <q-card-section>
      {{ text }}
    </q-card-section>
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
</style>