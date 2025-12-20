<script lang="tsx">
import { defineComponent, reactive } from 'vue'

import { AudioPlayer } from '@/components/audio-player'
import { useLandingPage } from './hooks'

export default defineComponent({
  name: 'Birthday01250102',
  setup() {
    const state = reactive({
      isShowDetail: false,
      isShowCover: true
    })

    const playVideo = () => {
      const video = document.getElementById('birthday-bg-video') as HTMLVideoElement
      video?.play()
    }

    const { render: renderLandPae } = useLandingPage(() => {
      playVideo()
      state.isShowCover = false
    })

    return () => (
      <div class='birthday-01-250102'>
        <video
          muted
          preload='auto'
          controls={false}
          id='birthday-bg-video'
          class='birthday-bg-video'
          playsinline={false}
          x5-playsinline={false}
          x5-video-player-start='true'
          x5-video-player-type='h5'
          x5-video-orientation='h5'
          x5-video-player-fullscreen='true'
          v-show={!state.isShowDetail && !state.isShowCover}
          onEnded={() => {
            console.log('视频播放结束')
            state.isShowDetail = true
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
          <source src={$CDN_BASE_URL + 'birthday-01-250102/bg_video.mp4'} type='video/mp4' />
          不支持视频播放
        </video>
        <img
          v-show={state.isShowDetail}
          src={$CDN_BASE_URL + 'birthday-01-250102/bg_page1.jpg'}
          alt=''
          class='bg-page1'
        />

        <AudioPlayer url='birthday-01-250102/bg_audio.mp3' />
        {state.isShowCover && renderLandPae()}
      </div>
    )
  }
})
</script>

<style scoped>
@import './index.scss';
</style>
