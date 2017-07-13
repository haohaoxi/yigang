//取出对应的数据
var str = localStorage.getItem("adress");
var receiverInfo = JSON.parse(str);
var shouldMoney = localStorage.getItem("shouldMoney")
$(".shouldMoney").html(shouldMoney);
if(receiverInfo!=null){
$(".receiverInfo").eq(0).html(receiverInfo[receiverInfo.length-1].username)
$(".receiverInfo").eq(1).html(receiverInfo[receiverInfo.length-1].prov)
$(".receiverInfo").eq(2).html(receiverInfo[receiverInfo.length-1].city)
$(".receiverInfo").eq(3).html(receiverInfo[receiverInfo.length-1].prefecture)
$(".receiverInfo").eq(4).html(receiverInfo[receiverInfo.length-1].minuteAdress)
$(".receiverInfo").eq(5).html(receiverInfo[receiverInfo.length-1].Linkphone,receiverInfo[receiverInfo.length-1].fixphone)
}
var radios = document.getElementsByClassName("radio")

$("#nowPay").click(function() {
	for(var i=0;i<radios.length;i++){
		if(radios[i].checked){
			$("#orderCover").css("display","block")
			$("#orderHidden").css("display","block")
			return;
		}
	}
	alert("请选择支付方式");
})


//支付失败的点击事件
$("#flasePay").click(function() {
	$("#orderCover").css("display","none")
	$("#orderHidden").css("display","none")
})
//支付完成的点击事件
$("#finishPay").click(function() {
	window.location.href = "pay-success.html";
})


