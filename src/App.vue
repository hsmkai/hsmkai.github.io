<script lang="ts" setup>
import { ref } from 'vue'

var tab = ref('')

</script>


<template>
  <q-layout>
    
    <q-scroll-area style="height: 100vh; ">
      <q-header class="bg-transparent">
        <div class="div_mainButton">
          <q-btn flat to="/" class="mainButton">
            <q-img src="@/assets/Home/logoBW.png"/>
          </q-btn>
        </div>
        <q-toolbar class="bg-transparent text-black">
          <!-- <q-btn flat label="タイトル押すとメイン画面に戻るボタン"/> -->
          <q-space />
          <q-tabs v-model="tab" shrink>
            <q-route-tab to="/about" name="tab1" label="About"/>
            <q-route-tab to="/" name="tab2" label="Works"/>
            <q-route-tab to="/about" name="tab3" label="SNS"/>
            <q-route-tab to="/" name="tab4" label="Contact"/>
          </q-tabs>
        </q-toolbar>
        <q-separator />
      </q-header>
      <q-page-container>
        <router-view></router-view>
      </q-page-container>
    </q-scroll-area>
  </q-layout>
</template>

<style lang="scss" scoped>
.mainButton {
  width: 13%;
  min-width: 150px;
  background-color: $primary;
}

.div_mainButton {
  top: 2vh;
  width: 100%;
  position: absolute;
}
</style>