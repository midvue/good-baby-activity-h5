declare global {
  interface IUserInfo {
    token: string
    refreshToken?: string
    tokenEffectiveTime?: number
    refreshTokenEffectiveTime?: number
    userId: string
    userName?: string
    phone: string
    AESPhone?: string
    envId: string
    isGray?: '0' | '1'
    userType: string
  }
}
export {}
