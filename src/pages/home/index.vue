<script lang="tsx">
import { defineComponent } from 'vue'
import { hideHtmlLoading } from '@/use'
import bgVideo from './assets/bg-video.mp4'

export default defineComponent({
  setup() {
    return () => (
      <div class='home'>
        <video
          autoplay
          muted
          preload='auto'
          controls='true'
          class='home-bg-video'
          x5-playsinline='true'
          x5-video-player-type='h5'
          x5-video-orientation='h5'
          x5-video-player-fullscreen='true'
          onended={() => {
            console.log('视频播放结束')
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
          <source src={bgVideo} type='video/mp4' />
          不支持视频播放
        </video>
      </div>
    )
  }
})
</script>

<style scoped>
@import './index.scss';
</style>
