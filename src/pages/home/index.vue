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
        <video src={bgVideo} autoplay muted></video>
      </div>
    )
  }
})
</script>

<style scoped>
@import './index.scss';
</style>
