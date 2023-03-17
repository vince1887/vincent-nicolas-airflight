var swiper = new Swiper(".mySwiper", {});

var swiperlp = new Swiper(".swiper-screenshots", {
    loop: true,
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
