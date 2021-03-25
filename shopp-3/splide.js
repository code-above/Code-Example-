document.addEventListener( 'DOMContentLoaded', function () {
	
 // first slider only (product 1)   
	var secondarySlider = new Splide( '#secondary-slider', {
		type		:'loop',
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

//slider for large screens only 

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
		type: 		'loop',
        fixedWidth  : 100,
		height      : 350,
        fixedHeight : 80,
		width       : 100,
        trimSpace   : 'move',
        heightRatio: 0.02,
        perPage     : 2,
		gap         : 10,
		cover       : true,
		isNavigation: true,
        direction   : 'ttb',
		// autoWidth   : false,
        rewind      : true,
        pagination  : false,
		focus       : true,
		clones 		: 3

	
}).mount());

   } );


// slider for mobile only ****************
document.addEventListener( 'DOMContentLoaded', function () {
 document.querySelectorAll('.primary-mobile').forEach(carousel => new Splide( carousel, {
	//  var mobilePrimary = new Splide( '#primary-mobile', {
	
       type       : 'fade',
		heightRatio: 0.5,
		pagination : false,
		arrows     : false,
		cover      : true,
        fixedWidth : 400,
        width      : 500,
        height     : 300,
       
    
 } ).mount());


document.querySelectorAll('.secondary-mobile').forEach(carousel => new Splide( carousel, {
	// var mobileSecondary = new Splide( '#secondary-mobile', {

		type		:'loop',
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

	
 } ).mount());
	// mobilePrimary.sync( mobileSecondary ).mount();

   });




