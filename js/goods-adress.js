var str = localStorage.getItem("adress");
var strObj = JSON.parse(str);
console.log(strObj.length);
for(var i=0;i<strObj.length;i++){
	var ul = "<ul class='cl'><li>"+(i+1)+"</li><li>"+strObj[i].username+"</li><li>"+strObj[i].prov+strObj[i].city+strObj[i].prefecture+"</li><li>"+strObj[i].minuteAdress+"</li><li>"+strObj[i].Linkphone+strObj[i].fixphone+"</li><li>暂无</li><li><a href='#'><span></span></a><a href='#'><span>修改</span></a><a href='#'><span class='deleteA'>删除</span></a></li></ul>";
	$("#s-addre").append(ul);
}
$("#s-addre").on("click",".deleteA",function() {
	console.log($(this).index(".deleteA"))
	strObj.splice($(this).index(".deleteA"),1);
	var str = JSON.stringify(strObj);
	localStorage.setItem("adress",str)
	$(this).parents(".cl").remove();
})
