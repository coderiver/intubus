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
	console.log($('body').html());
});

