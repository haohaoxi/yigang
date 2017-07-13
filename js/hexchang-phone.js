$("#xiugai1").change(function() {
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
	
//验证手机号
var hreg1 = /^[1][358][0-9]{9}$/;
$("#hchangephone").on("input",function(){
	if(hreg1.test($("#hchangephone").val())){
		$("#hshouji").css("display", "none");
	}else{
		$("#hshouji").css("display","block");	
	}
})
//验证原手机号
function agujust(val,arr){
	for(var i = 0 ; i<arr.length; i++){
		if(val == arr[i].user){
			return true;
		}else{
			return false;
		}
	}
}
$("#hgenghuan").click(function(){
	var user = $("#hchangephone").val();
	var str = JSON.stringify(user);
	localStorage.setItem("phonename",str);
	console.log(localStorage.phonename)
})
