$("#hbtmTop li").click(function() {
	$("#hbtmTop li").css({
		backgroundColor:"#fff",
		color:"#000"
	})
	$(this).css({
		backgroundColor:"#008CE1",
		color:"#fff"
	})
	$("#hbtmBottom li").css("display","none");
	$("#hbtmBottom li").eq($(this).index()).css("display","block")
	
})


$("#hbbLeft").mouseenter(function(){
	$("#hidden").css("display","block");
	$("#rotateImg").css("transform","rotate(0)")
})
$("#hidden").mouseleave(function(){
	$("#hidden").css("display","none");
	$("#rotateImg").css("transform","rotate(180deg)")
})

$("#hiddenLeft li").mouseenter(function() {
	$(".hiddenContent").css("display","none");
	$('.hiddenContent').eq($(this).index()-1).css("display","block");
	$("#rotateImg").css("transform","rotate(0)")
})

$("#hbbText").mouseenter(function() {
	$("#hbbrContent").slideDown(300);
})
$("#hbbRight").mouseleave(function() {
	$("#hbbrContent").slideUp(300);
})

$("#hbtRightText").click(function(){
window.location.href = "h9-order.html"	
})

//搜索框的点击事件
$("#hbtmBtn").click(function() {
		var searchValue = $("#hbtmSearch").val();
		console.log(searchValue)
		if(searchValue === "海澜之家旗舰店"){
			window.location.href = "manShirtShop.html";
		}else if(searchValue===""){
			window.location.href="home.html";
		}else{
			window.location.href = "search-false.html";
		}
})
//切换城市的localStorage
if(localStorage.getItem("city")==null){
	$("#changeCity").html("北京");
}else{
	var name = localStorage.getItem("city")
	$("#changeCity").html(name);
}
    

var getData1 = localStorage.getItem("login");
var getuser1 = JSON.parse(getData1);
$("#ueserLogin").click(function() {
	window.location.href="login.html";
})
$("#ueserLogin").html(getuser1.username)