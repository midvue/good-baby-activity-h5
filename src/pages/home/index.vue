<script lang="tsx">
import { defineComponent } from 'vue'
import { defineCtxState } from '@mid-vue/use'
import bgVideo from './assets/bg-video.mp4'
import type { IHomeState } from './types'

export default defineComponent({
  setup() {
    defineCtxState<IHomeState>({})

    return () => (
      <div class='home'>
        <video
          autoplay
          muted
          preload='auto'
          controls={false}
          x5-video-player-type='h5'
          x5-video-orientation='h5'
          x5-video-player-fullscreen='true'
          class='home-bg-video'
          x5-playsinline='true'
        >
          <source src={bgVideo} type='video/mp4' />
        </video>
      </div>
    )
  }
})
</script>

<style scoped>
@import './index.scss';
</style>
