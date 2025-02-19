$(document).ready(function(){
  /*========================
  banner slider
==========================*/
  $(".banner-slider").slick();

 /*========================
   brand logo slider
==========================*/
  $(".logo-slider").slick();

 /*========================
   review slider
==========================*/
$(".slick-review").slick();

 /*========================
   header slider
==========================*/
$(".slick-header-slider").slick({
    infinite: true, 
    slidesToShow: 1, 
    slidesToScroll: 1,
    dots: true, 
    arrows: true,
    prevArrow: ".slick-button-prev",
    nextArrow: ".slick-button-next", 
    customPaging: function (slider, i) {
      return "<button>" + (i + 1) + "</button>"; 
    },
  });

 /*========================
   product bottom
==========================*/
    $('.main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, 
    asNavFor: '.thumbnail-slider'
  });

  $(".thumbnail-slider").slick({
    slidesToShow: 4, 
    slidesToScroll: 1, 
    asNavFor: ".main-slider", 
    focusOnSelect: true, 
    arrows: false, 
    centerMode: true, 
    centerPadding: "0", 
    autoplay: true, 
    autoplaySpeed: 3000,
  });

 /*========================
   product slider
==========================*/
    $('.main-product-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, 
    dots: false,  
    fade: true,   
    autoplay: true,
    autoplaySpeed: 3000
  });

  /*========================
   testimonial slider
==========================*/
  $(".slick-testimonioal").slick();

  /*========================
    header slider
==========================*/
  $('.header-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev">‹</button>',
    nextArrow: '<button type="button" class="slick-next">›</button>',
    dots: false
  });


    /*========================
    look book slider 
==========================*/
    $('.category-item.large.slider').slick({
      slidesToShow: 1, 
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      arrows: false,
      dots: false, 
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  
  /*========================
  collection banner sldier
==========================*/
  $('.image-slider').slick();

  /*========================
  look book slider
==========================*/
    $('.lookbook-slider').slick();
});


