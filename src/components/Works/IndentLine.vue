<script setup lang="ts">
import { defineProps } from 'vue';

interface Prop {
  title: string
  comment: string
}
defineProps<Prop>()
</script>

<template>
  <div class="row">
    <span class="col-2">{{ title }}</span>
    <span class="col">{{ comment }}</span>
  </div>
</template>