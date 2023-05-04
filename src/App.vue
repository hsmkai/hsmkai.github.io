<script lang="ts" setup>
import { ref } from 'vue'

var tab = ref('')
var menuOpen = ref(false)

const menuItem = [
  {
    to: "/",
    label: "About"
  },
  {
    to: "/works",
    label: "Works"
  },
  {
    to: "/contact",
    label: "Contact"
  },
]

</script>


<template>
  <q-layout>
    <!-- ページ内容 -->
    <q-page-container>
      <router-view></router-view>
    </q-page-container>

    <!-- 縦線 -->
    <q-separator
      vertical
      :color="$route.path === '/' ? 'white' : 'black'"
      size="1.5pt"
      class="absolute-left v-line"
      style="top: 50px"
    />
    <q-separator
      vertical
      color="black"
      size="1.5pt"
      class="absolute-left v-line"
      style="top: 100vh;"
    />

    <!-- ヘッダー -->
    <div class="header">
      <q-toolbar style="padding-right: 3vw;">
        <q-btn flat to="/">
          <q-img src="@/assets/logo/header.svg" width="200px"/>
        </q-btn>
        <q-space />
        <!-- PCではそれぞれのボタンを表示 -->
        <q-tabs v-model="tab" shrink class="gt-sm text-white" style="height: 2.5rem;">
          <template v-for="(item, index) in menuItem" :key="index">
            <q-route-tab :to="item.to" :name="'tab'+index">
              <span class="tab">{{ item.label }}</span>
            </q-route-tab>
          </template>
        </q-tabs>
        <!-- スマホではメニューボタンを表示 -->
        <q-btn flat dense round icon="menu" size="20px" @click="menuOpen = !menuOpen" class="lt-md"/>
      </q-toolbar>
      <q-separator color="black" size="1.5pt"/>
    </div>

    <!-- スマホ画面時のメニューによって開くDrawer -->
    <q-drawer
      v-model="menuOpen"
      :width="200"
      overlay
      bordered
      class="bg-gray-3"
    >
      <q-list>
        <template v-for="(item, index) in menuItem" :key="index">
          <q-item clickable :to="item.to">
            <q-item-section>{{ item.label }}</q-item-section>
          </q-item>
        </template>
      </q-list>
    </q-drawer>
    
    <!-- フッター -->
    <q-footer class="bg-black">
      <q-toolbar>
        <div class="bottom-div-main-btn gt-sm">
          <q-img src="@/assets/logo/footer.svg" class="logo"/>
        </div>
        <q-space/>
        <div>
          <div class="footer q-pa-md">
            <q-tabs v-model="tab" shrink>
              <template v-for="(item, index) in menuItem" :key="index">
                <q-route-tab :to="item.to" :name="'tab'+index" :label="item.label"/>
              </template>
            </q-tabs>
          </div>
          <div class="footComment q-pt-md q-pr-md">
            <!-- <p class="footnotesize">このサイトのコンテンツは一部を除き『斜向』が著作権を有しています。</p>
            <p class="footnotesize">これらの無断での転載，不正利用を断じて禁じます。</p> -->
            <p class="footnotesize">Copyright ©斜向 All Rights Reserved.</p>
          </div>
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<style lang="scss" scoped>
.bg-primary {
  background-color: $primary;
}

.blur {
  // backdrop-filter: blur(5px);
  background: linear-gradient(90deg, transparent, white);
}

.header {
  width: 100%;
  top: 0;
  position: absolute;
  background-color: rgba($color: black, $alpha: 0.5);
}
.tab {
  font-weight: bold;
  font-size: 20px;
  text-transform: none;
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

.v-line {
  margin-left: min(50px, 5%);
}

.footer {
  top: 0;
  right: 0;
  position: absolute;
  width: min-content;
}
.footComment {
  text-align: right;
  margin-top: 70px;
}
.footnotesize{
  font-size: 1.2em;
}
</style>