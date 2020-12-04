// $(document).on("click", ".footer-link-wrapper h3", function(){
//     $(this).next('ul').slideToggle(function(){
//             (addClass('active'))
//         });
//     $(this).toggleClass("active");
// })


// // $(window).on('resize', function(event){
// // if ($(window).width() < 768){
// $(".footer-link-wrapper h3").click(function(){
//     $(this).next('ul').toggleClass("active")
//     $(this).toggleClass("active");
// })
// // } 
// // else {
// //     this.location.reload(false);
// // }
// // });


$(".footer-link-wrapper h3").click(function(){
    $(this).next('ul').toggleClass("active")
    $(this).toggleClass("active");
})



// $( document ).ready(function() {
// 	if ($(window).width() <= 768){	
// 		$('.footer-link-wrapper').addClass("someClass");
// 	}else{
// 		$('.footer-link-wrapper').removeClass("someClass");
// 	}
// 	$(window).on('resize', function(event){
// 		if ($(window).width() <= 768){	
// 			$('.footer-links-wrapper').addClass("someClass");
// 		}else{
// 			$('.footer-link-wrapper').removeClass("someClass");
// 			$('.footer-link-wrapper ul').show();
// 		}	
//     });

// 	// Footer collapse functionality 
// 	$(document).on("click", ".someClass h3", function(){
// 		$(this).next('ul').slideToggle();
// 		$(this).toggleClass("active");
//     });

// 	// Search bar 
// 	// $('.search-link').click(function(event){
// 	// 	event.preventDefault();
// 	// 	$(".navbar-collapse.collapse").removeClass("show");
// 	// 	$(".searchbox").slideToggle();
// 	// });

// });













