//用户密码登录界面
$("#login").click(function(){
		randomNumberArr = [];
		$(".block222").css("display","block")
		$(".activeBlock").css("display","none")
})

$("#phone").click(function(){
		                                                                                                                                       
		$(".activeBlock").css("display","block")
		$(".block222").css("display","none")
})



//手机验证登录操作
//存储随机数字
var randomNumberArr = [];
//判断手机号是否正确是否可以进入下一步
$("#phoneNum").on("input",function() {
	var phonenum = $("#phoneNum").val();
	if(!(/^1(3|4|5|7|8)\d{9}$/.test(phonenum))){
		$("#trueShow").css("display","none");
		$("#falseShow").css("display","block");
		
	}else{
		$("#trueShow").css("display","block");
		$("#falseShow").css("display","none");
		getRandomNumber("#randomNumber");
		$("#dimNumber").click(function() {
		$("#randomNumber").html("");
			randomNumberArr = [];
			getRandomNumber("#randomNumber");
		})
	}
})

//随机四位数
function getRandomNumber (parameter) {
	for(var i=0;i<4;i++){
	var randomNumber = RandomNumber(0,9);
	randomNumberArr.push(randomNumber);
	$(parameter).html(randomNumberArr)
	}
}
//判断输入的验证码是否正确,是否可以进入下一步
//记录生成的验证码的时间
var time = 60;
var againTime = 60;
var timer;
var flag = true;
//判断复选框是否选中
var adjustCheckbox = document.getElementById("adjustCheckbox")
$("#checkNumber").on("change",function() {
	var checkNumber = $("#checkNumber").val();
	console.log(checkNumber,$("#randomNumber").html())
	if(checkNumber === $("#randomNumber").html()){
		$("#getTesting").click(function() {
			timer = setInterval(testingTime,1000)
		})
		$("#againGetTesting").click(function(){
			clearInterval(timer)
			timer = setInterval(againTestingTime,1000)
		})
		adjustCheckbox.onchange = function() {
			if(adjustCheckbox.checked){
				$("#xLogin").click(function() {
					window.location.href = "home.html";
				})
			}else{
				alert("您好像忘了记住我")
				}
				
			}
		
	}else{
		alert("请输入正确的验证码");
	}
})

$("#registPhone").click(function() {
	window.location.href = 'regist.html';
})
$("#regist").click(function() {
	window.location.href = 'regist.html';
})
//产生随机数
function RandomNumber(x,y) {
	return Math.floor(Math.random()*(y-x+1)+x)
}
//产生验证码时间的函数
function testingTime(){
	if(time <= 0){
		$("#getTesting").css("display","none");
		$("#againGetTesting").css("display","block");
		time=0
	}
	$("#getTesting").html(time);
	console.log(time)
	time--;
}
//重新获取验证码的函数
function againTestingTime(){
	againTime--;
	if(againTime <= 0){
		$("#againGetTesting").html("重获验证码");
		againTime=0;
		return;
	}else{
		$("#againGetTesting").html(againTime);
		console.log(againTime)
	}
	$("#againGetTesting").html(againTime);
	console.log(againTime)
}

//切换城市的localStorage
	var name = localStorage.getItem("city")
    $("#changeCity").html(name);
 







var getData = localStorage.getItem("login");
var getuser = JSON.parse(getData);
console.log(getuser.username,getuser.password);

//账号密码登录界面
$("#PhoneNumber").on("change",function(){
	var phonenum1 = $("#PhoneNumber").val();
	if(phonenum1 ===getuser.username){
		$("#trueShow1").css("display","block");
		$("#falseShow1").css("display","none");
		$("#userPassword").on("change",function(){
			var userPassword = $("#userPassword").val();
			if(userPassword === getuser.password){
				getRandomNumber("#randomNumber1");
				$("#dimNumber1").click(function() {
				$("#randomNumber1").html("");
					randomNumberArr = [];
					getRandomNumber("#randomNumber1");
				})
			}else{
				alert("请输入正确的密码")
			}
		})
	}else{
		$("#trueShow1").css("display","none");
		$("#falseShow1").css("display","block");
	}
})


//判断复选框是否选中
var adjustCheckbox1 = document.getElementById("adjustCheckbox1")
$("#checkNumber1").on("change",function() {
	var checkNumber1 = $("#checkNumber1").val();
	if(checkNumber1 === $("#randomNumber1").html()){
		adjustCheckbox1.onchange = function() {
			console.log(adjustCheckbox1.checked)
			if(adjustCheckbox1.checked){
				$("#xLogin1").click(function() {
					window.location.href = "home.html";
				})
			}else{
				alert("您好像忘了记住我")
				}
				
			}
		
	}else{
		alert("请输入正确的验证码");
	}
})

