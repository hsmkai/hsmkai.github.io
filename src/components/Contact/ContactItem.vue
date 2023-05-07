<script setup lang="ts">
import { defineProps } from 'vue';

interface Prop {
  title: string,
  caption: string,
  onClick: () => void
}

defineProps<Prop>()
</script>

<template>
  <q-item clickable class="q-mb-lg q-ml-md contentItem" @click="onClick">
    <q-item-section avatar>
      <slot name="avater"/>
    </q-item-section>
    
    <q-item-section style="font-size: x-large;">
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>

    <q-item-section side top>
      <slot name="side"/>
    </q-item-section>
  </q-item>
</template>

<style scoped lang="scss">
.contentItem {
  width: min(500px, 95%);
}
</style>