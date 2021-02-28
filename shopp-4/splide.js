
document.addEventListener( 'DOMContentLoaded', function () {
 
	

// document.querySelectorAll('.secondary').forEach(carousel => new Splide( carousel, {
	var thumbnailsSplide = new Splide('#splide-thumbnails' , {
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

}).mount();

// document.querySelectorAll('.primary').forEach(carousel => new Splide( carousel, {
	var primarySplide = new Splide ('#splide-primary', {
        type       : 'fade',
		heightRatio: 0.5,
		pagination : false,
		cover      : true,
        rewind     : true, 
        fixedHeight: 600,
        width:     750,
        arrows:     false,
    


});

primarySplide.sync( thumbnailsSplide ).mount();

// .mount());


} );