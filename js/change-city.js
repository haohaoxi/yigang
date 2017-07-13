$(document).ready(function() {
	getCity("热门","#area");
	getCity("A","#a");
	getCity("B","#b");
	getCity("C","#c");
	getCity("D","#d");
	getCity("E","#e");
	getCity("F","#f");
	getCity("G","#g");
	getCity("H","#h");
	getCity("I","#i");
	getCity("J","#j");
	getCity("K","#k");
	getCity("L","#l");
	getCity("M","#m");
	getCity("N","#n");
	getCity("O","#o");
	getCity("P","#p");
	getCity("Q","#q");
	getCity("R","#r");
	getCity("S","#s");
	getCity("T","#t");
	getCity("W","#w");
	getCity("X","#x");
	getCity("Y","#y");
	getCity("Z","#z");
})



function getCity(str,ulName) {
	$.getJSON("js/allcity.json", function(data) {
		var city = data.City[0][str]
		$(city).each(function() {
			var name = $(this)[0].name;
			var li = $("<li>" + name + "</li>");
			$(ulName).append(li);
			$(".xBottom li").click(function() {
				var city = $(this).html();
				$("#changeCity").html(city);
				localStorage.setItem("city",city);
				window.location.href="home.html";
			})
		})
	})

}

//$(".xBottom li").click(function() {
//	alert(11)
//})

//[]和.的区别
//
//.是直接取值
//[]是先把值存储到定义的变量中然后可以再次取出
//一般是变量的时候用[],是确定的常量的时候可以用.
