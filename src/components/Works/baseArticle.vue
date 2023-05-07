<script lang="ts" setup>
import { defineProps } from 'vue';
defineProps(['imgsrc'])
</script>

<template>
  <q-img :src="imgsrc"/>
  <div class="article">
    <slot></slot>
  </div>

  <q-page-container>
    <q-page-sticky position="bottom-right" :offset="[25, 25]">
      <q-btn round icon="file_download" color="secondary" size="30px">
        <q-tooltip>
          <span class="tooltip">ダウンロード</span>
        </q-tooltip>
      </q-btn>
    </q-page-sticky>
  </q-page-container>
</template>

<style lang="scss" scoped>
.tooltip {
  font-size: large;
}
</style>