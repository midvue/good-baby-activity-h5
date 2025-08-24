<script setup lang="ts">
import { RouterView } from 'vue-router'
import { sleep } from '@mid-vue/shared'
import { hideHtmlLoading } from './use'

async function hideLoading() {
  await sleep(800)
  // 图片加载完成后执行的代码
  hideHtmlLoading()
}
hideLoading()
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <KeepAlive :include="['Anniversary']">
      <component :is="Component" :key="route.path" />
    </KeepAlive>
  </RouterView>
</template>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}

@font-face {
  font-family: 'DIN';
  src: url('/font/din.ttf') format('truetype');
}
</style>
