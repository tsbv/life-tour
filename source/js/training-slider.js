import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const initTrainingSlider = () => {
  const sliderswiperTrainingEl = document.querySelector('.swiper-training');
  const swiperTraining = new Swiper(sliderswiperTrainingEl, {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 20,
    simulateTouch: true,
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 3,
        simulateTouch: false
      },
      1440: {
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
