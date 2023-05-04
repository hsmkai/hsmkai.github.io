<script setup lang="ts">
import TitleCard from '../utils/TitleCard.vue';
import Member from './MemberList.vue';
</script>

<template>
  <title-card title="Members" sub-title="信頼する仲間達。">
    <q-list>
      <Member
        img-path="https://cdn.quasar.dev/img/linux-avatar.png"
        name="CivilTT"
      />
      <Member
        img-path="https://cdn.quasar.dev/img/linux-avatar.png"
        name="CivilTT"
      />
      <Member
        img-path="https://cdn.quasar.dev/img/linux-avatar.png"
        name="CivilTT"
      />
    </q-list>
  </title-card>
</template>