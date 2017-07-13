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

console.log($("#sectLeft li").length)
$("#sectLeft>ul>li").mouseenter(function() {
	$(this).parents("#sectLeft").find("li").css({
		background:"#F2F2F2",
		color:"#000"
	});
	$(this).css({
		background:"#008CDD",
		color:"#fff"
	});
	$(this).parents("#sectLeft").find(".sectLeftContent").css("display","none");
	$(".sectLeftContent").eq($(this).index()).css("display","block");
})
$("#sectLeft").mouseleave(function() {
	$(this).find(".sectLeftContent").css("display","none")
})