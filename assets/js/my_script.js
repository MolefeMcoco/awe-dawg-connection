function windowWidth(){
        var width = window.innerWidth;
        return width;
    }

    var windowSize = windowWidth();

$(document).ready(function(){
	//loading icon
	$(window).load(function () {
	$(".loaded").fadeOut();
	$(".preloader").delay(1000).fadeOut("slow");
	});
    if(windowSize > 767){
	//hide to reveal with scroll effect
	$(".para").hide();
	$(".bottom h2,.bottom li").hide();
	$(".services_main li").hide();
	$("#pricelist h3,#pricelist p, #pricelist input,#pricelist textarea").hide();
    }else{
        return false;
    }

    $("#header #logo").removeClass("col-md-3");
    $("#header #logo").addClass("col-sm-2");
});

jQuery(window).scroll(function () {
	//navbar scrolling effect
    if (jQuery(window).scrollTop() > 180) {
        $(".navbar").addClass("navbar-fixed-top");
    } else {
        $(".navbar").removeClass("navbar-fixed-top");
    };
    if (windowSize > 767) {
    //paragraph fadeIn scrolling effect
    if (jQuery(window).scrollTop() > 680) {
        $(".para").each(function(index){
			$(this).delay(500*index).fadeIn(700);
		});
    } else {
        
    };

    //paragraph fadeIn scrolling effect
    if (jQuery(window).scrollTop() > 420) {
		$("#networking_image").animate({right:0},1500);
    } else {
        
    };
    if (jQuery(window).scrollTop() > 720) {
        $(".software_list li").each(function(index){
			$(this).delay(500*index).fadeIn(700);
		});
		$("#software_image").animate({left:0},1500);
    } else {
        
    };

    if (jQuery(window).scrollTop() > 1100) {
        $(".digital_list li").each(function(index){
			$(this).delay(250*index).fadeIn(700);
		});
		$("#digital_image").animate({right:0},1500);
    } else {
        
    };

    if (jQuery(window).scrollTop() > 1500) {
        $(".technical_list li").each(function(index){
			$(this).delay(250*index).fadeIn(700);
		});
		$("#technical_image").animate({left:0},1500);
    } else {
        
    };

    if (jQuery(window).scrollTop() > 2000) {
        $("#pricelist,#pricelist form div").children().each(function(index){
        	$(this).delay(250*index).fadeIn(700);
        })
    } else {
        
    };

    //slide to image scrolling effect
    if (jQuery(window).scrollTop() > 1780) {
        $(".right_side").animate({left:0},1000);
        $(".bottom h2").fadeIn(1000);
        $(".bottom li").fadeIn(2000);
    } else {
        
    };

    }

});    

 //pricelist form validation

 function validateForm(){
 	var name = document.getElementById('name');
 	var email = document.getElementById('email');
 	var message = document.getElementById('message');

 	if (name.value === null || name.value === "") {
 		name.focus();
 		name.style.border = "solid 3px red";
 		$(window).ready(function(){
 			$(".required1 p").remove();
 			$(".required1").append("<p class='color_red'><i class='fa fa-warning'></i> Name is required</p>")
 		});
 		return false;
 	}else if (name.value.length < 3) {
 		name.focus();
 		name.style.border = "solid 3px red";
 		$(window).ready(function(){
 			$(".required1 p").remove();
 			$(".required1").append("<p class='color_red'><i class='fa fa-warning'></i> Min 3 characters is required</p>")
 		});
 		return false;
 	}else{
 		$(window).ready(function(){
 			$(".required1 p").remove();
 		});
 		name.style.border = "solid 3px green";
 	}

 	if (email.value === null || email.value === "") {
 		email.focus();
 		email.style.border = "solid 3px red";
 		$(window).ready(function(){
 			$(".required2 p").remove();
 			$(".required2").append("<p class='color_red'><i class='fa fa-warning'></i> Email is required</p>")
 		});
 		return false;
 	}else{
 		$(window).ready(function(){
 			$(".required2 p").remove();
 		});
 		email.focus();
 		email.style.border = "solid 3px green";
 	}

 	if (message.value === null || message.value === "") {
 		message.focus();
 		message.style.border = "solid 3px red";
 		$(window).ready(function(){
 			$(".required3 p").remove();
 			$(".required3").append("<p class='color_red'><i class='fa fa-warning'></i> Messsage is required</p>")
 		});
 		return false;
 	}else if (message.value.length < 10) {
 		message.focus();
 		message.style.border = "solid 3px red";
 		$(window).ready(function(){
 			$(".required3 p").remove();
 			$(".required3").append("<p class='color_red'><i class='fa fa-warning'></i> Min 10 characters is required</p>")
 		});
 		return false;
 	}else{
 		$(window).ready(function(){
 			$(".required3 p").remove();
 		});
 		message.style.border = "solid 3px green";
 	}
 }
