var num = 0;
var flag1 = false;
var flag2 = false;
var goodsType;
var goodsColor;
//点击选择尺码的事件
$(".ss1").click(function() {
	flag1 = true;
	goodsType = $(this).html();
	$(this).parents(".size").find(".ss1").css("border", '2px solid rgb(248, 248, 248)');
	$(this).css("border", '2px solid rgb(244,107,43)');
});
//点击选择颜色的事件
$(".ss2").click(function() {
		flag2 = true;
		goodsColor = $(this).html();
		$(this).parents(".size").find(".ss2").css("border", '2px solid rgb(248, 248, 248)');
		$(this).css("border", '2px solid rgb(244,107,43)');

	})

//商品数量加减的js
//获取商品框中现有的数量
var goods = $("#goodsNum").html();
$("#jian").click(function() {
	goods--;
	if(goods <= 0) {
		goods = 0;
	}
	$("#goodsNum").html(goods);
})
$("#add").click(function() {
		goods++;
		$("#goodsNum").html(goods);
	})

//加入购物车提醒
var goodsArr = [];
$("#s-go").click(function() {
	if(flag1 && flag2) {
		num++;
		$("#s-hidden").css("display", 'block');
		$("#s-up").css("display", 'block');
		$("#goodsNumber").html(num)
		$("#goodsNumber").css("display", "block");
		$("#goodsNumber").animate({
				left: 40,
				top: -10
		},1000);
		var goodsNum = $("#goodsNum").html();
		var goodsPrice = $("#goodsPrice").html();
		//本地存储数据
		var obj = {
			goodsType: goodsType,
			goodsColor: goodsColor,
			goodsNum:goodsNum,
			goodsPrice:goodsPrice
		}
		if(localStorage.getItem("goods") === null) {
			goodsArr.push(obj);
			var str = JSON.stringify(goodsArr);
			localStorage.setItem("goods", str);
		}else {
			var str = localStorage.getItem("goods");
			var strObj = JSON.parse(str);
			var flag = true;
			for(var i=0;i<strObj.length;i++){
				if(obj.goodsType === strObj[i].goodsType && obj.goodsColor === strObj[i].goodsColor){
					strObj[i].goodsNum = parseInt(strObj[i].goodsNum)+parseInt(obj.goodsNum);
					var str1 = JSON.stringify(strObj);
					localStorage.setItem("goods", str1);
					flag=false;
				}
			}
			if(flag){
				strObj.push(obj);
				console.log(strObj)
				var str1 = JSON.stringify(strObj);
				localStorage.setItem("goods", str1);
			}
		}
	} else {
		alert("请选择适合您的号码和您喜欢的颜色")
	}
})

$("#buyNow").on("click", function() {
	if(flag1 && flag2){
		var goodsNum = $("#goodsNum").html();
		var goodsPrice = $("#goodsPrice").html();
		//本地存储数据
		var obj = {
			goodsType: goodsType,
			goodsColor: goodsColor,
			goodsNum:goodsNum,
			goodsPrice:goodsPrice
		}
		if(localStorage.getItem("goods") === null) {
			goodsArr.push(obj);
			var str = JSON.stringify(goodsArr);
			localStorage.setItem("goods", str);
		} else {
			var str = localStorage.getItem("goods");
			var strObj = JSON.parse(str);
			var flag = true;
			for(var i=0;i<strObj.length;i++){
				if(obj.goodsType === strObj[i].goodsType && obj.goodsColor === strObj[i].goodsColor){
					strObj[i].goodsNum = parseInt(strObj[i].goodsNum)+parseInt(obj.goodsNum);
					var str1 = JSON.stringify(strObj);
					localStorage.setItem("goods", str1);
					flag=false;
				}
			}
			if(flag){
				strObj.push(obj);
				console.log(strObj)
				var str1 = JSON.stringify(strObj);
				localStorage.setItem("goods", str1);
			}
		}
		window.location.href = "shopping-cart.html";
	}else{
		alert("请选择适合您的号码和您喜欢的颜色");
	}
})
//跳出隐藏的页面 可选择是否继续购物或者进入购物车事件
$('#s-goon').click(function() {
	$("#s-hidden").css("display", 'none');
	$("#s-up").css("display", 'none');
})

//尺码颜色选择
//for(var i = 0; i < $(".size span").length; i++) {
//	$(".size  span").eq(i).click(function() {
//		//console.log($(this).index(".ss2")) 
//		$(this).css("border", '2px solid rgb(244,107,43)');
//		$(this).siblings().css("border", '2px solid rgb(248, 248, 248)');
//	})
//}

//留言板
$(document).ready(function() {
	$("#inp3").click(function() {
		//创建大的div
		var parentdiv = $("<div></div>");
		parentdiv.attr("id", "parent");
		parentdiv.animate({
			width: "100%",
			//							width: "500px",
		});
		//创建子div
		var childdiv1 = $("<div></div>");
		childdiv1.css({
			width: "80%",
			height: "30px",
			marginLeft: "5%",
			marginBottom: "3%",
			lineHeight: "30px",
			color: "white",
			background: "pink",
		})
		childdiv1.html($("#inp1").val() + ":");
		//创建第二个子div
		var childdiv2 = $("<div></div>");
		childdiv2.css({
			width: "95%",
			marginLeft: "5%",
			lineHeight: "25px",
			color: "white",
		})
		childdiv2.html($("#inp2").val());
		//创建删除div
		var childdiv3 = $("<div></div>");
		childdiv3.attr("id", "child")
		childdiv3.css({
			width: "36px",
			marginLeft: "90%",
			lineHeight: "18px",
			textAlign: "center",
			color: "white",
			background: "pink",
			cursor: "pointer",
		});
		childdiv3.html("删除");
		childdiv1.appendTo(parentdiv);
		childdiv2.appendTo(parentdiv);
		childdiv3.appendTo(parentdiv);
		parentdiv.appendTo("#wrap");
		//parentdiv.insertAfter("#wrap")
		//判断是否需要创建div
		if($("#inp1").val().length == 0 || $("#inp2").val().length == 0) {
			alert("请输入内容");
			parentdiv.remove();
		}
		//					         //判断qq号是否正确
		//					     var reg = /^[1-9]\d{4,12}$/g
		//					     if(reg.test($("#inp2").val())){
		//					     	 childdiv2.html($("#inp2").val());
		//					     }else{
		//					     	alert("请输入正确的QQ	号");
		//					     	parentdiv.remove();
		//					       }
		$("#inp1").val("");
		$("#inp2").val("");
		//删除按钮
		$(childdiv3).click(function() {
			$(parentdiv).remove();
		})
	})
})

//详情,评价,成交记录
$("#s-title li").click(function() {
	$(this).parents("#s-title").find("li").css({
		borderTop: 'none',
		background: "rgb(248,248,248)",
		borderBottom: '1px solid rgb(218, 218, 218)'
	})
	$(this).css({
		borderTop: "2px solid rgb(0, 140, 221)",
		background: "rgb(255,255,255)",
		borderBottom: 'none'
	})
	$(this).parents("section").find('.m-content').css("display", "none");
	$(".m-content").eq($(this).index()).css("display", "block");
})


//轮播图放大镜部分代码
var index=0;
var index1 = 0;
smallImgW = $(".smallImg").width();
//左点击事件
$("#prev").on("click",function() {
	index--;
	if(index<0){
		index = $(".bigImg").length-1;
		$("#smallImgContent").css({
			left:0
		})
	}
	public();
	$("#smallImgContent").stop().animate({
		left:-smallImgW*index
	})
})
//右点击事件
$("#next").on("click",function() {
	index++;
	if(index>$(".bigImg").length-1){
		index = 0;
	}
	public();
	$("#smallImgContent").stop().animate({
		left:-smallImgW*index
	})
})


function public () {
	$(".bigImg").eq(index).fadeIn().siblings().fadeOut();
	$("#magnify img").eq(index).fadeIn().siblings().fadeOut();
}
//放大镜
$("#visibleBigImg").on("mouseenter",function() {
	$("#slider").css("display","block");
	$("#magnify").css("display","block");
});
$("#visibleBigImg").on("mouseleave",function() {
	$("#slider").css("display","none");
	$("#magnify").css("display","none");
});
var small = document.getElementById("visibleBigImg");
var slider = document.getElementById("slider");
var big = document.getElementById("magnify");
var bigImg = document.getElementsByClassName("magnifyImg1");


$("#visibleBigImg").on("mousemove",function(e) {
				   var even  = e || event;
         		   var x = even.clientX -slider.offsetWidth - small.offsetLeft-300;
         		   var y =even.clientY - slider.offsetHeight - small.offsetTop-200;
//       		   水平方向最大值
         		   var maxX = small.clientWidth - slider.clientWidth;
         		   var maxY = small.clientHeight - slider.clientHeight;
//       		   console.log(maxY)
//       		   超出左侧拉回
         		   if(x<0){
         		   	  x=0;
         		   }
         		   //超出右侧拉回
         		   if(x>maxX){
         		       x=maxX;
         		   }
         		   //顶部超出拉回
         		   if(y<0){
         		   	y=0;
         		   }
         		   //底部超出拉回
         		   if(y>maxY){
         		   	y = maxY;
         		   }
         		  slider.style.left = x + "px";
         		  slider.style.top = y + "px";
         		  big.scrollLeft = x/maxX * (bigImg[index].offsetWidth-big.clientWidth);
         		  big.scrollTop = y/maxY *(bigImg[index].offsetHeight-big.clientHeight);
})