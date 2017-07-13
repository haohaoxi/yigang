$(document).ready(function() {

	//	$("#seave").click(function(){
	//	if($("#password").val() == "" || $("#username1").val() == ""){
	//			alert("请填写完整")
	//		}else{
	//			window.location.href = "h2-real.html";
	//		}
	//	});
	//11
	$("#ipp11").change(function() {
		var $file = $(this);
		var fileObj = $file[0];
		var windowURL = window.URL || window.webkitURL;
		var dataURL;
		var $img = $("#preview11");

		if(fileObj && fileObj.files && fileObj.files[0]) {
			dataURL = windowURL.createObjectURL(fileObj.files[0]);
			$img.attr('src', dataURL);
		} else {
			dataURL = $file.val();
			var imgObj = document.getElementById("preview");
			// 两个坑:
			// 1、在设置filter属性时，元素必须已经存在在DOM树中，动态创建的Node，也需要在设置属性前加入到DOM中，先设置属性在加入，无效；
			// 2、src属性需要像下面的方式添加，上面的两种方式添加，无效；
			imgObj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
			imgObj.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = dataURL;

		}
	});
	//12
	$("#ipp12").change(function() {
		var $file = $(this);
		var fileObj = $file[0];
		var windowURL = window.URL || window.webkitURL;
		var dataURL;
		var $img = $("#preview12");

		if(fileObj && fileObj.files && fileObj.files[0]) {
			dataURL = windowURL.createObjectURL(fileObj.files[0]);
			$img.attr('src', dataURL);
		} else {
			dataURL = $file.val();
			var imgObj = document.getElementById("preview");
			imgObj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
			imgObj.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = dataURL;

		}
	});
	//21
	$("#ipp21").change(function() {
		var $file = $(this);
		var fileObj = $file[0];
		var windowURL = window.URL || window.webkitURL;
		var dataURL;
		var $img = $("#preview21");

		if(fileObj && fileObj.files && fileObj.files[0]) {
			dataURL = windowURL.createObjectURL(fileObj.files[0]);
			$img.attr('src', dataURL);
		} else {
			dataURL = $file.val();
			var imgObj = document.getElementById("preview");
			imgObj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
			imgObj.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = dataURL;

		}
	});

	//22
	$("#ipp22").change(function() {
		var $file = $(this);
		var fileObj = $file[0];
		var windowURL = window.URL || window.webkitURL;
		var dataURL;
		var $img = $("#preview22");

		if(fileObj && fileObj.files && fileObj.files[0]) {
			dataURL = windowURL.createObjectURL(fileObj.files[0]);
			$img.attr('src', dataURL);
		} else {
			dataURL = $file.val();
			var imgObj = document.getElementById("preview");
			imgObj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
			imgObj.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = dataURL;

		}
	});

	//31
	$("#ipp31").change(function() {
		var $file = $(this);
		var fileObj = $file[0];
		var windowURL = window.URL || window.webkitURL;
		var dataURL;
		var $img = $("#preview31");

		if(fileObj && fileObj.files && fileObj.files[0]) {
			dataURL = windowURL.createObjectURL(fileObj.files[0]);
			$img.attr('src', dataURL);
		} else {
			dataURL = $file.val();
			var imgObj = document.getElementById("preview");
			imgObj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
			imgObj.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = dataURL;

		}
	});

	//32
	$("#ipp32").change(function() {
		var $file = $(this);
		var fileObj = $file[0];
		var windowURL = window.URL || window.webkitURL;
		var dataURL;
		var $img = $("#preview32");

		if(fileObj && fileObj.files && fileObj.files[0]) {
			dataURL = windowURL.createObjectURL(fileObj.files[0]);
			$img.attr('src', dataURL);
		} else {
			dataURL = $file.val();
			var imgObj = document.getElementById("preview");
			imgObj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
			imgObj.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = dataURL;

		}
	});

	//登录账号
	var reg = /^[A-Za-z1-9]{1}[A-Za-z0-9]{6,20}$/;
	var xndy1 = document.getElementById("xndy1");
	var inpu = document.getElementById("username1");
	inpu.oninput = function() {
			var str = document.getElementById("username1").value;
			if(reg.test(str)) {
				xndy1.style.display = "none";
			} else {
				xndy1.style.display = "block";
			}
		}
		//登录密码
	var reg1 = /^[A-Za-z1-9]{1}[A-Za-z0-9]{6,20}$/;
	$("#password").on("input", function() {
			if(reg1.test($("#password").val())) {			
				$("#xndy2").css("display", "none")
			} else {
				$("#xndy2").css("display", "block")
			}
		})
		//显示隐藏
	var flag = true;
	$(".bizheng").on("click", function() {
			if(flag) {
				$("#password").prop("type", "text");
				$("#biyan").css({
					display: "none"
				});
				$("#zhengyan").css({
					display: "block"
				});
				flag = false;
				console.log("123")
			} else {
				console.log("456");
				$("#password").prop("type", "password");
				$("#biyan").css({
					display: "block"
				});
				$("#zhengyan").css({
					display: "none"
				});
				flag = true;
				console.log("123")
			}
		})
		//选择旅游,项目
	var ly = ["东嵯头", "西寸头", "北京", "西京"];
	var cf = ["遇上肉丝", "麻婆豆腐", "香饽饽"];
	var select1 = document.getElementById("cate_id");
	var select2 = document.getElementById("cate_two_id");
	select1.onchange = function() {
		for(var i = 0; i < select2.children.length; i++) {
			select2.removeChild(select2.children[i]);
			i--;
		}
		if(select1.value == 111) {
			for(var i = 0; i < ly.length; i++) {
				var op = document.createElement("option");
				op.innerHTML = ly[i];
				select2.appendChild(op);
			}
		}
		if(select1.value == 222) {
			for(var i = 0; i < cf.length; i++) {
				var op = document.createElement("option");
				op.innerHTML = cf[i];
				select2.appendChild(op);
			}
		}
	}

	//本地储存账号密码
//	var accname = [];
//	$("#overh").click(function() {
//			var user = $("#username1").val();
//			var pass = $("#password").val();
//			var atrr = {
//					user: user,
//					pass: pass,
//				}
//				//			var accname = [atrr];
//				//			localStorage.shujuku = JSON.stringify(accname);
//				//		    console.log(localStorage.shujuku)
//			if(localStorage.getItem("shujuku") === null) {
//				accname.push(atrr);
//				var str = JSON.stringify(accname);
//				localStorage.setItem("shujuku", str);
//			} else {
//				var str = localStorage.getItem("shujuku");
//				var strObj = JSON.parse(str);
//				strObj.push(atrr);
//				var str1 = JSON.stringify(strObj);
//				localStorage.setItem("shujuku", str1);
//			}
//		})
		//第一种方法
		//封装js
		function agujust(val,arr){
			for (var i =0 ; i < arr.length;i++) {
				if(val == arr[i].user || val == arr[i].pass ){
					return true;
				}else{
					return false;
				}
			}
		}
		var accname = [];
		$("#baocun").click(function(){
			var user = $("#username1").val();
			var pass = $("#password").val();
			var atrr = {
					user: user,
					pass: pass,
				}
				//			var accname = [atrr];
				//			localStorage.shujuku = JSON.stringify(accname);
				//		    console.log(localStorage.shujuku)
			if(localStorage.getItem("shujuku") === null) {
				accname.push(atrr);
				var str = JSON.stringify(accname);
				localStorage.setItem("shujuku", str);
			} else {
				var str = localStorage.getItem("shujuku");
				var strObj = JSON.parse(str);
				strObj.push(atrr);
				var str1 = JSON.stringify(strObj);
				localStorage.setItem("shujuku", str1);
			}
			
	
		var str2 = localStorage.getItem("shujuku");
		var arr = JSON.parse(str2);
		console.log(arr)
//		var arrname = [];
//		var pass = [];
		var a = agujust(user,arr)
		var b = agujust(pass,arr)
		console.log(a,b)
			if(a&&b){
				console.log(111)
				alert("账号已经存在请重新创建一个")
				
			}else{
				window.location.href = "h2-real.html";
			}
		
		});
		//删除全部账号密码
		localStorage.removeItem("shujuku");

	//第二中方法
//	$(".live_action").click(function() {
//		var str2 = localStorage.getItem("shujuku");
//		var arr = JSON.parse(str2);
//		var arrname = [];
//		var pass = [];
//		for(i = 0; i < arr.length; i++) {
//			arrname.push(arr[i].user);
//			pass.push(arr[i].pass);
//		}
//		for(i = 0; i < arrname.length; i++) {
//			if($("#username").val() == arrname[i]) {
//				for(i = 0; i < pass.length; i++) {
//					if($("#password").val() == arrname[i]) {
//							alert("密码已经存在,请重新创建")
//					} else {
//	                    alert("密码错误")
//						break
//					}
//				}
//			} else {
//				alert("账号错误");
//					break;
//			}
//		}
//	})
	
	
//	localStorage.removeItem("shujuku");

//$("#s-addre").on("click",".deleteA",function() {
//	console.log($(this).index(".deleteA"))
//	strObj.splice($(this).index(".deleteA"),1);
//	var str = JSON.stringify(strObj);
//	localStorage.setItem("adress",str)
//	$(this).parents(".cl").remove();
//})

});