
document.addEventListener( 'DOMContentLoaded', function () {
 
	

document.querySelectorAll('.secondary').forEach(carousel => new Splide( carousel, {
  fixedWidth  : 100,
		fixedHeight : 100,
		width       : 500,
		gap         : 10,
		cover       : true,
		isNavigation: true,
        arrows      : true,
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

document.querySelectorAll('.primary').forEach(carousel => new Splide( carousel, {
        type       : 'fade',
		heightRatio: 0.5,
		pagination : false,
		cover      : true,
        rewind     : true, 
        fixedHeight: 500,
        width:     500,
        arrows:     false,
		



}).mount());


} );