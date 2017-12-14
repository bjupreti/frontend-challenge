$(function() {
	"use strict";
	// Preloader fades out when the document is ready
	$("#spinner").fadeOut(300, function() {
		$("#overlay-left").animate({left: "-50vw"}, 300);
		$("#overlay-right").animate({right: "-50vw"}, 300);
	});
});