<script setup lang="ts">
import Member from './MemberList.vue';
</script>

<template>
  <q-list separator style="width: max-content;">
    <Member
      img-path="kswmcHi.png"
      name="柏餅々々々"
      twitter-name="kswmcHi"
      :text="[
        '「楽しい」を創りたいデザイナーもどき。',
        'ホームページのレイアウトを考えたり、配布ワールドの概要から詳細までいろいろと。',
        'UI/UXを勉強していたりと、○○担当って言い切れない程度には謎の和菓子。'
      ]"
    />
    <Member
      img-path="CivilTT.png"
      name="CivilTT"
      twitter-name="CivilT_T"
      :text="[
        '「外」から「内」に入っていくためのツール (ServerStarter) を主に開発中',
        '製作物の簡単な実装や、ホームページ開発を担当',
        '得意技はロールバックとTODO放置'
      ]"
    />
    <Member
      img-path="txkodo.png"
      name="古銅"
      twitter-name="txkodo"
      :text="[
        '謎のリポジトリを生み出し続ける暴走枠 & 技術枠。',
        '高い起電力でもってリソースパック/データパックのメイン開発にあたるが道半ばで力尽きる。',
        '設定と雰囲気は譲らない世界観至上主義の一族。',
      ]"
    />
    <Member
      img-path="sample.png"
      name="二式"
      twitter-name="24ki05"
      :text="[
        'マイペース海洋生物。ニシキアナゴっぽい色だが、模様が縞ではなく斑点なのでたぶん別種。',
        '主担当はBGMなど音まわり。弦楽器がお気に入り。',
        'ちょっとしたデータパックなど、一品完結の小規模な創作物を気まぐれで生成する。',
      ]"
    />
  </q-list>
</template>