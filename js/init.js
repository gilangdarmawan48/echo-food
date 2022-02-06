(function($){
  $(function(){

    $('.dropdown-trigger').dropdown({
      hover: true,
      coverTrigger: false,
      constrainWidth: false
    });
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.slider').slider();
    $('.scrollspy').scrollSpy();
    $(document).scroll(function () {
		  var $nav = $(".pushpin-demo-nav");
		  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
		});

  $('.materialboxed').materialbox();

  }); // end of document ready
})(jQuery); // end of jQuery name space
