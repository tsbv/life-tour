import Swiper from 'swiper/bundle';
import { Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const initHeroSlider = () => {
  const sliderHeroEl = document.querySelector('.swiper-hero');
  const swiperHero = new Swiper(sliderHeroEl, {
    modules: [Pagination],
    simulateTouch: true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        simulateTouch: false
      },
      1440: {
        simulateTouch: false
      }
    },
  });
  swiperHero.update();
};

export { initHeroSlider };
