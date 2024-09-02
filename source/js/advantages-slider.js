import Swiper from 'swiper/bundle';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
const initAdvantagesSlider = () => {
  const sliderAdvantagesEl = document.querySelector('.swiper-advantages');
  const swiperAdvantages = new Swiper(sliderAdvantagesEl, {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      320: {
        enabled: false
      },
      1440: {
        enabled: true,
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  swiperAdvantages.update();
};

export { initAdvantagesSlider };
