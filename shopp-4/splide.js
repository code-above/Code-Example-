document.addEventListener( 'DOMContentLoaded', function () {
	var secondarySlider = new Splide( '#secondary-slider', {
		fixedWidth  : 100,
		height      : 60,
		gap         : 10,
		cover       : true,
		isNavigation: true,
		focus       : 'center',
		breakpoints : {
			'600': {
				fixedWidth: 66,
				height    : 40,
			}
		},
	} ).mount();
	
	var primarySlider = new Splide( '#primary-slider', {
		type       : 'fade',
		heightRatio: 0.5,
		pagination : false,
		arrows     : false,
		cover      : true,
	} ); // do not call mount() here.
	
	primarySlider.sync( secondarySlider ).mount();


    document.querySelectorAll('.primary').forEach(carousel => new Splide( carousel, {
  type       : 'fade',
		heightRatio: 0.5,
		pagination : false,
		arrows     : false,
		cover      : false,
}).mount());

document.querySelectorAll('.secondary').forEach(carousel => new Splide( carousel, {
  fixedWidth  : 80,
		fixedHeight : 80,
		width       : 290,
		gap         : 10,
		cover       : false,
		isNavigation: true,
		autoWidth   : false,
        rewind      : true,
        pagination  : false,
		focus       : 'center',
		breakpoints : {
			'600': {
				fixedWidth: 66,
				height    : 40,
			}
		},
}).mount());


} );

