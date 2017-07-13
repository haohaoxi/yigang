var mySwiper = new Swiper(".swiper-container",{
				//控制轮播图的滚动方向
				direction:"horizontal",
				//loop 控制是否循环播放 true循环 false不循环
				loop:true,
				//是否需要分页器
				pagination:".swiper-pagination",
				//是否需要前进后退按钮
//				nextButton:".swiper-button-next",
//				prevButton:".swiper-button-prev",
				//是否开启自动播放(毫秒)
				autoplay:2000,
				//滚动条
//				scrollbar:".swiper-scrollbar",
				//切换控制效果
				//effect(cube,fade,overflow,flip)
//				effect:"flip"
//				effect:"cube"
				effect:"overflow",
				

			});
			

//弹出框
for(var i = 0; i < $(".s_bottom p").length; i++) {
	$(".s_bottom p:nth-child(3)").eq(i).click(function() {
		$("#s-hidden").css("display", 'block');
		$("#s-up").css("display", 'block');
	})
	$('#return').click(function(){
		$("#s-hidden").css("display", 'none');
		$("#s-up").css("display", 'none');
	})
	$('#s-save').click(function(){
		$("#s-hidden").css("display", 'none');
		$("#s-up").css("display", 'none');
	})
}
