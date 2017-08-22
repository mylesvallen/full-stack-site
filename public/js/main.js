(function($) {

// Set variables
var $activeSlide = $(".active"),
    $homeSlide = $(".homeSlide"),
    $hero = $(".hero");

	// Mouse move tilt effect
	$(document).mousemove(function(event){
	  
		// Detect mouse position
		var xPos = (event.clientX/$(window).width())-0.5;
		var yPos = (event.clientY/$(window).height())-0.5;

		// Tilt the hero container
		TweenLite.to($hero, 0.6, { rotationY:5*xPos, rotationX:5*yPos, ease:Power1.easeOut, transformPerspective:900, transformOrigin:"center" });

		// Update text on the page with the current mouse position
		$(".bottom strong").text(event.pageX + ", " + event.pageY);
	});
	

	// Init function that run on page load
	function init(){

	  // Hide all slides apart from the active one
	  TweenLite.set($homeSlide.not($activeSlide), {autoAlpha: 0});

	  
	}

	// Run Init function
	init();
})(jQuery);


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
};

$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});


  var options = {"particles":{"number":{"value":500,"density":{"enable":true,"value_area":552.4033491425909}},"color":{"value":"#808080"},"shape":{"type":"circle","stroke":{"width":0,"color":"#ffffff"},"polygon":{"nb_sides":3},"image":{"src":"img/github.svg","width":70,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":false,"speed":3,"opacity_min":1.0,"sync":false}},"size":{"value":2,"random":true,"anim":{"enable":false,"speed":40,"size_min":3.0,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":3},"move":{"enable":true,"speed":1.5782952832645452,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":300,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":200,"line_linked":{"opacity":10}},"bubble":{"distance":200,"size":40,"duration":2,"opacity":8,"speed":10},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":4}}},"retina_detect":false};particlesJS("particle", options);
