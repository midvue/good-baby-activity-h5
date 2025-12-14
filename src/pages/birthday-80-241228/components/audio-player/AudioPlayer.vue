E
<template>
  <div :class="['audio-player', { playing: state.isPlaying }]" @click="onPlayClick"></div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive } from 'vue'
import { Howl } from 'howler'
import { usePageVisibility } from '@mid-vue/use'

defineOptions({
  name: 'AudioPlayer'
})

const state = reactive({
  isPlaying: false
})

let sound = new Howl({
  src: [`${$CDN_BASE_URL}birthday-80-241228/bg_audio.mp3`],
  loop: true,
  autoplay: true,
  preload: true,
  onload: () => {
    console.log('load')
    sound.play()
    state.isPlaying = true
  },
  onpause: () => {
    console.log('pause')
    state.isPlaying = false
  },
  onplay: () => {
    console.log('play')
    state.isPlaying = true
  }
})

sound.on('load', () => {
  window.WeixinJSBridge?.invoke('getNetworkType', {}, () => {
    sound.play()
    state.isPlaying = true
  })
})

onMounted(() => {
  sound.play()
  state.isPlaying = true
})

onBeforeUnmount(() => {
  sound.stop()
  sound.unload()
  //@ts-ignore
  sound = null
})

const { onPageShow, onPageHidden } = usePageVisibility()

onPageShow(() => {
  sound.play()
})

onPageHidden(() => {
  sound.pause()
})

const onPlayClick = () => {
  state.isPlaying = !state.isPlaying
  if (state.isPlaying) {
    sound.play()
  } else {
    sound.pause()
  }
}
</script>

<style scoped lang="scss">
.audio-player {
  background-image: url($CDN_BASE_URL + 'icon-audio.svg');
  background-size: contain;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 99;
  width: 30px;
  height: 30px;
  background-repeat: no-repeat;

  &.playing {
    animation: rotate 3s linear infinite;
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
