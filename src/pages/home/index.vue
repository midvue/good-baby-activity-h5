<script lang="tsx">
import { defineComponent, reactive } from 'vue'
import { isWeChat, sleep } from '@mid-vue/shared'
import { hideHtmlLoading } from '@/use'
import imgBtnAccept from './assets/img-btn-accept.png'

export default defineComponent({
  setup() {
    const state = reactive({
      isShowDetail: false,
      isShowCover: false
    })
    if (isWeChat()) {
      state.isShowCover = true
    }

    const playVideo = () => {
      document.getElementById('home-bg-video')?.play()
    }

    return () => (
      <div class='home'>
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
          onended={() => {
            console.log('视频播放结束')
            sleep(300).then(() => {
              state.isShowDetail = true
            })
          }}
          onError={() => {
            console.log('视频播放失败')
          }}
          onLoadedData={() => {
            hideHtmlLoading()
            console.log('视频加载完成')
          }}
          onloadstart={() => {
            console.log('视频开始加载')
          }}
        >
          <source src={$CDN_BASE_URL + 'bg-video.mp4'} type='video/mp4' />
          不支持视频播放
        </video>
        <img
          v-show={state.isShowDetail}
          src={$CDN_BASE_URL + 'bg-detail.jpg'}
          alt=''
          class='home-bg-detail'
        />
        <img
          v-show={state.isShowCover}
          src={$CDN_BASE_URL + 'bg-cover.jpg'}
          alt=''
          class='home-bg-detail'
          onLoad={hideHtmlLoading}
          onClick={() => {
            playVideo()
            state.isShowCover = false
          }}
        />
        <img
          v-show={state.isShowCover}
          src={imgBtnAccept}
          alt=''
          class='home-btn'
          onClick={() => {
            playVideo()
            state.isShowCover = false
          }}
        />
      </div>
    )
  }
})
</script>

<style scoped>
@import './index.scss';
</style>
