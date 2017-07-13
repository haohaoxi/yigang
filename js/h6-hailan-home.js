$(document).ready(function() {
	$("td").click(function() {
		$(this).parents("table").find("td").css("background", "#F8F8F8");
		$(this).css("background", "white");
	});
	$(".photodownli1").click(function() {
		$(this).parents("#menwomen").find(".photodownli1").css("borderColor", "#F0F0F0");
		$(this).css("borderColor", "#FDB483");
	});

	//左点击事件
	var index = 0;
	var imgW = $(".a").width();
	var imgX = $(".b").width();
	//	console.log(imgW)
	$("#dayu").on("click", function() {
		//		console.log($(".a").length)
		//      console.log($(".a").index(".a"))
		//		console.log(index)
		//		console.log($(".b").width())
      	index--;
		$("#shopnamekeshi2").stop().animate({
			left: index * imgW
		}, 500, function() {
			if(index < -3) {
				$("#shopnamekeshi2").css({
					left: 0
				})
				index = 0;
// $("#dayu").unbind("click")		
			}
		})
         $("#shopnamekeshi").stop().animate({
					left:index*imgX
				},500,function(){
					if(index < -3) {
           $("#shopnamekeshi2").css({
					left: 0
				})
				index = 0;
			}
		})
				
		//		$("#shopnamekeshi2").css("transform","translateX(-74px)");
		//		$("#shopnamekeshi").css("transform","translateX(-180px)");
	});
	$(".a").click(function() {
		//		$(this).parents("#shopnameleft").find(".b")
		console.log($(this).index(".a"))
		$("#shopnamekeshi").stop().animate({
				left: -$(this).index(".a") * imgX
			}, 500)
			// $(".b").css("display","none");
			// $(".b").eq($(this).index(".a")).css("display","block")
	})
	//右点击事件
		$("#xiaoyu").on("click", function() {
		
      	index--;
		$("#shopnamekeshi2").stop().animate({
			left: index * imgW
		}, 500, function() {
			if(index < -3) {
				$("#shopnamekeshi2").css({
					left: 0
				})
				index = 0;
	
			}
		})
         $("#shopnamekeshi").stop().animate({
					left:index*imgX
				},500,function(){
					if(index < -3) {    	           
				$("#shopnamekeshi2").css({
					left: 0
				})
				index = 0;
			}
		})
				
	});
	$(".a").click(function() {
		//	$(this).parents("#shopnameleft").find(".b")
		console.log($(this).index(".a"))
		$("#shopnamekeshi").stop().animate({
				left: -$(this).index(".a") * imgX
			}, 500)
		
	})
})