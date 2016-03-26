/*
 * name: linkIt
 * author: Yolanda Xu
 * version: 0.1.0
 * license: meow
 */
 (function ( $ ) {
	 $.fn.linkIt = function ( options ){
		 var settings = $.extend({
			 //these are the defaults.
			 href: null,
			 text: null,
			 target: "_self"
			 
		 }, options);
		 
		 //validation of input href
		 if (settings.href == null){
			 console.log("You need put in a href option.");
			 return this;
		 }
		
		this.each(function(i){
			var object = $(this);
			
			if(settings.text == null) {
				settings.text = object.text();
			}
			return object.wrap("<a target ="+ settings.target +" href = "+settings.href+">" + "</a>").text(settings.text);	
		});
		
	 };
 }( jQuery ));