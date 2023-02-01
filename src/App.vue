<script lang="ts" setup>
import { ref } from 'vue'

var leftDrawerOpen = ref(false)
var select = ref(null)
const menuList = [
  {
    to: "/about",
    caption: "quasar.dev",
    label: "Docs"
  },
  {
    to: "/",
    caption: "github.com/quasarframework",
    label: "Github"
  },
  {
    to: "/about",
    caption: "chat.quasar.dev",
    label: "Discord"
  },
  {
    to: "/",
    caption: "forum.quasar.dev",
    label: "Forum"
  },
  {
    to: "/about",
    caption: "@quasarframework",
    label: "Twitter"
  }
]

</script>


<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Essential Links</q-item-label>
        <q-list>
          <template v-for="(menuItem, index) in menuList" :key="index">
            <q-item :to="menuItem.to" @click="select = index">
              <q-item-section avatar>
                <img :src="select == index ? 'images/menuicon_open.svg' : 'images/menuicon.svg'" />
              </q-item-section>
              <q-item-section>
              <q-item-label>{{menuItem.label}}</q-item-label>
              <q-item-label caption>{{menuItem.caption}}</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
          </template>
        </q-list>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>
