export default function SwiperModule() {
  const member = new Swiper(".js-member", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: ".member-pag",
      clickable: true,
    },
    speed: 800,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1200: {
        spaceBetween: 20,
        slidesPerView: 4,
      },
      1700: {
        spaceBetween: 90,
        slidesPerView: 4,
      },
    },
  });
  const customer = new Swiper(".js-customer", {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: ".customer-pag",
      clickable: true,
    },
    speed: 800,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      576: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1200: {
        spaceBetween: 20,
        slidesPerView: 6,
      },
      1700: {
        spaceBetween: 80,
        slidesPerView: 6,
      },
    },
  });
  const feedback = new Swiper(".js-feedback", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: false,
    pagination: {
      el: ".feedback-pag",
      clickable: true,
    },
    speed: 800,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1200: {
        spaceBetween: 20,
        slidesPerView: 4,
      },
      1700: {
        spaceBetween: 90,
        slidesPerView: 4,
        autoplay: false,
        pagination: false,
      },
    },
  });
  const trust = new Swiper(".js-trust", {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: ".trust-pag",
      clickable: true,
    },
    speed: 800,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      576: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      992: {
        spaceBetween: 20,
        slidesPerView: 4,
      },
      1700: {
        spaceBetween: 85,
        slidesPerView: 4,
      },
    },
  });
}
