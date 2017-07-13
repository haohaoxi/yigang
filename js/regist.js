var randomNumberArr = [];
var userArr = [];
var isChecked = document.getElementById("isChecked");
//判断手机号是否正确是否可以进入下一步
$("#getPhoneNumber").on("change",function() {
	var phonenum = $("#getPhoneNumber").val();
	if(!(/^1(3|4|5|7|8)\d{9}$/.test(phonenum))){
		$("#trueShow").css("display","none");
		$("#falseShow").css("display","block");
		
	}else{
		$("#trueShow").css("display","block");
		$("#falseShow").css("display","none");
		//判断密码和验证码
		$("#password").on("change",function() {
			var pas = $("#password").val();
			if(/^[a-zA-Z0-9]{6,20}$/.test(pas)){
			$("#againPassword").on("change",function() {
				var againPas = $("#againPassword").val();
				if(pas === againPas){
					getRandomNumber();
					$("#dimNumber").click(function() {
					$("#randomNumber").html("");
						randomNumberArr = [];
						getRandomNumber();
					})
				}else{
							alert("密码错误");
							$("#againPassword").val("");
							$("#Password").val("");
							
						}
					})
				}else{
					alert("请输入6-20位数字或字符串");
				}
					var obj = {
						username:phonenum,
						password:pas
					}
				var str = JSON.stringify(obj)
				localStorage.setItem("login",str);
			})
	}
})


var  time = 60;
var  yanzhengArr="";
function yanzheng () {
	for(var i=0;i<4;i++){
	var randomNumber = RandomNumber(0,9);
	yanzhengArr +=randomNumber.toString()
	}
	return yanzhengArr;
}
$("#checkNumber").on("change",function() {
	var checkNumber = $("#checkNumber").val();
	console.log(checkNumber,$("#randomNumber").html())
	if(checkNumber === $("#randomNumber").html()){
		$("#getTesting").click(function() {
			var mobile = $("#getPhoneNumber").val();
			var content = yanzheng();
			console.log(content)
			localStorage.setItem("yanzheng",content);
			var timer = setInterval(testingTime,1000)
			
			$.ajax({
				type:"get",
				url:"http://localhost/%E6%98%93%E5%92%8C%E7%94%9F%E6%B4%BB%E6%B8%AF/js/yanzheng.php",
				async:true,
				data:"mobile="+mobile+"&content="+content,
				success:function(data) {
					console.log(data)
				}
			});
	})
//		$(".isChecked").click(function(){
//			if(!isChecked.checked){
//				$("#login").click(function() {
//					window.location.href="login.html";
//				})
//			}else{
//				alert("请选中用户协议")
//			}
//		})
		
	}else{
		alert("请输入正确的验证码");
	}
})

$("#yanzheng").on("change",function(){
	if(localStorage.getItem("yanzheng")==$("#yanzheng").val()){
			$("#login").click(function() {
					window.location.href="login.html";
				})
		}else{
			alert("手机验证码错误")
		}
})

function getRandomNumber () {
	for(var i=0;i<4;i++){
	var randomNumber = RandomNumber(0,9);
	randomNumberArr.push(randomNumber);
	$("#randomNumber").html(randomNumberArr)
	}
}
//产生随机数
function RandomNumber(x,y) {
	return Math.floor(Math.random()*(y-x+1)+x)
}

//产生验证码时间的函数
function testingTime(){
	if(time <= 0){
		time=0
		$("#getTesting").html("请重新获取");
	}
	$("#getTesting").html(time);
	time--;
}