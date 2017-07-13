
var str = localStorage.getItem("goods");
var strObj = JSON.parse(str);
for(var i=0;i<strObj.length;i++){
	var li = "<li><img src='img/18.jpg'/><span>海澜之家&gt;&gt;男士衬衫</span><span>尺寸:"+strObj[i].goodsType+"</span><span>颜色:"+strObj[i].goodsColor+"</span><span>¥"+strObj[i].goodsPrice+"</span><span>x"+strObj[i].goodsNum+"</span></li>";
	$(".shopmyorder4").append(li);
}
$(".s-cancle").click(function(){
			localStorage.removeItem("goods");
			$(this).parents(".shopmyorder33").remove();
		})
$(".s-pay").click(function(){
			window.location.href = "order-success.html"
		})


console.log($(".shopmyorder33").length);
function pagingDevice (Number) {
	var num = Math.ceil(Number)
	//每页需要展示的数据的个数
	for(var i=0;i<num;i++){
		var span = "<span>首页</span><span>上一页</span><span>1</span><span>2</span><span>3</span><span>...</span><span>58</span><span>59</span><span>下一页</span><span>共59页,</span><span>到第</span><span></span><span>页</span><span>确定</span><span>共215条</span>";
		$("#h-page").append(span)
	}
}
