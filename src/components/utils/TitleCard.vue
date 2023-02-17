<script lang="ts" setup>
import { defineProps } from 'vue';
defineProps(['title', 'subTitle'])
</script>

<template>
  <div class="q-pa-md">
    <q-card flat class="caption-card">
      <q-card-actions align="around" class="title-actions justify-around">
        <q-card-section>
          <h1 class="title-h1">{{ title }}</h1>
        </q-card-section>
        <q-card-section>
          <h1>{{ subTitle }}</h1>
          <slot></slot>
        </q-card-section>
      </q-card-actions>
    </q-card>
  </div>
</template>

<style lang="scss" scoped>
.space {
  justify-content: space-between;
}
.caption-card {
  align-items: baseline;
}
.title-h1 {
  width: 300px;
  margin-bottom: 0;
}
.title-actions {
  align-items: baseline;
}

h1 {
  margin-top: 0;
  font-weight:lighter;
}
</style>