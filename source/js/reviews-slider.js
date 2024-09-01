import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
const initReviewsSlider = () => {
  const sliderReviewsEl = document.querySelector('.swiper-reviews');
  const swiperReviews = new Swiper(sliderReviewsEl, {
    slidesPerView: 'auto',
    spaceBetween: 30,
    simulateTouch: true,
    breakpoints: {
      320: {
        spaceBetween: 30,
      },
      768: {
        simulateTouch: false
      },
      1440: {
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
