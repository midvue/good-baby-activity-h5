<script lang="tsx">
import { defineComponent, ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()
    // 过滤掉重定向路由和首页自身
    const pages = router.getRoutes().filter((item) => {
      return item.path !== '/' && item.path !== '/home' && item.meta?.title
    })

    // 分享弹框状态
    const shareModalVisible = ref(false)
    const selectedRoute = ref<string>('')
    const shareForm = reactive({
      name: ''
    })

    // 打开分享弹框
    const openShareModal = (path: string, e: Event) => {
      e.stopPropagation() // 阻止事件冒泡
      selectedRoute.value = path
      shareForm.name = ''
      shareModalVisible.value = true
    }

    // 关闭分享弹框
    const closeShareModal = () => {
      shareModalVisible.value = false
      selectedRoute.value = ''
      shareForm.name = ''
    }

    // 确认分享
    const confirmShare = () => {
      if (selectedRoute.value) {
        router.push({
          path: selectedRoute.value,
          query: {
            shareName: shareForm.name || ''
          }
        })
        closeShareModal()
      }
    }

    // 进入页面
    const goToPage = (path: string) => {
      router.push(path)
    }

    return () => (
      <div class='home'>
        <h1 class='home-title'>活动页面列表</h1>
        <div class='route-list'>
          {pages.map((item) => (
            <div key={item.path} class='route-item' onClick={() => goToPage(item.path)}>
              <div class='route-item-content'>
                <div class='route-item-image'>
                  <img
                    class='image-placeholder'
                    src={item.meta?.coverUrl || ''}
                    alt={item.meta?.title || ''}
                  />
                </div>
                <div class='route-item-info'>
                  <h3 class='route-item-title'>{item.meta?.title}</h3>
                  <div class='route-item-actions'>
                    <button class='btn-share' onClick={(e) => openShareModal(item.path, e)}>
                      分享
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 分享弹框 */}
        {shareModalVisible.value && (
          <div class='modal-overlay'>
            <div class='modal-content'>
              <h3 class='modal-title'>分享页面</h3>
              <div class='modal-body'>
                <div class='form-item'>
                  <label class='form-label'>分享人称呼</label>
                  <input
                    type='text'
                    class='form-input'
                    placeholder='请输入分享人称呼（非必填）'
                    value={shareForm.name}
                    onInput={(e) => {
                      shareForm.name = (e.target as HTMLInputElement).value
                    }}
                  />
                </div>
              </div>
              <div class='modal-footer'>
                <button class='btn-cancel' onClick={closeShareModal}>
                  取消
                </button>
                <button class='btn-confirm' onClick={confirmShare}>
                  确定
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
})
</script>

<style scoped lang="scss">
.home {
  min-height: 100vh;
  background: linear-gradient(107deg, #d51917 0%, #f4422f 100%);
  padding: 20px;
  font-family:
    'Open Sans',
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;
}

.home-title {
  text-align: center;
  color: white;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 30px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.route-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.route-item {
  width: calc(50% - 10px);
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.route-item-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* 图片区域 */
.route-item-image {
  width: 100%;
  height: 100px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 16px 16px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

/* 确保图片以cover模式显示 */
.route-item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.image-icon {
  font-size: 48px;
  opacity: 0.6;
}

/* 信息区域 */
.route-item-info {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
}

.route-item-title {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  line-height: 1.4;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.route-item-actions {
  display: flex;
  gap: 12px;
  margin-top: auto;
}

/* 按钮样式 */
.btn-share,
.btn-confirm,
.btn-cancel {
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
  flex: 1;
}

.btn-share {
  background: #4ecdc4;
  color: white;

  &:hover {
    background: #45b7aa;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(78, 205, 196, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
}

/* 弹框样式 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 16px;
  padding: 24px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.2);
  animation: modalSlideIn 0.3s ease;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-title {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

.modal-body {
  margin-bottom: 24px;
}

.form-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  font-size: 14px;
  font-weight: 500;
  color: #333;
}

.form-input {
  padding: 12px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.3s ease;
  outline: none;

  &:focus {
    border-color: #ff6b6b;
    box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.1);
  }
}

.modal-footer {
  display: flex;
  gap: 12px;
}

.btn-cancel {
  background: #f5f5f5;
  color: #666;
  flex: 1;

  &:hover {
    background: #e0e0e0;
  }
}

.btn-confirm {
  background: linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%);
  color: white;
  flex: 1;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 65, 108, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
}
</style>
