import Swiper from 'swiper/bundle';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
const initGallerySlider = () => {
  const sliderGalleryEl = document.querySelector('.swiper-gallery');
  const swiperGallery = new Swiper(sliderGalleryEl, {
    modules: [Navigation],
    slidesPerView: 2,
    spaceBetween: 5,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 5,
        enabled: false
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  swiperGallery.update();
};

export { initGallerySlider };
