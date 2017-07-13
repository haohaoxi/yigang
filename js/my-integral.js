//本地存储数据 累计积分和当前积分
var totalIntergral=8400;
var nowIntergral=2400;
var obj = {
		totalIntergral:totalIntergral,
		nowIntergral:nowIntergral
	}
if(localStorage.getItem("intergral")==null){
	var str = JSON.stringify(obj);
	localStorage.setItem("intergral",str);
	$("#totalIntergral").html("8400")
	$("#nowIntergral").html("2400")
}else{
	var str1 = localStorage.getItem("intergral");
	var obj1 = JSON.parse(str1);
	$("#totalIntergral").html(obj1.totalIntergral)
	$("#nowIntergral").html(obj1.nowIntergral)
}
