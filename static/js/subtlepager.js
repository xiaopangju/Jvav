var subtlePager = {
	className:'page',
	classNames:'pages',
	
	$gsub:function(source, pattern, replacement) // -> String
	{
		// Take the source and search for the pattern, 
		// then use the result of the replacement function to 
		// replace the first regex capture group matched by the pattern in the source
		// Based on the PrototypeJS String method gsub http://prototypejs.org/api/string/gsub
		
		var result = '', match;
		if(typeof replacement == 'function')
			var _replacement = function(){return replacement(match);};
		else
			var _replacement = function(){return replacement;};
			
		while (source.length > 0) {
			if (match = source.match(pattern)) {
				result += source.slice(0, match.index);
				result += (function(value){ return value == null ? '' : String(value); })(_replacement());
				source  = source.slice(match.index + match[0].length);
			} else {
				result += source;
				source = '';
			}
		}
		return result;
	},
	
	page:function(ele,direction) // -> false
	{
		// Find the element of the id ele
		// replace its "page#" classname
		// by replacing the # with the direction if the direction is a number, or
		// by adding  1 to the # if the direction is NOT a number and is true or
		// by adding -1 to the # if the direction is NOT a number and is false
		
		var ele=document.getElementById(ele);
		if(!ele) return false;
		
		if (ele.className.match(subtlePager.className)) {
			
			var page_count = parseInt(subtlePager.$gsub(ele.className,  RegExp('.*'+subtlePager.classNames+'(\\d+).*'), function(r){return r[1];}), 10)
			    || 3; // Set a default if the element doesn't have a pages# class
			
			if (direction && typeof direction == "number")
				var _replacement = subtlePager.className+direction;
			else
				var _replacement = function(r){
					var pnum = (direction? 1 : -1) + parseInt(r[1], 10);
					if( pnum < 1) pnum = page_count;
					if( pnum > page_count) pnum = 1;
					return subtlePager.className + pnum;
				};
			
			ele.className = subtlePager.$gsub(ele.className, RegExp(subtlePager.className+'(\\d+)'), _replacement);
			
		}else{
			ele.className += ' ' + (subtlePager.className+(direction? 1 : 0));
		};
		return false;
	}
};
