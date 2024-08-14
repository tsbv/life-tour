import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const initTourSlider = () => {
  const sliderTourEl = document.querySelector('.swiper-tour');
  const swiperTour = new Swiper(sliderTourEl, {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    simulateTouch: true,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
        simulateTouch: false
      },
      1366: {
        slidesPerView: 3,
        spaceBetween: 30,
        simulateTouch: false
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  swiperTour.update();
};

export { initTourSlider };
