E
<template>
  <div :class="['audio-player', { playing: state.isPlaying }]" @click="onPlayClick">
    <audio
      ref="audioRef"
      :src="state.url"
      preload="auto"
      autoplay
      loop
      :controls="false"
      id="player-audio"
      :playsinline="true"
      :x5-playsinline="true"
      @loadeddata="onLoadedData"
    ></audio>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Howl } from 'howler'

defineOptions({
  name: 'AudioPlayer'
})

const audioRef = ref<HTMLAudioElement>()

const state = reactive({
  url: `${$CDN_BASE_URL}bg-audio.mp3`,
  isPlaying: false
})

const sound = new Howl({
  src: [`${$CDN_BASE_URL}bg-audio.mp3`],
  autoplay: true,
  loop: true
})

sound.on('play', () => {
  console.log('play')
  state.isPlaying = true
})

const onLoadedData = () => {
  state.isPlaying = true
}
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
