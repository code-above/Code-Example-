
// document.addEventListener( 'DOMContentLoaded', function () {
 
	

// document.querySelectorAll('.secondary').forEach(carousel => new Splide( carousel, {
//   fixedWidth  : 100,
// 		fixedHeight : 100,
// 		width       : 500,
// 		gap         : 10,
// 		cover       : true,
// 		isNavigation: true,
//         arrows      : true,
// 		autoWidth   : false,
//         rewind      : true,
//         pagination  : false,
// 		focus       : 'center',
// 		breakpoints : {
// 			'600': {
// 				fixedWidth: 66,
// 				height    : 40,
// 			}
// 		},

// }).mount());

// document.querySelectorAll('.primary').forEach(carousel => new Splide( carousel, {
//         type       : 'fade',
// 		heightRatio: 0.5,
// 		pagination : false,
// 		cover      : true,
//         rewind     : true, 
//         fixedHeight: 500,
//         width:     450,
//         arrows:     false,
		



// }).mount());


// } );

document.addEventListener( 'DOMContentLoaded', function () {

	var secondarySlider = new Splide( '#second-slider', {
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


	var primarySlider = new Splide( '#prim-slider', {
		type       : 'fade',
		heightRatio: 0.5,
		pagination : false,
		arrows     : false,
		cover      : true,
	} ); // do not call mount() here.
	
	primarySlider.sync( secondarySlider ).mount();
} );