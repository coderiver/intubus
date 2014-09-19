head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });
$('.menu__item').on('click',function(e){
    e.preventDefault();
    $(this).parent().siblings().children('.menu__item').removeClass('show').next().slideUp();
    $(this).toggleClass('show').next().show();
});
$('.menu-i').hover(function() {
	/* Stuff to do when the mouse enters the element */
}, function() {
	$(this).find('.submenu').hide("fast");
});
///menu-mob
$('.mob__item span').on('click',function(e){
    e.preventDefault();
    $(this).parent().siblings().children('.mob__item span').removeClass('show').next().slideUp();
    $(this).toggleClass('show').next().slideToggle();
});
///
	console.log($('body').html());
});


$(document).ready(function(){
	$(".open").click(function(){
	$(".bb").slideToggle("normal"); return false;
	});
});
$(function() {
 var div = $(".bb").on("bb", function(e) {
  div.slideDown() ;
  e.stopPropagation() ;
 }) ;
 $(document).on("click", ".content", function() {
  div.slideUp() ;
 }) ;
}) ;

$(document).ready(function() {
	$(".open").click(function() {
		$(".open").toggleClass('act');
	});
});