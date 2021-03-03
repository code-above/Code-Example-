document.addEventListener( 'DOMContentLoaded', function () {
	var secondarySlider = new Splide( '#secondary-slider', {
		fixedWidth  : 100,
		height      : 100,
        width       : 460,
		gap         : 10,
		cover       : true,
		isNavigation: true,
        rewind      : true,
        pagination  : false,
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
        fixedWidth: 500,
        width      : 460,
        height     : 400,
	} ); // do not call mount() here.
	
	primarySlider.sync( secondarySlider ).mount();
} );