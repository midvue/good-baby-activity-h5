<script lang="tsx">
import { defineComponent, reactive } from 'vue'
import { sleep } from '@mid-vue/shared'

import { AudioPlayer } from './components/audio-player'
import { useLandingPage } from './hooks'

export default defineComponent({
  setup() {
    const state = reactive({
      isShowDetail: false,
      isShowCover: true
    })

    const playVideo = () => {
      const video = document.getElementById('home-bg-video') as HTMLVideoElement
      video?.play()
    }

    const { render: renderLandPae } = useLandingPage(() => {
      playVideo()
      state.isShowCover = false
    })

    return () => (
      <div class='clan-hall'>
        <video
          autoplay
          muted
          preload='auto'
          controls={false}
          id='home-bg-video'
          class='home-bg-video'
          playsinline={false}
          x5-playsinline={false}
          x5-video-player-start='true'
          x5-video-player-type='h5'
          x5-video-orientation='h5'
          x5-video-player-fullscreen='true'
          v-show={!state.isShowDetail && !state.isShowCover}
          onEnded={() => {
            console.log('视频播放结束')
            sleep(300).then(() => {
              state.isShowDetail = true
            })
          }}
          onError={() => {
            console.log('视频播放失败')
          }}
          onLoadeddata={() => {
            console.log('视频加载完成')
          }}
          onLoadstart={() => {
            console.log('视频开始加载')
          }}
        >
          <source src={$CDN_BASE_URL + 'bg-video.mp4'} type='video/mp4' />
          不支持视频播放
        </video>
        <img
          v-show={state.isShowDetail}
          src={$CDN_BASE_URL + 'bg-detail1.jpg'}
          alt=''
          class='home-bg-detail'
        />

        <AudioPlayer />
        {state.isShowCover && renderLandPae()}
      </div>
    )
  }
})
</script>

<style scoped>
@import './index.scss';
</style>
