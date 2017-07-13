$(".s-new").click(function(){
			$(".s-active").css("display","none");
			$("#new-add").css("display","block");
})

//本地存储数据
var newArr = [];
$("#confirmSubmit").on("click",function() {
	//获取联系人姓名
	var username = $("#ueseName").val();
	//获取省
	var prov = $("#prov").val();
	//获取市
	var city = $("#city").val();
	//获取县
	var prefecture = $("#prefecture").val();
	//获取详细地址
	var minuteAdress = $("#minuteAdress").val();
	//获取联系电话
	var Linkphone = $("#Linkphone").val();
	//获取固定电话
	var fixPhone1 = $("#fixPhone1").val();
	var fixPhone2 = $("#fixPhone2").val();
	var fixphone = fixPhone1+fixPhone2;
	var obj = {
		username:username,
		prov:prov,
		city:city,
		prefecture:prefecture,
		minuteAdress:minuteAdress,
		Linkphone:Linkphone,
		fixphone:fixphone
	}
	
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
	window.location.href = "goods-address.html";
});
