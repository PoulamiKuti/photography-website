$(document).ready(function() {
// aos animation
AOS.init({
  duration: 1200,
  once: true,
})

// sticky header
$(window).scroll(function () {
if ($(window).scrollTop() > 100) {
  $(".header").addClass('sticky');
} else {
  $(".header").removeClass('sticky');
}
});
  // fancybox
  $('[data-fancybox]').fancybox({
    buttons : [
      'close'
    ],
    wheel : false,
    transitionEffect: "slide",
    loop            : true,
    toolbar         : false,
    clickContent    : false
  });

    // banner slider
    new Swiper(".banner-slider", {
      effect: "fade",
      slidesPerView: 1,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".banner-navigation .swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".banner-navigation .swiper-button-next",
        prevEl: ".banner-navigation .swiper-button-prev",
      },
    });
  
    // testimonial slider
    new Swiper(".testimonial-slider", {
      effect: "fade",
      slidesPerView: 1,
      pagination: {
        el: ".testimonial-navigation .swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".testimonial-navigation .swiper-button-next",
        prevEl: ".testimonial-navigation .swiper-button-prev",
      },
    });

     // image slider
     new Swiper(".image-slider", {
      slidesPerView: "auto",
      spaceBetween: 30,
      pagination: {
        el: ".image-slider-navigation .swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".image-slider-navigation .swiper-button-next",
        prevEl: ".image-slider-navigation .swiper-button-prev",
      },
      breakpoints: {
        0: {
          spaceBetween: 15,
        },
        768: {
          spaceBetween: 30,
        },
      },
    });

});