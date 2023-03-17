var swiper = new Swiper(".mySwiper", {});

var swiperLp = new Swiper(".swiper-screenshots", {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 25
        }}
  });
