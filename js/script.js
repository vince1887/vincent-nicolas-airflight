var swiper = new Swiper(".mySwiper", {});

const swiperLp = new Swiper(".swiper-screenshots", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 100,
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
