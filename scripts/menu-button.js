$(document).ready(function(){
    $(".menu-button-responsive").click(function(){
        $(".responsive-menu").slideToggle();
        $(".bar1").toggleClass("active");
 		$(".bar2").toggleClass("active");
  		$(".bar3").toggleClass("active");
    });
});