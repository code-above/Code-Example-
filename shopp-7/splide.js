document.addEventListener( 'DOMContentLoaded', function () {
	var secondarySlider = new Splide( '#secondary-slider', {
		fixedWidth  : 100,
		height      : 350,
		gap         : 20,
        direction  : 'ttb',
	    heightRatio: 0.2,
	    perPage    : 3,
		cover       : true,
        pagination  : false,
        rewind      : true,
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
        fixedWidth : 330,
        width      : 400,
        height     : 360,
	} ); // do not call mount() here.
	
	primarySlider.sync( secondarySlider ).mount();
} );