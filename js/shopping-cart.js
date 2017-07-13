//获取对应的颜色和尺码和价钱以及数量值
var str = localStorage.getItem("goods")
var strObj = JSON.parse(str)
//根据本地存储的数据的条数,自动创建对应的商品
for(var i = 0; i < strObj.length; i++) {
		var li = "<li class='shopsGoodsNum'><div class='liLeft'><span class='bigCheck'><img src='img/16.png' class='duihao'/></span><span><img src='img/18.jpg'/></span><span>&lt;&lt;海澜之家&gt;&gt;男士衬衫</span></div><div class='liRight'><p><span>尺寸:"+strObj[i].goodsType+"</span><br><span>颜色:"+strObj[i].goodsColor+"</span></p><p><span>¥</span><span class='onePrice'>"+strObj[i].goodsPrice+"</span></p><p><span class='jian'>-</span><span class='num'>"+strObj[i].goodsNum+"</span><span class='add'>+</span></p><p><span>¥</span><span class='MorePrice'>"+strObj[i].goodsPrice*strObj[i].goodsNum+"</span></p><p><a href='#' class='liDelete'>删除</a></p></div></li>"
		$(".shopsGoodsContent").prepend(li);
}
//删除事件
$(".shopsGoodsContent").on("click",".liDelete",function() {
		//如果商品勾选时进行的操作
		if($(this).parents(".shopsGoodsNum").find(".duihao").css("display")=="block"){
		var liPrice = $(this).parents(".shopsGoodsNum").find(".MorePrice").html();
		total -= liPrice;
		$(this).parents(".shopsGoods").find(".total").html("¥" + total);
		//获取本地存储的数据 删除当前的数据,并重新把其他数据存入本地
		var str = localStorage.getItem("goods");
		var arr1 = JSON.parse(str);
		arr1.splice($(".shopsGoodsContent").find("li").length-$(this).parents("li").index()-1,1);
		var str1 = JSON.stringify(arr1);
		localStorage.setItem("goods",str1)
		$(this).parents(".shopsGoodsNum").remove();
		
	}else{
		var str = localStorage.getItem("goods");
		var arr1 = JSON.parse(str);
		arr1.splice($(".shopsGoodsContent").find("li").length-$(this).parents("li").index()-1,1);
		var str1 = JSON.stringify(arr1);
		localStorage.setItem("goods",str1)
		$(this).parents(".shopsGoodsNum").remove();
	}	
})
//数量的加减以及价钱减的操作
$(".shopsGoodsContent").on("click",".jian",function() {
	var num = $(this).siblings(".num").html();
	num--;
	if(num <= 0) {
		num = 0;
		var str = localStorage.getItem("goods");
		var arr1 = JSON.parse(str);
		arr1.splice($(".shopsGoodsContent").find("li").length-$(this).parents("li").index()-1,1);
		var str1 = JSON.stringify(arr1);
		localStorage.setItem("goods",str1)
		$(this).parents(".shopsGoodsNum").remove();
	}
	$(this).siblings(".num").html(num);
	//所在商品行的金额的减少
	var onePrice1 = $(this).parents(".liRight").find(".onePrice").html() * num;
	$(this).parents(".liRight").find(".MorePrice").html(onePrice1);
		var str = localStorage.getItem("goods");
		var arr1 = JSON.parse(str);
		arr1[$(".shopsGoodsContent").find("li").length-$(this).parents("li").index()-1].goodsNum = num;
		var str1 = JSON.stringify(arr1);
		localStorage.setItem("goods",str1)	
})
//数量的加减以及价钱加的操作
$(".shopsGoodsContent").on("click",".add",function() {
	var num = $(this).siblings(".num").html();
	num++;
	$(this).siblings(".num").html(num);
	//所在商品行的金额的减少
	var onePrice1 = $(this).parents(".liRight").find(".onePrice").html() * num;
	$(this).parents(".liRight").find(".MorePrice").html(onePrice1)
		var str = localStorage.getItem("goods");
		var arr1 = JSON.parse(str);
		arr1[$(".shopsGoodsContent").find("li").length-$(this).parents("li").index()-1].goodsNum = num;
		var str1 = JSON.stringify(arr1);
		localStorage.setItem("goods",str1)
})
//点击获取全部的价钱
var total = 0;
$(".bigCheckActive").click(function() {
	if($(this).find(".duihao").css("display") == "none") {
		for(var i = 0; i < $(this).parents(".shopsGoods").find(".shopsGoodsNum").length; i++) {
		//单行的减操作
		$(this).parents(".shopsGoods").find(".shopsGoodsNum").eq(i).find(".jian").off("click");
		$(this).parents(".shopsGoods").find(".shopsGoodsNum").eq(i).find(".jian").click(function() {
				var num = $(this).siblings(".num").html();
//				num--;
				if(num <= 0) {
					num = 0;
					$(this).parents(".shopsGoodsNum").remove();
					total = 0;
				}
				$(this).siblings(".num").html(num);
				//所在商品行的金额的减少
				var onePrice1 = $(this).parents(".liRight").find(".onePrice").html() * num;
				$(this).parents(".liRight").find(".MorePrice").html(onePrice1)
				total = total - $(this).parents(".liRight").find(".onePrice").html() * 1
				if(total <= 0) {
					total = 0
				}
				$(this).parents(".shopsGoods").find(".total").html("¥" + total);
				$("#totalGoods").html(total);
				localStorage.setItem("total",total)
				//获取总的num;
				var num = $(this).parents(".shopsGoods").find(".shopsGoodsNum").eq(i).find(".num").html();
				var num = $(this).siblings(".num").html();
		})
		//单行的加操作
		$(this).parents(".shopsGoods").find(".shopsGoodsNum").eq(i).find(".add").off("click");
		$(this).parents(".shopsGoods").find(".shopsGoodsNum").eq(i).find(".add").click(function() {
			var num = $(this).siblings(".num").html();
//			num++;
			$(this).siblings(".num").html(num);
			//所在商品行的金额的减少
			var onePrice1 = $(this).parents(".liRight").find(".onePrice").html() * num;
			$(this).parents(".liRight").find(".MorePrice").html(onePrice1)
			total = total + $(this).parents(".liRight").find(".onePrice").html() * 1
			$(this).parents(".shopsGoods").find(".total").html("¥" + total);
			$("#totalGoods").html(total);
			localStorage.setItem("total",total)
			var num = $(this).siblings(".num").html();
				console.log(num)
		})

		//计算钱的事件
			if($(this).parents(".shopsGoods").find(".shopsGoodsNum").eq(i).css("display") == "block") {
				if($(this).parents(".shopsGoods").find(".shopsGoodsNum").eq(i).find(".bigCheck").find(".duihao").css("display") == "none") {
					//获取每个li商品行的商品数量
					var goodsNumber = $(this).parents(".shopsGoods").find(".shopsGoodsNum").eq(i).find(".num").html();
					//获取每个里商品行的单价
					var onePrice = $(this).parents(".shopsGoods").find(".shopsGoodsNum").eq(i).find(".onePrice").html();
					//每行的金额
					var linePrice = goodsNumber * onePrice;
					//总价钱
					total += linePrice;
					//console.log(total)
					$(this).parents(".shopsGoods").find(".total").html("¥" + total)
				}
				
			}
		}
		$(this).find(".duihao").css("display", "block");
		$(this).css("border", "1px solid #FF6D26");
		$(this).parents(".shopsGoods").find(".shopsGoodsNum").find(".duihao").css("display", "block");
		$(this).parents(".shopsGoods").find(".bigCheck").css("border", "1px solid #FF6D26");
		console.log($(this).parents(".shopsGoods").find(".shopsGoodsNum").length)

	} else {
		total = 0;
		$(this).parents(".shopsGoods").find(".total").html(total);
		//对号消失
		$(this).find(".duihao").css("display", "none");
		$(this).parents(".shopsGoods").find(".shopsGoodsNum").find(".duihao").css("display", "none");
		//边框颜色回复
		$(this).css("border", "1px solid #D3D3D3");
		$(this).parents(".shopsGoods").find(".bigCheck").css("border", "1px solid #D3D3D3");

	}
	$("#totalGoods").html(total);
	localStorage.setItem("total",total)
})

//点击单独商品行触发的事件
$(".bigCheck").click(function() {
	//单行的减操作
	$(this).parents(".shopsGoodsNum").find(".jian").off("click");
	$(this).parents(".shopsGoodsNum").find(".jian").click(function() {
			var num = $(this).siblings(".num").html();
			if(num <= 0) {
				num = 0;
			}
			$(this).siblings(".num").html(num);
			//所在商品行的金额的减少
			var onePrice1 = $(this).parents(".liRight").find(".onePrice").html() * num;
			$(this).parents(".liRight").find(".MorePrice").html(onePrice1)
			total = total - $(this).parents(".liRight").find(".onePrice").html() * 1
			if(total <= 0) {
				total = 0
			}
			$(this).parents(".shopsGoods").find(".total").html("¥" + total);
			$("#totalGoods").html(total);
			localStorage.setItem("total",total)
		})
		//单行的加操作
	$(this).parents(".shopsGoodsNum").find(".add").off("click");
	$(this).parents(".shopsGoodsNum").find(".add").click(function() {
		var num = $(this).siblings(".num").html();
		$(this).siblings(".num").html(num);
		//所在商品行的金额的减少
		var onePrice1 = $(this).parents(".liRight").find(".onePrice").html() * num;
		$(this).parents(".liRight").find(".MorePrice").html(onePrice1)
		total = total + $(this).parents(".liRight").find(".onePrice").html() * 1
		$(this).parents(".shopsGoods").find(".total").html("¥" + total);
		$("#totalGoods").html(total);
		localStorage.setItem("total",total)
	})

	if($(this).find(".duihao").css("display") == "block") {
		//对号消失
		$(this).find(".duihao").css("display", "none");
		$(this).parents(".shopsGoods").find(".bigCheckActive").find(".duihao").css("display", "none");
		//边框恢复原来颜色
		$(this).css("border", "1px solid #D3D3D3");
		$(this).parents(".shopsGoods").find(".bigCheckActive").css("border", "1px solid #D3D3D3");
		//获取每个li商品行的商品数量
		var goodsNumber1 = $(this).parents(".shopsGoodsNum").find(".num").html();
		//获取每个里商品行的单价
		var onePrice1 = $(this).parents(".shopsGoodsNum").find(".onePrice").html();
		//减少的金额
		var reducePrice = goodsNumber1 * onePrice1;
		total = total - reducePrice
		$(this).parents(".shopsGoods").find(".total").html("¥" + total);
		$("#totalGoods").html(total);
		localStorage.setItem("total",total);

	} else {
		$(this).find(".duihao").css("display", "block");
		$(this).css("border", "1px solid #D3D3D3");
		
		var all = "block";
		//如果每行都重新被选中,商店名称的对号被选中事件
		for(var i = 0; i < $(this).parents(".shopsGoods").find(".shopsGoodsNum").length; i++) {
			//只判断显示的li
			if($(this).parents(".shopsGoods").find(".shopsGoodsNum").eq(i).css("display") == "block") {
				if($(this).parents(".shopsGoods").find(".shopsGoodsNum").eq(i).find(".bigCheck").find(".duihao").css("display") == "none") {
					all = "none";
					break;
				}
			}
		}
		$(this).parents(".shopsGoods").find(".bigCheckActive").find(".duihao").css("display", all)

		//获取每个li商品行的商品数量
		var goodsNumber1 = $(this).parents(".shopsGoodsNum").find(".num").html();
		//获取每个里商品行的单价
		var onePrice1 = $(this).parents(".shopsGoodsNum").find(".onePrice").html();
		//减少的金额
		var reducePrice = goodsNumber1 * onePrice1;
		total = total + reducePrice
		$(this).parents(".shopsGoods").find(".total").html("¥" + total);
		$("#totalGoods").html(total);
		localStorage.setItem("total",total);
	}
})

