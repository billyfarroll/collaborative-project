$(document).ready(function() {
    $(document).scroll(function(e) {
        var scrollpostion = $("body").scrollTop();
        //console.log(scrollpostion);
        //The code above makes the website a parallax scroll
	});


	$(document).keydown(function(key) {
		key.preventDefault()
		switch(parseInt(key.which,10)) {
			case 37:
				console.log("LEFT arrow hit");
				$('img').animate({left: "-=10px"}, 'fast');
				break;
			case 38:
				console.log("UP arrow hit");
			    $('img').animate({top: "-=10px"}, 'fast');
				// Put our code here
				break;
			case 39:
				console.log("RIGHT arrow hit");
			    $('img').animate({left: "+=10px"}, 'fast');
				// Put our code here
				break;
			case 40:
				console.log("DOWN arrow hit");
			    $('img').animate({top: "+=10px"}, 'fast');
				// Put our code here
				break;
		}
	});

});