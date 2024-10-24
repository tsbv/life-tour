import { toggleMobileHandler } from './mobile-menu';
import { initTourSlider } from './tour-slider';
import { initTrainingSlider } from './training-slider';
import { initReviewsSlider } from './reviews-slider';
import { initHeroSlider } from './hero-slider';
import { initFormValidation } from './form-validation';
import { initAdvantagesSlider } from './advantages-slider';
import { initGallerySlider } from './gallery-slider';

toggleMobileHandler(); // Мобильное меню
initTourSlider(); // Инициализация слайдера туров
initTrainingSlider(); // Инициализация слайдера инструкторов
initReviewsSlider(); // Инициализация слайдера отзывов
initHeroSlider(); // Инициализация слайдера hero
initFormValidation(); // Валидация формы
initAdvantagesSlider(); // Инициализация слайдера преимуществ
initGallerySlider(); // Инициализация слайдера галереи
