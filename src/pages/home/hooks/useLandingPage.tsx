import imgBtnAccept from '../assets/img-btn-accept.png'
export let useLandingPage = (onClickAccept: Function) => {
  return {
    render: () => (
      <div class='home-landing-page' onClick={() => onClickAccept()}>
        <img class='landing-img img-title-01' src={$CDN_BASE_URL + 'img_title_01.png'} />
        <img class='landing-img img-title-02' src={$CDN_BASE_URL + 'img_title_02.png'} />
        <img class='landing-img img-fireworks-00' src={$CDN_BASE_URL + 'img_fireworks_01.png'} />
        <img class='landing-img img-fireworks-01' src={$CDN_BASE_URL + 'img_fireworks_01.png'} />
        <img class='landing-img  img-fireworks-02' src={$CDN_BASE_URL + 'img_fireworks_02.png'} />
        <img class='landing-img img-fireworks-03' src={$CDN_BASE_URL + 'img_fireworks_01.png'} />
        <img class='landing-img  img-fireworks-04' src={$CDN_BASE_URL + 'img_fireworks_02.png'} />
        <img class='landing-img img-cloud-01' src={$CDN_BASE_URL + 'img_cloud_01.png'} />
        <img class='landing-img img-cloud-02' src={$CDN_BASE_URL + 'img_cloud_02.png'} />
        <img class='landing-img img-cloud-03' src={$CDN_BASE_URL + 'img_cloud_01.png'} />
        <img class='landing-img img-cloud-04' src={$CDN_BASE_URL + 'img_cloud_02.png'} />
        <img class='landing-img img-first-name' src={$CDN_BASE_URL + 'img_first_name.png'} />
        <img src={imgBtnAccept} alt='' class='home-btn' />
      </div>
    )
  }
}
