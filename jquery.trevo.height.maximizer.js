/*!
 * jQuery TrEVo Height Maximizer v1.0
 * https://github.com/djtrevo/HeightMaximizer
 *
 * Copyright 2012, Marco Trevisani
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function($){  
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

		$(this).children("div").each(function(){
			tempHeight = parseInt(maxheight) - parseInt($(this).css('border-bottom-width')) - parseInt($(this).css('border-top-width'))
			$(this).height(tempHeight);
		});
    	
    });  
 };  
})(jQuery);

function numOrdA(a, b){ return (a-b); }
function numOrdD(a, b){ return (b-a); } 