<script lang="ts" setup>
import { ref } from 'vue'

var tab = ref('')
var menuOpen = ref(false)

const menuItem = [
  {
    to: "/#about",
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
    <p v-show="$route.path === '/' && $q.platform.is.desktop" class="v-line v-line-text q-ma-none absolute-left">
      Scroll down →
    </p>
    <q-separator
      v-show="$q.platform.is.desktop"
      vertical
      color="black"
      size="1.5pt"
      class="absolute-left v-line"
      style="top: 100vh"
    />
    <q-separator
      v-show="$q.platform.is.mobile"
      vertical
      color="black"
      size="1.5pt"
      class="absolute-left v-line"
      style="top: calc(30vh + 50px)"
    />

    <!-- ヘッダー -->
    <q-header reveal class="bg-black">
      <q-toolbar>
        <q-btn flat to="/">
          <q-img src="@/assets/logo/header.svg" width="200px"/>
        </q-btn>
        <q-space />
        <!-- PCではそれぞれのボタンを表示 -->
        <q-tabs v-model="tab" shrink class="gt-sm text-white q-py-sm">
          <template v-for="(item, index) in menuItem" :key="index">
            <q-route-tab :to="item.to" :name="'tab'+index">
              <span class="tab">{{ item.label }}</span>
            </q-route-tab>
          </template>
          
          <div class="row q-pl-md">
            <!-- ロゴは利用規約上アイコン幅を100としたときに外枠の幅150を確保する -->
            <!-- Twitter: https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/downloads/twitter-external-brand-guidelines-01272021.pdf -->
            <!-- YouTube: https://www.youtube.com/intl/ALL_jp/howyoutubeworks/resources/brand-resources/#logos-icons-and-colors -->
            <q-btn square outline href="https://twitter.com/hsmkai" target="_blank" class="q-mx-xs snsBtn">
              <q-avatar square size="25px">
                <q-img src="@/assets/icons/twitter_white.svg"/>
              </q-avatar>
            </q-btn>
            <q-btn square outline href="https://www.youtube.com/channel/UCRb01Kwyx9638bL4AtaYYfA" target="_blank" class="q-mx-xs snsBtn">
              <q-avatar square size="25px">
                <q-img src="@/assets/icons/youtube.svg"/>
              </q-avatar>
            </q-btn>
            <q-btn square outline href="https://www.nicovideo.jp/user/91326809/video" target="_blank" class="q-mx-xs snsBtn">
              <q-avatar square>
                <q-img src="@/assets/icons/nikodou.png"/>
              </q-avatar>
            </q-btn>
          </div>
        </q-tabs>
        <!-- スマホではメニューボタンを表示 -->
        <q-btn flat dense round icon="menu" size="20px" @click="menuOpen = !menuOpen" class="lt-md text-white"/>
      </q-toolbar>
      <q-separator color="black" size="1.5pt"/>
    </q-header>
    <div class="header">
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
        <template v-for="item in menuItem" :key="item">
          <q-item clickable :to="item.to">
            <q-item-section>{{ item.label }}</q-item-section>
          </q-item>
        </template>
      </q-list>
    </q-drawer>
    
    <!-- フッター -->
    <q-footer class="bg-black">
      <div class="row justify-between">
        <div class="gt-sm">
          <q-avatar square class="q-pa-xl footer-logo">
            <q-img src="@/assets/logo/footer.svg"/>
          </q-avatar>
        </div>
        <q-img src="@/assets/logo/footer.svg" class="lt-sm footer-logo"/>
        
        <div style="margin-top: auto;">
          <q-tabs v-model="tab" shrink align="right" style="width: 70vw;">
            <template v-for="(item, index) in menuItem" :key="index">
              <q-route-tab :to="item.to" :name="'tab'+index">
                <span class="tab">{{ item.label }}</span>
              </q-route-tab>
            </template>
            <div class="q-pr-md row desktop-only q-pl-md">
              <q-btn square outline href="https://twitter.com/hsmkai" target="_blank" class="q-mx-xs snsBtn">
                <q-avatar square size="25px">
                  <q-img src="@/assets/icons/twitter_white.svg"/>
                </q-avatar>
              </q-btn>
              <q-btn square outline href="https://www.youtube.com/channel/UCRb01Kwyx9638bL4AtaYYfA" target="_blank" class="q-mx-xs snsBtn">
                <q-avatar square size="25px">
                  <q-img src="@/assets/icons/youtube.svg"/>
                </q-avatar>
              </q-btn>
              <q-btn square outline href="https://www.nicovideo.jp/user/91326809/video" target="_blank" class="q-mx-xs snsBtn">
                <q-avatar square size="40px">
                  <q-img src="@/assets/icons/nikodou.png"/>
                </q-avatar>
              </q-btn>
            </div>
          </q-tabs>

          <div class="q-pr-md q-pt-lg">
            <p class="gt-sm q-pa-none footnotesize">このサイトのコンテンツは一部を除き『斜向』が著作権を有しています</p>
            <p class="gt-sm q-pa-none footnotesize">これらの無断での転載、不正利用を断じて禁じます</p>
            <p class="q-pa-none footnotesize">© 斜向 All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 4vh;
  top: 0;
  position: absolute;
  background-color: rgba($color: black, $alpha: 1);
}
.tab {
  font-weight: bold;
  font-size: 20px;
  text-transform: none;
}

.snsBtn {
  color: white;
  width: 47px;
  height: 47px;
}

.footer-logo {
  width: 8vw;
  min-width: 100px;
  height: fit-content;
}

.v-line {
  margin-left: min(50px, 5vw);
}
.v-line-text {
  // 縦書き
  writing-mode: vertical-rl;
  text-orientation: mixed;
  
  // 文字
  color: white;
  font-size: 2rem;
  width: 1.2em;

  // 画面の下に文字を固定する
  text-align: right;
  height: 100vh;
}

.footnotesize{
  font-size: 1em;
  text-align: right;
}
</style>