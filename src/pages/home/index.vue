<script lang="tsx">
import { defineComponent } from 'vue'
import { defineCtxState } from '@mid-vue/use'
import type { IHomeState } from './types'

export default defineComponent({
  setup() {
    defineCtxState<IHomeState>({})

    return () => <div class='home'>活动首页</div>
  }
})
</script>

<style scoped>
@import './index.scss';
</style>
