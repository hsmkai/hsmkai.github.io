<script lang="ts" setup>
import { ref } from 'vue';
import { copyToClipboard, openURL } from 'quasar';
import TitleCard from '../utils/TitleCard.vue';
import ContactItem from './ContactItem.vue';

const copied = ref(false)

function copyMailAddress() {
  copyToClipboard('hasumukaidm@gmail.com').then(() => {copied.value = true})
}
</script>

<template>
  <TitleCard
    title="Contact"
    sub-title="お気軽にご連絡ください。"
    :desc="['斜向へのご相談などがございましたら、お気軽にご連絡ください。']"
  />

  <q-list>
    <ContactItem
      title="Twitter DM"
      caption="@hsmkaiへのDMを開きます（表示に少々時間がかかります）"
      @click="openURL('https://twitter.com/messages/1121761492284493824-1428274147663122432')"
    >
      <template v-slot:avater>
        <q-avatar square size="2rem">
          <q-img src="@/assets/icons/twitter_blue.svg"/>
        </q-avatar>
      </template>
    </ContactItem>

    <ContactItem
      title="電子メール"
      caption="クリックするとメールアドレスをクリップボードへコピーします"
      @click="copyMailAddress"
    >
      <template v-slot:avater>
        <q-icon size="2rem" color="primary" name="mail"/>
      </template>
      <template v-slot:side>
        <q-icon v-show="copied" name="assignment_turned_in" color="green" size="1.5rem"/>
      </template>
    </ContactItem>
  </q-list>

  <q-img src="@/assets/Contacts/members.png" class="q-ma-lg" style="width: min(800px, 85%);"/>
  
</template>