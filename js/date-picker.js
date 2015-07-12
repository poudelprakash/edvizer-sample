;(function() {
    'use strict';
    var $datePicker = $( "#datepicker" );
    $(function() {
    	$datePicker.datepicker();
  	});

  	$datePicker.change(function(){
  		alert('You selected '+$datePicker.val());
  	});

})();