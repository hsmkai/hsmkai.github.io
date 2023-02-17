<script lang="ts" setup>
import { ref } from 'vue'

var tab = ref('')

const menuItem = [
  {
    to: "/about",
    label: "About"
  },
  {
    to: "/works",
    label: "Works"
  },
  {
    to: "/contacts",
    label: "Contacts"
  }
]

</script>


<template>
  <q-layout>  
    <q-scroll-area style="height: 100vh; ">
      <q-page-container>
        <router-view></router-view>
      </q-page-container>

      <div class="header">
        <q-toolbar>
          <q-space />
          <q-tabs v-model="tab" shrink class="tabs">
            <template v-for="(item, index) in menuItem" :key="index">
              <q-route-tab :to="item.to" :name="'tab'+index" :label="item.label"/>
            </template>
          </q-tabs>
        </q-toolbar>
        <q-separator color="white" size="2pt"/>
      </div>
      
      <div class="top-div-main-btn">
        <q-btn flat to="/" class="bg-primary logo">
          <q-img src="@/assets/Home/logoBW.png"/>
        </q-btn>
      </div>
      
      <q-footer class="bg-black">
        <q-toolbar>
          <div class="bottom-div-main-btn gt-sm">
            <q-img src="@/assets/Home/logo.png" class="logo"/>
          </div>
          <q-space/>
          <div>
            <div class="footer gt-sm q-pa-md">
              <q-tabs v-model="tab" shrink>
                <template v-for="(item, index) in menuItem" :key="index">
                  <q-route-tab :to="item.to" :name="'tab'+index" :label="item.label"/>
                </template>
              </q-tabs>
            </div>
            <div class="rightAlign q-pt-md q-pr-md">
              <!-- <p class="footnotesize">このサイトのコンテンツは一部を除き『斜向』が著作権を有しています。</p>
              <p class="footnotesize">これらの無断での転載，不正利用を断じて禁じます。</p> -->
              <p class="footnotesize">Copyright ©斜向 All Rights Reserved.</p>
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

.header {
  width: 100%;
  top: 0;
  position: absolute;
}

.top-div-main-btn {
  top: 2vh;
  width: 13%;
  position: absolute;
}
.bottom-div-main-btn {
  width: 13%;
}
.logo {
  width: 100%;
  min-width: 150px;
}

.footer {
  top: 0;
  right: 0;
  position: absolute;
  width: min-content;
}
.rightAlign {
  text-align: right;
}
.footnotesize{
  font-size: 1.2em;
}
</style>