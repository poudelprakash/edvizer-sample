;(function () {
	'use strict';

	/**
	 * This class represents the main application launcher
	 */
	 window.Edvizer.App = function(){
	 	var self = this;
	 	var chart = new window.Edvizer.Chart();
    /**
     * Initializes app resources
     */
     this.init = function(){
     	self.initSlider();
     	chart.init();
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

