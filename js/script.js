;(function () {
	'use strict';

	window.Edvizer = window.Edvizer || {};

	/**
	 * This class represents the main application launcher
	 */
	 window.Edvizer.App = function(){
	 	var self = this;

    /**
     * Initializes app resources
     */
     this.init = function(){
     	self.initSlider();
     };

     this.initSlider = function(){
     	$(window).load(function() {
     		$('#slider1, #slider2').nivoSlider();
     	});
     }

 };

 var app = new window.Edvizer.App();
 app.init();
})();

