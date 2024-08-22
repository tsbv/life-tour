import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const initReviewsSlider = () => {
  const sliderReviewsEl = document.querySelector('.swiper-reviews');
  const swiperReviews = new Swiper(sliderReviewsEl, {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 30,
    simulateTouch: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        simulateTouch: false
      },
      1440: {
        slidesPerView: 2,
        spaceBetween: 120,
        simulateTouch: false
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  swiperReviews.update();
};

export { initReviewsSlider };
