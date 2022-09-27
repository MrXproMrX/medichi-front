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