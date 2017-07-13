$(document).ready(function() {
	//划入
	$("#hide1").on("mouseenter", function() {
		$("#contenthidden").css("display", "block")

	});
	$("#hide1").on("mouseleave", function() {
		$("#contenthidden").css("display", "none")

	});
	$("#contenthidden").on("mouseenter", function() {
		$("#contenthidden").css("display", "block")

	});
	$("#contenthidden").on("mouseleave", function() {
		$("#contenthidden").css("display", "none")

	});

	var flag = true;
	//下拉
	$("#contentorder").click(function() {
		if(flag) {
			$("#contentup").css("height", "300px");
			$("#contentorder").css({
				bottom: -25
			});
			$("#yuanqian").css("transform", "translateY(90px)");
			$("#contenthiddenpulldown").css("display", "block");
			flag = false;
		} else {
			$("#contentup").css("height", "95px");
			$("#yuanqian").css({
				transform: "translateY(-84px)"
			});
			$("#contentorder").css({
				bottom: 0
			});
			$("#contenthiddenpulldown").css("display", "none");
			flag = true;
		}
	});

	//轮播
	$("#clear-away1img2").click(function() {
		$("#clear-away1img2").fadeOut(500);
		$("#clear-away1img1").fadeIn(500);

	});
	$("#clear-away1img1").click(function() {
		$("#clear-away1img2").fadeIn(500);
		$("#clear-away1img1").fadeOut(500);
	});

	//隐藏界面的鼠标划入事件
	$("#newuser").on("mouseenter", function() {
		$("#yin-cang").css("display", "block");
		$("#newuser").css("color", "rgb(204,204,204)")
	});
	$("#newuser").on("mouseleave", function() {
		$("#yin-cang").css("display", "none");
		$("#newuser").css("color", "#008CE1")
	})
	$("#yin-cang").on("mouseenter", function() {
		$("#yin-cang").css("display", "block");

	});
	$("#yin-cang").on("mouseleave", function() {
			$("#yin-cang").css("display", "none");

		})
		//隐藏界面的滑动
	$("#account1").click(function() {
		$("#box1").css("transform", "translateX(-950px)")
	});
	$("#account2").click(function() {
		$("#box1").css("transform", "translateX(0)")
	});
	$("#account1").one("mouseenter", function() {
		$("#box1").css("transform", "translateX(-10px)")
	});
	//点击下一步
	$("#xiayibu").click(function() {
		if($("input").val() == "") {
			$("#phidden4").css("visibility", "visible");
			$("#phidden6").css("display", "block");
			$("#phidden7").css("display", "none");
		} else {
			$("#phidden4").css("visibility", "hidden");
			$("#phidden6").css("display", "none");
			$("#phidden7").css("display", "block");
		}
	});

	$.validator.setDefaults({
		submitHandler: function() {
			alert("提交事件!");
		}
	});
	console.log($('form'));
	//表单规则
	$("form").validate({
		rules: {
			yincanginput1: {
				minlength: 5,
				maxlength: 11,
				required: true
			}
		},
		messages: {
			yincanginput1: {
				required: "请输入密码",
				minlength: "密码长度不能小于 5 个字母",
				maxlength: "密码长度不能小于 11 个字母"
			}
		}
	});
	//	$.extend($.validator.messages,{
	//		yincanginput1:"请输入正确的密码",
	//		 remote: "请修正该字段",
	//		 email: "请输入正确格式的电子邮件",
	//		 url: "请输入合法的网址",
	// 		 date: "请输入合法的日期",
	//		 dateISO: "请输入合法的日期 (ISO).",
	//		 number: "请输入合法的数字",
	//		 digits: "只能输入整数",
	//		 creditcard: "请输入合法的信用卡号",
	//		 equalTo: "请再次输入相同的值",
	//		 accept: "请输入拥有合法后缀名的字符串",
	//		 maxlength: $.validator.format("请输入一个长度最多是 {0} 的字符串"),
	//		 minlength: $.validator.format("请输入一个长度最少是 {0} 的字符串"),
	//		 rangelength: $.validator.format("请输入一个长度介于 {0} 和 {1} 之间的字符串"),
	//		 range: $.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),
	//		 max: $.validator.format("请输入一个最大为 {0} 的值"),
	//		 min: $.validator.format("请输入一个最小为 {0} 的值")
	//	});

})