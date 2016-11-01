(function($) {

  $(document).ready(function() {

    $(window).scroll(function(){
      // Change mobile nav color   
      var aboutsection = $('#about').offset().top;
      var gallerysection = $('#gallery').offset().top;
      if ($(document).scrollTop() >= aboutsection && $(document).scrollTop() < gallerysection) {   
       $('#nav-btn span').addClass('black');
      } else {
        $('#nav-btn span').removeClass('black');
      } 
      // Sticky menu 
      if($(window).scrollTop() > 80) {
        $('.main-head-2').addClass('sticky');
      } else {          
        $('.main-head-2').removeClass('sticky');
      }
    }); 
 
    // Search button 
    $('.fa.fa-search').click(function() {
      $('.button-search').toggleClass('hidden');
      $('.button-search-one').toggleClass('hidden');
      $('.two').toggleClass('hidden');
      $('.search-icon-menu').toggleClass('hidden');
    }); 

    // Gallery rotator 
    $('.dot-buttons li').click(function() {
      var $this = $(this),
         $siblings = $this.parent().children(),
         position = $siblings.index($this);
      $('.photo-container').removeClass('active-gallery').eq(position).addClass('active-gallery');   
      $siblings.removeClass('active-gallery');
      $this.addClass('active-gallery');
    }); 

    // Page scroll to active class add menu
    var lastId,
      topMenu = $(".main-nav"),
      topMenuHeight = topMenu.outerHeight()+15,     
      menuItems = topMenu.find("a"),      
      scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
      });

    $(window).scroll(function(){
     var fromTop = $(this).scrollTop()+topMenuHeight; 
     var cur = scrollItems.map(function(){
       if ($(this).offset().top < fromTop)
         return this;
     });
     cur = cur[cur.length-1];
     var id = cur && cur.length ? cur[0].id : "";
       if (lastId !== id) {
          lastId = id;
          menuItems
           .parent().removeClass("active")
           .end().filter("[href=#"+id+"]").parent().addClass("active");
       }                   
    }); 

    // Testimonials rotator
    $('.client-control-next, .client-control-previous').click(function() {
      var $this = $(this),
      activeClient = $('.clients-units').find('.active-client'),
      position = $('.clients-units').children().index(activeClient),
      numClient = $('.client-unit').length;    
        if ($this.hasClass('.client-control-next')) { 
          if (position < numClient - 1) {
            $('.active-client').removeClass('active-client').next().addClass('active-client');
          } else {
            $('.client-unit').removeClass('active-client').first().addClass('active-client');
          }
        } else {
          if (position === 0) {
            $('.client-unit').removeClass('active-client').last().addClass('active-client');
          } else {
            $('.active-client').removeClass('active-client').prev().addClass('active-client');
          }
        }
    });
         
    // Responsive menu
    $('#nav-btn').click(function() {
      $(this).toggleClass('close');
      $('.main-head').toggleClass('open'); 
    });
    $('.main-head li a').click(function() {
      $('.main-head').toggleClass('open');
      $('#nav-btn').toggleClass('close');      
    });
    
    // Smooth scroll
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
              scrollTop: target.offset().top
          }, 1500);
          return false;
        }
      }
    });

    //Lightbox
    $("a.projects_link").lightbox();    
  });
})(jQuery);


