<script setup lang="ts">
import TermsOfUse from '@/views/Works/Agreements/TermsOfUse.vue';
import { Platform } from 'quasar';
import { defineProps, ref } from 'vue';

interface Prop {
  productName: string
  downloadLink?: string
}
const prop = defineProps<Prop>()

const showAgreement = ref(false)
const showCheckDownload = ref(false)

function AgreeBtn() {
  if (Platform.is.mobile) {
    showCheckDownload.value = true
  }
  else {
    open(prop.downloadLink)
  }
}
</script>

<template>
  <!-- 画面右下のダウンロードボタン -->
  <q-page-sticky position="bottom-right" :offset="[25, 25]">
    <q-btn
      v-show="downloadLink !== void 0"
      round
      icon="file_download"
      color="primary"
      size="2rem"
      @click="showAgreement = true"
    >
      <q-tooltip>
        <span class="text-h6">ダウンロード</span>
      </q-tooltip>
    </q-btn>
  </q-page-sticky>

  <!-- ダウンロードボタンを押したときに出てくる同意画面 -->
  <q-dialog v-model="showAgreement">
    <q-card>
      <q-card-section class="row items-center q-pb-none">
        <div class="q-py-sm text-h4">必ずお読みください</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        <q-scroll-area class="scroll-area">
          <TermsOfUse :product-name="productName"/>
        </q-scroll-area>
      </q-card-section>

      <q-separator inset />

      <q-card-actions>
        <div class="text-center" style="width: 100%;">
          <p class="text-caption">ダウンロードが始まるまでにやや時間がかかります</p>
          <q-btn label="利用規約に同意してダウンロード" color="primary" @click="AgreeBtn" v-close-popup class="text-h6"/>
        </div>
      </q-card-actions>
    </q-card>
  </q-dialog>

  <!-- スマホでダウンロードしようとしたときの警告 -->
  <q-dialog v-model="showCheckDownload">
    <q-card>
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h4">ご利用端末はモバイルです</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section>
        <div>
          <p>お使いの端末はモバイルのため、配布ワールドを遊ぶことができない可能性があります。</p>
          <p>これを理解したうえでダウンロードを行いますか？</p>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="キャンセル" color="grey-5" class="text-black" v-close-popup/>
        <q-btn label="OK!" color="primary" :href="downloadLink" v-close-popup/>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style scoped lang="scss">
.scroll-area {
  width: min(500px, 80vw);
  height: 60vh;
}
</style>