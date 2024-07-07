function menu_open() {
  jQuery(".main-menu").css({ "transform": "translateX(0)" })
}

jQuery(window).scroll(function () {
  if (jQuery(window).scrollTop() >= 1) {
    jQuery('header').addClass('fixed');
  }
  else {
    jQuery('header').removeClass('fixed');
  }
});

jQuery(document).ready(function () {

  jQuery(".nav_btn").click(function(){
	  jQuery(".main-menu").toggleClass("sidebar-open");
    jQuery(this).toggleClass('sidebar_active').siblings().removeClass('sidebar_active');
    jQuery('body').toggleClass('menuwrap-open');
	});

  jQuery('.ban-slider').slick({
    infinite: true,
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  });

  jQuery('.why-choose-slider').slick({
    infinite: true,
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 5000,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
  });

  jQuery('.luxury-salon-slider').slick({
    infinite: true,
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
  });

  jQuery('.review-slider').slick({
    infinite: true,
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  });

  jQuery('.insta-sldr').slick({
    infinite: true,
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
  });

});


document.getElementById("year").innerHTML = new Date().getFullYear();