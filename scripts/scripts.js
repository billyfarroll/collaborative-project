$(document).ready(function() {
    $(document).scroll(function(e) {
        var scrollpostion = $("body").scrollTop();
        console.log(scrollpostion);
        //The code above makes the website a parallax scroll
        
        if(scrollpostion > 1900) {
            $(".the-video")[0].play() 
        }
        
	});

    $("#name").click(function(){
        $(".the-video")[0].play() 
    });

	$(document).keydown(function(key) {
		key.preventDefault()
		switch(parseInt(key.which,10)) {
			case 37:
				console.log("LEFT arrow hit");
				$('.avatar').animate({left: "-=20px"}, 30);
				break;
			case 38:
				console.log("UP arrow hit");
			    $('.avatar').animate({top: "-=20px"},  30);
				// Put our code here
				break;
			case 39:
				console.log("RIGHT arrow hit");
			    $('.avatar').animate({left: "+=20px"},  30);
				// Put our code here
				break;
			case 40:
				console.log("DOWN arrow hit");
			    $('.avatar').animate({top: "+=20px"}, 30);
				// Put our code here
				break;
		}
	});

});


         $( document ).click(function() {
  $( "body" ).toggle("explode");
   
});

        
      
