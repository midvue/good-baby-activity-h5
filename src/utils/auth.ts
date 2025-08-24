import { getSession, removeSession, setSession } from '@mid-vue/shared'

const UserInfoKey = 'userInfo'
const TokenKey = 'token'
/** 灰度cookie的key */
const GRAY_KEY = 'gray'

/* ------------------用户信息--------------------- */

export function setUserInfo(data: IUserInfo) {
  setSession(UserInfoKey, data)
}

/**
 * 获取用户信息
 */
export function getUserInfo() {
  return getSession<IUserInfo>(UserInfoKey) || ({} as IUserInfo)
}
export function clearUserInfo() {
  removeSession(UserInfoKey)
}

/* ------------------token--------------------- */
export function setToken(token: string) {
  window.sessionStorage.setItem('ks_token', token)
  setSession(TokenKey, token)
}

export function getToken() {
  const token = getSession(TokenKey) || ''
  return token ? token : window.sessionStorage.getItem('ks_token') || ''
}

export function clearToken() {
  removeSession(TokenKey)
}

/** 切换灰度环境 */
export function setIsGray(data: IUserInfo) {
  setSession(GRAY_KEY, data.isGray!)
}

/** 获取是否灰度 */
export function getIsGray() {
  return getSession(GRAY_KEY) || 0
}
