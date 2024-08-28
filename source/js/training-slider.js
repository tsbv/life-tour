import Swiper from 'swiper/bundle';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
const initTrainingSlider = () => {
  const sliderTrainingEl = document.querySelector('.swiper-training');
  const swiperTraining = new Swiper(sliderTrainingEl, {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 20,
    simulateTouch: true,
    initialSlide: 2,
    breakpoints: {
      320: {
        initialSlide: 2,
        slidesPerView: 1
      },
      768: {
        initialSlide: 0,
        slidesPerView: 3,
        simulateTouch: false
      },
      1440: {
        initialSlide: 0,
        slidesPerView: 4,
        simulateTouch: false
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  swiperTraining.update();
};

export { initTrainingSlider };
