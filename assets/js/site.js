$(function(){
	'use strict';

	var $els = {
		slick: $('#slick'),
		level: $('.level')
	},
	app = {
		init: function(){
			if($els.slick.length){
				this.initSlider();
			}

			if($els.level.length){
				this.fitVideos();
			}
		},
		initSlider: function(){
			$els.slick.slick({
				autoplay: true,
				arrows: false,
				dots: true
			});
		},
		fitVideos: function(){
			$els.level.fitVids();	
		}
	};

	app.init();
});