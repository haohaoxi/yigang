var randomNumberArr = [];
var userArr = [];
var isChecked = document.getElementById("isChecked");

//判断手机号是否正确是否可以进入下一步
$("#getPhoneNumber").on("change",function(){
		var phonenum = $("#getPhoneNumber").val();
	if(!(/^1(3|4|5|7|8)\d{9}$/.test(phonenum))){
		$("#trueShow").css("display","none");
		$("#yincangphone").css("display","block");	
	}else{
		$("#trueShow").css("display","block");
		$("#yincangphone").css("display","none");
	}
})



function getRandomNumber () {
	for(var i=0;i<4;i++){
	var randomNumber = RandomNumber(0,9);
	randomNumberArr.push(randomNumber);
	$("#randomNumber").html(randomNumberArr)
	}
}
getRandomNumber();
//产生随机数
function RandomNumber(x,y) {
	return Math.floor(Math.random()*(y-x+1)+x)
}
		var str1 = localStorage.getItem("phonename");
		var number1 = JSON.parse(str1);
//输入验证码第一个正确,才能验证第二个
$("#checkNumber").on("change",function(){
	var checkNumber = $("#checkNumber").val();
	console.log(checkNumber,$("#randomNumber").html())
	if(checkNumber === $("#randomNumber").html()){
       //获取验证码
      $("#getTesting").click(function(){
	      var timer = setInterval(testingTime,1000)
     });
     //获取点击下一步的权限
     $("#first").click(function(){
     	if(number1 ==$("#getPhoneNumber").val()){
			$("#s-two").css("display","block");
			$(".s-active").css("display","none");
			}else{
				$("#s-two").css("display","none");
			    $(".s-active").css("display","block");
				alert("手机号码不同")
			}
		})  
	}else{
		alert("验证码错误❌")
	}
})

//换一张图片
$("#dimNumber").click(function(){
	 randomNumberArr = []
	getRandomNumber();
});

//产生验证码时间的函数
var  time = 10;
function testingTime(){
	if(time <= 1){
		time=0;
	}
	$("#getTesting").html(time);
	time--;
}    
 //跳转页面
     $("#two").click(function(){
			$("#s-three").css("display","block");
			$("#s-two").css("display","none");
		})

console.log(localStorage.phonename);
		//删除全部账号密码
//   localStorage.removeItem("phonename");