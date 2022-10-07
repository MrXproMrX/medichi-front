$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    data:true,
    nav:false,
    responsive:{
        0:{
          items:1
        },

        650:{
          items:1
        },

        700:{
          items:2
        },
  
        950:{
          items:3
        },
  
        1220:{
          items:4
        }
    }
  });

  $('.slider__list').slick({
    dots: true,
    arrows:true,
    autoplaySpeed:3000,
    infinite: true,
    speed: 1500,
    autoplay:true,
    fade: true,
  });
  
  $('.reviews__list').slick({
      dots: true,
      arrows:false,
      infinite: false,
      autoplaySpeed:3000,
      speed: 1000,
      autoplay:true,
      slidesToShow: 2, 
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1010,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
      ]
  });

});  