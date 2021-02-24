
document.addEventListener( 'DOMContentLoaded', function () {
    
          
document.querySelectorAll('.primary-01').forEach(carousel => new Splide( carousel, {
        type       : 'fade',
		heightRatio: 0.5,
		pagination : false,
		cover      : true,
        rewind     : true, 
        fixedHeight: 600,
        width:     750,
        arrows:     false,
       
        
    
}).mount());

document.querySelectorAll('.secondary-01').forEach(carousel => new Splide( carousel, {
  fixedWidth  : 100,
		fixedHeight : 100,
		width       : 750,
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




} );