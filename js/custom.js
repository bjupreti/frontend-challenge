$(function() {
	"use strict";
	// Preloader fades out when the document is ready
	var spinner = $("#spinner");
	$(spinner).fadeOut(300, function() {
		// $("#overlay-left").animate({left: "-50vw"}, 300);
		// $("#overlay-right").animate({right: "-50vw"}, 300);
		spinner.parent().find("#overlay-left").animate({left: "-50vw"}, 300);
		spinner.parent().find("#overlay-right").animate({right: "-50vw"}, 300, function() {
			$(spinner.parent()).fadeOut(10);
		});
		// spinner.parent().addClass("position-relative");
	});
});