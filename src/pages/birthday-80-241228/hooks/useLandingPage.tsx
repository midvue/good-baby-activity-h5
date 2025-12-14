import { hideHtmlLoading } from '@/use'
import imgBtnAccept from '../assets/img-btn-accept.png'
export let useLandingPage = (onClickAccept: Function) => {
  return {
    render: () => (
      <div class='birthday-landing-page' onClick={() => onClickAccept()}>
        <img
          class='landing-img img-title-01'
          src={$CDN_BASE_URL + 'birthday-80-241228/img_title.png'}
        />
        <img
          class='landing-img img-cloud-left-01'
          src={$CDN_BASE_URL + 'birthday-80-241228/img_cloud_left.png'}
        />
        <img
          class='landing-img img-cloud-right-01'
          src={$CDN_BASE_URL + 'birthday-80-241228/img_cloud_right.png'}
        />
        <img
          class='landing-img img-title'
          src={$CDN_BASE_URL + 'birthday-80-241228/img_main.png'}
          onLoad={hideHtmlLoading}
        />
        <img src={imgBtnAccept} alt='' class='birthday-btn' />
        <img
          class='landing-img img-time-address'
          src={$CDN_BASE_URL + 'birthday-80-241228/img_time_address.png'}
        />
      </div>
    )
  }
}
