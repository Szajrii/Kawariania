$.when( $.ready ).then(function() {
  var navbar = document.getElementById('navbar');
  var navbarLeft = document.getElementById('a-left');
  var navbarRight = document.getElementsByClassName('a-right');
  var sticky =  navbar.offsetTop;
  var screenWidth = screen.width;
  var myOffset = 500;
  var myOffset2 = 500;


//funkcja tworząca navbar jako fixed do góry ekranu
  function scroll() {
  	if(window.pageYOffset >= 250 ){
  		
        
  		navbar.classList.add("sticky")
  		navbarLeft.classList.add("sticky-color")
  		navbarRight[0].classList.add("sticky-color")
  		navbarRight[1].classList.add("sticky-color")
  		navbarRight[2].classList.add("sticky-color")
  	}else{
  		navbar.classList.remove("sticky");
  		navbarLeft.classList.remove("sticky-color");
  		navbarRight[0].classList.remove("sticky-color");
  		navbarRight[1].classList.remove("sticky-color");
  		navbarRight[2].classList.remove("sticky-color");
  	}
//obsługa animacji do pojawiających się elementów
  	if(window.pageYOffset >= document.getElementById('main').offsetTop - 500){
  		$("#animation-1").removeClass("transform-0").addClass("transform-100")
  	}

  	if(window.pageYOffset >= document.getElementById('about').offsetTop - myOffset){
  		$(".opacity-0").removeClass("opacity-0").addClass("opacity-100")
  	}

  	if(window.pageYOffset >= document.getElementById('about').offsetTop - myOffset){
  		$(".transform-bot-0").removeClass("transform-bot-0").addClass("transform-bot-100")
  	}
  	if(window.pageYOffset >= document.getElementById('contact').offsetTop - myOffset2){
  		$("#contact-us").removeClass("transform-0").addClass("transform-100")
  	}
  }
  window.onscroll = function () { scroll () }

  //animacje scrollowania dla navbar
    $(navbarRight[0]).click(function(){
	  	$([document.documentElement, document.body]).animate({
	        scrollTop: document.getElementById('main').offsetTop
    }, 1000);  })

    $(navbarRight[1]).click(function(){
	  	$([document.documentElement, document.body]).animate({
	        scrollTop: document.getElementById('about').offsetTop
    }, 1000);  })

    $(navbarRight[2]).click(function(){
	  	$([document.documentElement, document.body]).animate({
	        scrollTop: document.getElementById('contact').offsetTop
    }, 1000);  })

    $(navbarLeft).click(function(){
	  	$([document.documentElement, document.body]).animate({
	        scrollTop: 0
    }, 1000);  })

     $(".circle").click(function(){
	  	$([document.documentElement, document.body]).animate({
	        scrollTop: 850
    }, 1000);  })


    //opóżnienie pokazania treści na stronie

    $(".hidden").hide(0).show(800);

    //większy zasięg dla scrolla przy urządzeniach mobilnych
    if(screenWidth <= 1500){
    	myOffset = 700;
    	myOffset2 = 1400;
    }

});