<script setup lang="ts">
import { defineProps } from 'vue';
import TermsOfUse from './TermsOfUse.vue';
interface Prop {
  productName?: string
}
defineProps<Prop>()
</script>

<template>
  <div class="article">
    <TermsOfUse/>
  </div>
</template>