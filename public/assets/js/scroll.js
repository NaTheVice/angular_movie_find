jQuery(function($){

var MovieMaster = window.MovieMaster || {};
	
     // Calculating the distance from the top of the page to the initial position of the navbar, and store it in a variable
    var navbarOffset = $('.navbar').offset().top;

    // Calculating the navbar height, and store it in a variable
    var navbarHeight = $('.navbar').outerHeight();


//wenn navbar die erste on top position erreicht wird sie fixiert
$(window).on('scroll', function () {
        if ( $(window).scrollTop() >= navbarOffset ) { 
            $('.navbar').addClass('navbar-fixed-top');
            $('body').css('padding-top', navbarHeight + 'px');

        } else {
            $('.navbar').removeClass('navbar-fixed-top');
            $('body').css('padding-top', '0');
        }

});



         

})