 
 var owl = $("#slider-text").owlCarousel({
loop:true,
    margin:10,
    nav:true,
    /*autoplayHoverPause:true,*/
      /* animateOut: 'slideOutUp',*/
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        
        
    }
});

 var owl = $("#customer-slider").owlCarousel({
  loop: true,
  responsiveClass: true,
  nav: true,
  margin: 0,
  autoplayTimeout: 4000,
  smartSpeed: 400,
  center: true,
  navText: ["&#8592;", "&#8594;"],
  responsive: {
    0: {items: 1
    },

    600: {items: 3

    },
    1200: {items: 3
    }
  }});

 $(".tab-link").click(function () {
    var tabID = $(this).attr("data-tab");

    $(this).addClass("active").siblings().removeClass("active");

    $("#tab-" + tabID)
        .addClass("active")
        .siblings()
        .removeClass("active");
});


 var owl = $("#slider-full").owlCarousel({
loop:true,
    margin:10,
    nav:true,
    /*autoplayHoverPause:true,*/
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        
        
    }
});


  wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
    document.getElementById('moar').onclick = function() {
      var section = document.createElement('section');
      section.className = 'section--purple wow fadeInDown';
      this.parentNode.insertBefore(section, this);
    };



