//var str = localStorage.getItem("adress");
//var strObj = JSON.parse(str);
//console.log(strObj.length);

$(".useNewAddress").click(function() {
	$("#cover").css("display","block");
	$("#alert").css("display","block");
	
})
$(".alert-back").click(function() {
	$("#cover").css("display","none");
	$("#alert").css("display","none");

});
//点击使用新地址触发的事件
//创建一个数组用于储存本地数据
var newArr = [];
$(".alert-save").click(function() {
	//获取收货人姓名
	var username = $(this).parents("#alert").find(".noadd-name").val();
	//获取所在地区省份,市和区县
	var prov =$(this).parents("#alert").find(".prov").val();
	var city =$(this).parents("#alert").find(".city").val();
	var prefecture = $(this).parents("#alert").find(".dist").val();
	//获取详细地址
	var minuteAdress = $(this).parents("#alert").find(".noadd-address").val();
	//获取联系电话
	var Linkphone = $(this).parents("#alert").find(".tel").val();
	//获取固定电话
	var areaTel = $(this).parents("#alert").find(".areaTel").val();
	var lineTel = $(this).parents("#alert").find(".lineTel").val();
	var fixphone = areaTel+lineTel;
	//本地存储数据
	var obj = {
		username:username,
		prov:prov,
		city:city,
		prefecture:prefecture,
		minuteAdress:minuteAdress,
		Linkphone:Linkphone,
		fixphone:fixphone
	}
	//本地存储数据
	if(localStorage.getItem("adress")==null){
		newArr.push(obj);
		var str = JSON.stringify(newArr);
		localStorage.setItem("adress",str)
	}else{
		var str = localStorage.getItem("adress");
		var strObj = JSON.parse(str);
		strObj.push(obj);
		var str1 = JSON.stringify(strObj);
		localStorage.setItem("adress",str1);
	}
	$(".address").css("display","block");
	$(".addressActive").css("display","none");
	$("#cover").css("display","none");
	$("#alert").css("display","none");
	var li = "<li class='addressItems'><div><input type='radio' id='radio2' name='radios' class='radio'/><label for='radio2'></label></div><div>"+username+prov+city+prefecture+minuteAdress+"电话"+Linkphone+fixphone+"</div><div>默认地址</div><div><a href='###'>修改</a><a href='###'>删除</a></div><div><a href='###'>设为默认地址</a></div></li>";
	$(".addressContent").append(li);
})

//点击确认并设为默认地址触发的事件
$(".noadd-btn").click(function() {
	//获取收货人姓名
	var username = $(this).parents(".addressActive").find(".noadd-name").val();
	//获取所在地区省份,市和区县
	var prov =$(this).parents(".addressActive").find(".prov").val();
	var city =$(this).parents(".addressActive").find(".city").val();
	var prefecture = $(this).parents(".addressActive").find(".dist").val();
	//获取详细地址
	var minuteAdress = $(this).parents(".addressActive").find(".noadd-address").val();
	//获取联系电话
	var Linkphone = $(this).parents(".addressActive").find(".tel").val();
	//获取固定电话
	var areaTel = $(this).parents(".addressActive").find(".areaTel").val();
	var lineTel = $(this).parents(".addressActive").find(".lineTel").val();
	var fixphone = areaTel+lineTel;
	var obj = {
		username:username,
		prov:prov,
		city:city,
		prefecture:prefecture,
		minuteAdress:minuteAdress,
		Linkphone:Linkphone,
		fixphone:fixphone
	}
	//本地存储数据
	if(localStorage.getItem("adress")==null){
		newArr.push(obj);
		var str = JSON.stringify(newArr);
		localStorage.setItem("adress",str)
	}else{
		var str = localStorage.getItem("adress");
		var strObj = JSON.parse(str);
		strObj.push(obj);
		var str1 = JSON.stringify(strObj);
		localStorage.setItem("adress",str1);
	}
	
	
	$(".address").css("display","block");
	$(".addressActive").css("display","none");
	$("#cover").css("display","none");
	$("#alert").css("display","none");
	var li = "<li class='addressItems'><div><input type='radio' id='radio2' name='radios' class='radio'/><label for='radio2'></label></div><div>"+username+prov+city+prefecture+minuteAdress+"电话"+Linkphone+fixphone+"</div><div>默认地址</div><div><a href='###'>修改</a><a href='###'>删除</a></div><div><a href='###'>设为默认地址</a></div>	</li>";
	$(".addressContent").append(li);
})



//获取对应尺码的数量值
//var goodsNum = localStorage.getItem("goodsNum");
////获取对应的颜色和尺码
var str = localStorage.getItem("goods")
var strObj = JSON.parse(str)
for(var i = 0; i < strObj.length; i++) {
		var li = "<li class='shopCol2'><a href='###'><img src='img/18.jpg'/></a><span>&lt;&lt;海澜之家&gt;&gt;男士衬衫</span></li><li class='shopCol3'><p>尺寸:"+strObj[i].goodsType+"</p><p>颜色:"+strObj[i].goodsColor+"</p></li><li class='shopCol4'>￥"+strObj[i].goodsPrice+"</li><li class='shopCol5'>"+strObj[i].goodsNum+"</li><li class='shopCol6'>"+strObj[i].goodsNum*strObj[i].goodsPrice+"</li>"
		$("#shopContent").prepend(li);
}
var total = localStorage.getItem("total")
$("#total").html("¥"+total);
var allTotal = parseInt(total) + parseInt($("#freight").html());
$("#allTotal").html("¥"+allTotal);
$("#allTotal1").html("¥"+allTotal);
localStorage.setItem("shouldMoney",allTotal)


//从本地存储的数据中取出当前拥有的积分
	var str1 = localStorage.getItem("intergral");
	var obj1 = JSON.parse(str1);
	$("#ownIntegral").html(obj1.nowIntergral)
var integralValue;
$("#integral").on("input",function(){
	//获取输入积分框的值
	integralValue = $("#integral").val();
	if(integralValue>$("#ownIntegral").html()){
		alert("对不起您的积分不足")
	}else{
		$(".jianMoney").html("¥"+-integralValue/100);
		var shouldMoney = allTotal-integralValue/100
		$(".shouldMoney").html(shouldMoney);
		//本地存储应付金额
		localStorage.setItem("shouldMoney",shouldMoney)
		$(".getIntegral").html(((allTotal-integralValue/100)/10).toFixed(2))
	}
	
})

$(".submit").click(function() {
	console.log(integralValue)
	//改变本地存储的积分值并存入本地
		obj1.nowIntergral = obj1.nowIntergral-integralValue;
		obj1.totalIntergral = obj1.totalIntergral+parseInt(integralValue);
		var str2 = JSON.stringify(obj1);
		localStorage.setItem("intergral",str2)
	window.location.href="order-success.html";
})
