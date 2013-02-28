/*!
* jQuery TrEVo Height Maximizer v1.1
* https://github.com/djtrevo/HeightMaximizer
*
* Copyright 2012, Marco Trevisani
* * * * * * * * * * * * * * * * * * * * * *
* 
* Official Website: http://www.marcotrevisani.com
* Music Website: http://www.djtrevo.com
* 
* * * * * * * * * * * * * * * * * * * * * *
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://www.opensource.org/licenses/mit-license.php
* http://www.opensource.org/licenses/GPL-2.0
*/ (function($){  
 $.fn.heightMaximizer = function(options) {  
 
   var defaults = {  
   };
 
  var options = $.extend(defaults, options);
 
	return this.each(function() {
	
		heights = new Array();
		$(this).children("div").each(function(){
			heights.push($(this).height());
		});
	
	    heights.sort(numOrdD);    
	    maxheight = heights[0];

	    $(this).children("div").each(function () {
	        var borderbottom = $(this).css('border-bottom-width');
	        var bordertop = $(this).css('border-top-width');

	        // FIX x IE 7/8
	        if (borderbottom.indexOf("px") == -1) { borderbottom = 0; } 
	        if (bordertop.indexOf("px") == -1) { bordertop = 0; }
	        // ----------

	        tempHeight = parseInt(maxheight) - parseInt(borderbottom) - parseInt(bordertop)
	        $(this).height(tempHeight);
		});
  	
    });  
 };  
})(jQuery);

function numOrdA(a, b){ return (a-b); }
function numOrdD(a, b){ return (b-a); } 