document.addEventListener( 'DOMContentLoaded', function () {
    
	var secondarySlider = new Splide( '#secondary-slider', {
		fixedWidth  : 100,
        width       : 400,
		height      : 80,
		gap         : 10,
        direction  : 'ltr',
	    heightRatio: 0.2,
	    perPage    : 3,
		cover       : true,
        pagination  : false,
        rewind      : true,
		isNavigation: true,
		focus       : 'center',
	
	} ).mount();
	
	var primarySlider = new Splide( '#primary-slider', {
		type       : 'fade',
		heightRatio: 0.5,
		pagination : false,
		arrows     : false,
		cover      : true,
        fixedWidth : 400,
        width      : 500,
        height     : 300,
	} ); // do not call mount() here.
	
	primarySlider.sync( secondarySlider ).mount();
    } );


document.addEventListener( 'DOMContentLoaded', function () {
    document.querySelectorAll('.primary-01').forEach(carousel => new Splide( carousel, {
        type       : 'fade',
		heightRatio: 0.5,
		pagination : false,
		arrows     : false,
		cover      : false,
        width      : 400,
        height      :400,
       
    
}).mount());


document.querySelectorAll('.secondary-01').forEach(carousel => new Splide( carousel, {
        fixedWidth  : 100,
		height      : 300,
        fixedHeight : 100,
        type        : 'slide',
		width       : 100,
        trimSpace   : 'move',
        heightRatio: 0.5,
        perPage     : 3,
		gap         : 10,
		cover       : true,
		isNavigation: true,
        direction   : 'ttb',
		// autoWidth   : false,
        rewind      : true,
        pagination  : false,
		focus       : true,

	
}).mount());

   } );

   document.addEventListener( 'DOMContentLoaded', function () {
    document.querySelectorAll('.primary-mobile').forEach(carousel => new Splide( carousel, {
       type       : 'fade',
		heightRatio: 0.5,
		pagination : false,
		arrows     : false,
		cover      : true,
        fixedWidth : 400,
        width      : 500,
        height     : 300,
       
    
}).mount());


document.querySelectorAll('.secondary-mobile').forEach(carousel => new Splide( carousel, {
       	fixedWidth  : 100,
        width       : 400,
		height      : 80,
		gap         : 10,
        direction  : 'ltr',
	    heightRatio: 0.2,
	    perPage    : 3,
		cover       : true,
        pagination  : false,
        rewind      : true,
		isNavigation: true,
		focus       : 'center',

	
}).mount());

   } );


