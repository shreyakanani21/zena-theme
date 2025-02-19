
var swiper = new Swiper(".banner-slider", {
  slidesPerView: 1,
  loop: false,  
  pagination: {
    el: ".swiper-round-pagination",
    clickable: true,
  },
   breakpoints: {
    0: {
      pagination: false, 
    },
    
    576: {
      pagination: {
        el: ".swiper-round-pagination",
        clickable: true,
      },
    },
}
});

var swiper = new Swiper(".banner-slider-1", {
  slidesPerView: 1,
  loop: false,
  reverseDirection: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
   breakpoints: {
    0: {
      pagination: false, 
    },
    
    576: {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
}
});

// Brand Logo Slider
var swiper = new Swiper(".logo-slider", {
  spaceBetween: 40,
  slidesPerView: 6,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
    1600: {
      slidesPerView: 6,
    },
  },
});

// Instagram post Slider
var swiper = new Swiper(".post-slider", {
   spaceBetween: 10,
   grabCursor: true,
   a11y: false,
   freeMode: true,
   speed: 2000,
   loop: true,
   slidesPerView: "auto",
   autoplay: {
   delay: 0,
   disableOnInteraction: false,
    },
});

// Customer review
var swiper = new Swiper(".review-slider", {
  spaceBetween: 30,
  slidesPerView: 3,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-round-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    }
  },
});
var swiper = new Swiper(".review-slider-2", {
  spaceBetween: 30,
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-round-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".blog-slider", {
  spaceBetween: 30,
  slidesPerView: 2,
  pagination: {
    el: ".swiper-round-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 2,
    }
  },
});

// custom-product-review
var swiper = new Swiper(".review-product-slider", {
  spaceBetween: 15,
  slidesPerView: 2,
  loop: true,
  pagination: {
    el: ".swiper-round-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 8,      
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,      
    },
    992: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 30,
      
    },
  },
});

// Featured products Slider
var swiper = new Swiper(".special-slider", {
      slidesPerView: 3,
      grid: {
        rows: 2,
      },
      loop: true,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-round-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          grid: {
            rows: 1,
          },
          spaceBetween: 15,
        },
        406: {
          slidesPerView: 2,
          grid: {
            rows: 1,
          },
          spaceBetween: 15,
        },
       576: {
         slidesPerView: 1,
          grid: {
            rows: 1,
          },
       },
        768: {
          slidesPerView: 1,
          grid: {
            rows: 2,
          },
        },
        992: {
          slidesPerView: 2,
          grid: {
            rows: 2,
          },
        },
        1400: {
          slidesPerView: 3,
          grid: {
            rows: 2,
          },
        },
      }
    });

// Variant images
  document.addEventListener("DOMContentLoaded", function () {
    var swipers = {};
    document.querySelectorAll('.swiper.variant-container').forEach(function (swiperEl) {
      var productId = swiperEl.id.split('-')[1]; // Extract product ID
      swipers[productId] = new Swiper(swiperEl, {
        effect: 'fade',
        fadeEffect: { crossFade: true },
        lazy: { loadOnTransitionStart: true, loadPrevNext: true },
        allowTouchMove: false
      });
    });

    window.changeSlide = function (slideIndex, productId) {
      if (swipers[productId]) {
        swipers[productId].slideTo(slideIndex); // Slide to the respective variant slide
      } else {
        console.error("Swiper instance not found for product ID:", productId);
      }
    };
  });

  // product
    var thumbSwiper = new Swiper(".thumbnail-slider", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var mainSwiper = new Swiper(".main-slider", {
      spaceBetween: 10,
      thumbs: {
        swiper: thumbSwiper,
      },
    });

var swiper = new Swiper(".main-product-slider", {
   spaceBetween: 0,
   slidesPerView: 1,
});