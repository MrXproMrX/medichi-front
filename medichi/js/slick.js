$(document).ready(function(){
  $('.doctors__list').slick({
    dots: true,
    arrows:false,
    infinite: false,
    autoplaySpeed:3000,
    speed: 1000,
    autoplay:true,
    slidesToShow: 4, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 565,
        settings: {
          slidesToShow: 1,
          dots: true,
          slidesToScroll: 1
        }
      }
    ]
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
  