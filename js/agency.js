/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    //scroll top button
    $("#Arriba").hide(); //ocultamos el boton para el primer ejemplo

	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 300) {
				$('#Arriba').fadeIn();
			} else {
				$('#Arriba').fadeOut();
			}
		});
		$('#Arriba').click(function () {
			$('body,html').animate({scrollTop: 0}, 2000);
			return false;
		});
	});
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

//button post redirect
$('.btn-post').on('click', function(){
	window.location.replace($(this).data('post'));
});


// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});