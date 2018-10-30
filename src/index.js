import 'normalize.css'
import Swiper from 'swiper';
import '../node_modules/swiper/dist/css/swiper.css';
import './stylesheets/style.scss'

// ancor
document.querySelectorAll("a[href^=\"#\"]").forEach((anchor) => {
  anchor.addEventListener("click", function (ev) {
    ev.preventDefault();

    const targetElement = document.querySelector(this.getAttribute("href"));
    targetElement.scrollIntoView({
      block: "start",
      alignToTop: true,
      behavior: "smooth"
    });
  });
});
// menu
document.querySelector('.menu_bar').addEventListener("click", function(){
  document.querySelector('.menu_top__row').classList.toggle("menu__active");
  console.log(document.querySelector('.menu_top__row'));
});

// sliders
var swiper = new Swiper('.slider_main__base', {
  speed: 800,
  effect: 'slide',
  pagination: {
    el: '.slider_main__pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="slider_main__pagination_item text_style1 text_style1_bold ' + className + '">' + 'IMG 00' + (index + 1) + '</span>';
    },
  },
});
var swiper2 = new Swiper('.slider2__base', {
  speed: 800,
  loop: true,
  effect: 'fade',
  slideToClickedSlide: true,
  centeredSlides: true,
  slidesPerView: 1,
  // loopedSlides: 3,
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  navigation: {
    nextEl: '.slider2__nav_next',
    prevEl: '.slider2__nav_prev',
  },
  on: {
    init: function () {
      let img_1 = document.querySelector('.slider2__list .swiper-slide-prev .slider2__item_img img');
      let img_2 = document.querySelector('.slider2__list .swiper-slide-next .slider2__item_img img');
      let img_1_copy = img_1.cloneNode(true);
      document.querySelector('.slider2__nav_img_prev .slider2__nav_img_wrap').appendChild(img_1_copy);
      let img_2_copy = img_2.cloneNode(true);
      document.querySelector('.slider2__nav_img_next .slider2__nav_img_wrap').appendChild(img_2_copy);
    },
  },
});
swiper2.on('slideChange', function () {
  let img_1 = document.querySelector('.slider2__list .swiper-slide-prev .slider2__item_img img');
  let img_2 = document.querySelector('.slider2__list .swiper-slide-next .slider2__item_img img');

  let img_1_copy = img_1.cloneNode(true);
  let img_1_old = document.querySelector('.slider2__nav_img_prev .slider2__nav_img_wrap').getElementsByTagName('img');
  img_1_old[0].remove();
  document.querySelector('.slider2__nav_img_prev .slider2__nav_img_wrap').appendChild(img_1_copy);

  let img_2_copy = img_2.cloneNode(true);
  let img_2_old = document.querySelector('.slider2__nav_img_next .slider2__nav_img_wrap').getElementsByTagName('img');
  img_2_old[0].remove();
  document.querySelector('.slider2__nav_img_next .slider2__nav_img_wrap').appendChild(img_2_copy);

  // console.log('slide changed');
});
