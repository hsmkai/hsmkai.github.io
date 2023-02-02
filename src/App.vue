<script lang="ts" setup>
import { ref } from 'vue'

var tab = ref('')

const menuItem = [
  {
    to: "/about",
    label: "About"
  },
  {
    to: "/",
    label: "Works"
  },
  {
    to: "/about",
    label: "SNS"
  },
  {
    to: "/",
    label: "Contact"
  }
]

</script>


<template>
  <q-layout>  
    <q-scroll-area style="height: 100vh; ">
      <q-header class="bg-transparent">
        <div class="divMainButton">
          <q-btn flat to="/" class="bg-primary mainButton">
            <q-img src="@/assets/Home/logoBW.png"/>
          </q-btn>
        </div>
        <q-toolbar class="bg-transparent text-black">
          <!-- <q-btn flat label="タイトル押すとメイン画面に戻るボタン"/> -->
          <q-space />
          <q-tabs v-model="tab" shrink>
            <template v-for="(item, index) in menuItem" :key="index">
              <q-route-tab :to="item.to" :name="'tab'+index" :label="item.label"/>
            </template>
          </q-tabs>
        </q-toolbar>
        <q-separator />
      </q-header>

      <q-page-container>
        <router-view></router-view>
      </q-page-container>
      
      <q-footer class="bg-black">
        <q-toolbar>
          <q-img src="@/assets/Home/logo.png" class="mainButton"/>
          <div class="footContents">
            <div>
              <q-space/>
              <q-tabs v-model="tab" shrink>
                <template v-for="(item, index) in menuItem" :key="index">
                  <q-route-tab :to="item.to" :name="'tab'+index" :label="item.label"/>
                </template>
              </q-tabs>
            </div>
            <div class="q-pa-md">
              <p class="rightAlign footnotesize">
                このサイトのコンテンツは一部を除き『斜向』が著作権を有しています。 <br/>
                これらの無断での転載，不正利用を断じて禁じます。 <br/>
                Copyright ©斜向 All Rights Reserved.
              </p>
            </div>
          </div>
        </q-toolbar>
      </q-footer>
    </q-scroll-area>
  </q-layout>
</template>

<style lang="scss" scoped>
.bg-primary {
  background-color: $primary;
}

.mainButton {
  width: 13%;
  min-width: 150px;
}

.divMainButton {
  top: 2vh;
  width: 100%;
  position: absolute;
}

.footContents {
  margin: 0 0 0 auto;
}
.rightAlign {
  text-align: right;
}
.footnotesize{
  font-size: 1.2em;
}
</style>