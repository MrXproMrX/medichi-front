$(document).ready(function(){
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.dropdown-trigger');
        var instances = M.Dropdown.init(elems, options);
    });
      
      // Or with jQuery
      
    $('.dropdown-trigger').dropdown();

    // ------------------------------------------------------------------------------------

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, options);
    });
  
    // Initialize collapsible (uncomment the lines below if you use the dropdown variation)
    // var collapsibleElem = document.querySelector('.collapsible');
    // var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);
  
    // Or with jQuery
  
    $(document).ready(function(){
      $('.sidenav').sidenav();
    });
})


// ACARDION start

const titles = document.querySelectorAll('.services__label');
const items = document.querySelectorAll('.services__item');

titles.forEach(label => {
  label.addEventListener('click', (e) => {
    const cleackedTitles = e.currentTarget;
    const element = cleackedTitles.parentNode;
    if (element.classList.contains('services__item__active')) {
      element.classList.remove('services__item__active');
    } else {
      items.forEach(element => {
        if (element.classList.contains('services__item__active')) {
          element.classList.remove('services__item__active');
        }
      });
      element.classList.add('services__item__active');
    }
  });
})


// ACARDION start



// directions_in id start

var i=0;
	$(".directions_in__link").each(function(){
  length
	i++;
	$(this).attr("href","#mrx-"+i);
});

var i=0;
	$(".directions_in__item").each(function(){
  length
	i++;
	$(this).attr("id","mrx-"+i);
});


// directions_in id end
$('.directions_in__item__cart__max .directions_in__item').hide();
$('.directions_in__item__cart__max .directions_in__item:first').show();
$('.directions_in__menu li:first').addClass('directions_in__menu_active');

// Change tab class and display content
$('.directions_in__menu a').on('click', function(event){
  event.preventDefault();
  $('.directions_in__menu li').removeClass('directions_in__menu_active');
  $(this).parent().addClass('directions_in__menu_active');
  $('.directions_in__item__cart__max .directions_in__item').hide();
  $($(this).attr('href')).show();
});


// directions_in id end




// news start

$(function(){
  let Catalog_max__pro__ul_link = document.querySelectorAll('.news_in__pagination__link');

  for(let i = 0; i<Catalog_max__pro__ul_link.length; i++){
      Catalog_max__pro__ul_link[i].addEventListener('click',function(){
          for(let j = 0; j<Catalog_max__pro__ul_link.length;j++){
              Catalog_max__pro__ul_link[j].classList.remove('news_in__pagination_active');
          }
          this.classList.add('news_in__pagination_active');

      })
  }
});

// news end


$(document).ready(function(){
  (function($){
    $('.numbers__max').each(function(){
        $(this).prop('Counter',0).animate({
            Counter:$(this).text()
        },
        {
            duration:9000,
            easing:"swing",
            step:function(now){
                $(this).text(Math.ceil(now));
            }  
       });
    })
  })(jQuery);
});