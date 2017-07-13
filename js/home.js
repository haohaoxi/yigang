//楼层链接条的滚轮监听
window.onscroll = function() {
	if(document.body.scrollTop>=1020){
		$("#floorLink").slideDown();
	}else if(document.body.scrollTop < 1020){
		$("#floorLink").slideUp();
	}
}

var mySwiper = new Swiper(".swiper-container",{
				//控制轮播图的滚动方向
				direction:"horizontal",
				//loop控制是否循环播放 true 循环 false不循环
				loop:true,
				//是否需要分页器
				pagination:".swiper-pagination",
				//是否需要前进后退按钮
//				nextButton:".swiper-button-next",
//				prevButton:".swiper-button-prev",
				//是否开启自动播放
				autoplay:3000,
				//切换控制效果
				//effect(cube fade,overflow, flip)
				effect:"overflow",
			})


$(".floor").mouseenter(function() {
	$(this).find(".floorTOP li").mouseenter(function() {
		$(this).siblings(".liLine").stop().animate({
			left:$(this).index()*(102+40)+20
		},200)
		$(this).parents(".floor").find(".flcRight").css("display","none");
		$(this).parents(".floor").find(".flcRight").eq($(this).index()).css("display","block");
	})
})

//点击锚点跳转的动画效果
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 500);
    return false;
});

