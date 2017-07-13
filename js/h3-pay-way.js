window.onload = function(){

$(".ico").click(function() {
	$(this).parents(".payment-list").find(".i").css("display","none");
	$(this).parents(".payment-list").find(".ico").css("border-color","rgb(215,215,215)");
	$(this).find(".i").css("display","block");
	$(this).css("border-color","#1796E3")
	if($(".zhufubao").find(".i").css("display")=="block"){
		$("#worry-pay").click(function() {
			window.location.href = "h4-cashier-desk.html";
		})
		}else if($(".weixin").find(".i").css("display")=="block"){
			$("#worry-pay").click(function() {
				window.location.href = "h5-weixin-form.html";
			})
	}

})

$("#worry-pay").click(function() {
	if($("#hclick1").find(".i").css("display")=="block"){
		window.location.href = "h4-cashier-desk.html";
	}else{
		window.location.href = "h5-weixin-form.html";
	}
})

}
