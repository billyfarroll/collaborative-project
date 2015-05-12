$(document).ready(function() {
    $document.scroll(function(e) {
        var scrollpostion = $("body").scrollTop();
        console.log(scrollpostion);
        //The code above makes the website a parallax scroll
        
        $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				$('img').animate({left: "+=10px"}, 'fast');
				break;
			// Up Arrow Pressed
			case 38:
			    $('img').animate({top: "-=10px"}, 'fast');
				// Put our code here
				break;
			// Right Arrow Pressed
			case 39:
			    $('img').animate({top: "+=10px"}, 'fast');
				// Put our code here
				break;
			// Down Arrow Pressed
			case 40:
			    $('img').animate({right: "-=10px"}, 'fast');
				// Put our code here
				break;
		}
	});
        
});
    
    
    
    
