$(function() {
	"use strict";
	// Preloader fades out when the document is ready
	var spinner = $('#spinner');
	$(spinner).fadeOut(300, function() {
		spinner.parent().find("#overlay-left").animate({left: '-50vw'}, 300);
		spinner.parent().find("#overlay-right").animate({right: '-50vw'}, 300, function() {
			$(spinner.parent()).fadeOut(10);
		});
	});

	// Add an inbody class when header exceeds the viewport height
	$(window).scroll(function() {
		checkHeaderOffSet();
	});	//Scroll function
	function checkHeaderOffSet() {
		var topOffset = $(window).scrollTop();
		var windowHeight = window.innerHeight,
		header = $('header:first-child');
		if (topOffset > windowHeight - $(header).outerHeight()) {
			$(header).addClass('inbody');
		}
		else {
			if ($(header).hasClass('inbody'))
			$(header).removeClass('inbody');
		}
	};	//checkHeaderOffSet
	checkHeaderOffSet();
	// To add functionality on mobile header buttons
	$('.hamburger').on('click', function(event) {
		var $this = $(this);
		$this.toggleClass("active-color");
		$(".mob-nav-wrapper").slideToggle();
		btnActiveCheck('hamburger');
	});
	$('.mob-search').on('click', function(event) {
		var $this = $(this);
		$this.toggleClass("active-color");
		$('.mob-search-wrapper').slideToggle();
		btnActiveCheck('mob-search');
	});
	function btnActiveCheck(menu_type) {
		if (menu_type == 'hamburger') {
			$('.mob-search').removeClass('active-color');
			$('.mob-search-wrapper').slideUp();
		}
		else {
			$('.hamburger').removeClass('active-color');
			$('.mob-nav-wrapper').slideUp();
		}
	}	//btnActiveCheck

	//	Search buton animation while clicking on the search icon of medium size screen and up
	var searchButton =  $('.site-search-btn');
	var searchInput = searchButton.prev();
	$(searchButton).on('click', function() {
		searchInput.focus();
		if (searchInput.val().length > 0) {
			$('.site-search-form').submit();
		}
	});
});