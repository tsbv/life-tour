import Swiper from 'swiper/bundle';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
const initGallerySlider = () => {
  const sliderGalleryEl = document.querySelector('.swiper-gallery');
  const swiperGallery = new Swiper(sliderGalleryEl, {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 5,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1440: {
        slidesPerView: 7,
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
