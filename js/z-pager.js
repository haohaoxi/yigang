//***********************是需要手动修改的地方
//创建分页器
//参数说明: page :传入总共的数据页数, length : 传入的数据总共长度, before: 在哪个元素中, after: 哪个元素中的某个元素
var index = 1; //记录当前的页码
function createPager(page, length, before, after) {
	//初始页面读取第一页
	index = 1;
	//这里填写需要更新的数据(具体函数在下面)***********************
	createRecord();
	//*********************
	$(".z-pager").remove();
	//这里填写需要创建的元素(在哪个元素里面的某个元素后面)
	$(before + " " + after).after('<div class="z-pager"> <div class="z-first-page">首页</div> <div class="z-last-page">上一页</div> <ul class="z-page"></ul> <div class="z-next-page">下一页</div>  <div>共<span class="z-total-page">' + page + '</span>页 , 到第 <input type="text" /> 页</div> <div class="z-jump-page">确定</div> <div>共<span class="z-total-article">' + length + '</span>条</div> </div>');
	$(".z-page li").remove();
	for(var i = 1; i < 4; i++) {
		$(".z-page").append('<li class="z-the-page">' + i + '</li>');
	}
	$(".z-page").append('<li>...</li>');
	for(var i = page - 1; i <= page; i++) {
		$(".z-page").append('<li class="z-the-page">' + i + '</li>');
	}
	//点击某个页面
	function clickPage() {
		index = parseInt($(this).html());
		console.log($(this).html())
		var judge = $(".z-the-page").index($(this));
		$(".z-page li").remove();
		console.log("点击的是第" + judge+"个");
		//判断点击的第几个页数
		switch(judge) {
			case 0:
				if(index - 1 > 0) {
					for(var i = 1; i < 4; i++) {
						$(".z-page").append('<li class="z-the-page">' + (index - 2 + i) + '</li>');
					}
					$(".z-page").append('<li>...</li>');
					for(var i = page - 1; i <= page; i++) {
						$(".z-page").append('<li class="z-the-page">' + i + '</li>');
					}
				} else {
					for(var i = 1; i < 4; i++) {
						$(".z-page").append('<li class="z-the-page">' + i + '</li>');
					}
					$(".z-page").append('<li>...</li>');
					for(var i = page - 1; i <= page; i++) {
						$(".z-page").append('<li class="z-the-page">' + i + '</li>');
					}
				}
				break;
			case 1:
				console.log(page)
				if(page - index > 4) {
					for(var i = 1; i < 4; i++) {
						$(".z-page").append('<li class="z-the-page">' + (index - 2 + i) + '</li>');
					}
					$(".z-page").append('<li>...</li>');
					for(var i = page - 1; i <= page; i++) {
						$(".z-page").append('<li class="z-the-page">' + i + '</li>');
					}
				} else {
					for(var i = 1; i < 6; i++) {
						$(".z-page").append('<li class="z-the-page">' + (page - 5 + i) + '</li>');
					}
				}
				break;
			case 2:
				if(page - index > 3) {
					for(var i = 1; i < 4; i++) {
						$(".z-page").append('<li class="z-the-page">' + (index - judge + i) + '</li>');
					}
					$(".z-page").append('<li>...</li>');
					for(var i = page - 1; i <= page; i++) {
						$(".z-page").append('<li class="z-the-page">' + i + '</li>');
					}
				} else {
					for(var i = 1; i < 6; i++) {
						$(".z-page").append('<li class="z-the-page">' + (page - 5 + i) + '</li>');
					}
				}
				break;
			case 3:
			case 4:
				for(var i = 1; i < 6; i++) {
					$(".z-page").append('<li class="z-the-page">' + (page - 5 + i) + '</li>');
				}
				break;
		}
		console.log("点击的页数" + index);
		//更新留言板*************************************
		createRecord();
		//************************
	}
	//取消之前绑定的事件防止添加两次click
	$(".z-page").off("click", ".z-the-page");
	//再次添加绑定事件
	$(".z-page").on("click", ".z-the-page", clickPage);

	//点击首页
	$(".z-first-page").click(function() {
			$(".z-page li").remove();
			index = 1;
			for(var i = 1; i < 4; i++) {
				$(".z-page").append('<li class="z-the-page">' + i + '</li>');
			}
			$(".z-page").append('<li>...</li>');
			for(var i = page - 1; i <= page; i++) {
				$(".z-page").append('<li class="z-the-page">' + i + '</li>');
			}
			//更新留言板*************************
			createRecord();
			//*************************
		})
		//上一页
	$(".z-last-page").click(function() {
			$(".z-page li").remove();
			if(index > 1) {
				index--;
			}
			if(index > 2) {
				if(page - index > 3) {
					for(var i = 1; i < 4; i++) {
						$(".z-page").append('<li class="z-the-page">' + (index - 2 + i) + '</li>');
					}
					$(".z-page").append('<li>...</li>');
					for(var i = page - 1; i <= page; i++) {
						$(".z-page").append('<li class="z-the-page">' + i + '</li>');
					}
				} else {
					for(var i = 1; i < 6; i++) {
						$(".z-page").append('<li class="z-the-page">' + (page - 5 + i) + '</li>');
					}
				}
			} else {
				if(page - index > 3) {
					for(var i = 1; i < 4; i++) {
						$(".z-page").append('<li class="z-the-page">' + i + '</li>');
					}
					$(".z-page").append('<li>...</li>');
					for(var i = page - 1; i <= page; i++) {
						$(".z-page").append('<li class="z-the-page">' + i + '</li>');
					}
				} else {
					for(var i = 1; i < 6; i++) {
						$(".z-page").append('<li class="z-the-page">' + (page - 5 + i) + '</li>');
					}
				}
			}
			//更新留言板********************************
			createRecord();
			//****************************
		})
		//下一页
	$(".z-next-page").click(function() {
			$(".z-page li").remove();
			console.log(index + "页")
			if(index < page) {
				index++;
			}
			if(page - index > 3) {
				for(var i = 1; i < 4; i++) {
					$(".z-page").append('<li class="z-the-page">' + (index - 2 + i) + '</li>');
				}
				$(".z-page").append('<li>...</li>');
				for(var i = page - 1; i <= page; i++) {
					$(".z-page").append('<li class="z-the-page">' + i + '</li>');
				}
			} else {
				for(var i = 1; i < 6; i++) {
					$(".z-page").append('<li class="z-the-page">' + (page - 5 + i) + '</li>');
				}
			}
			//更新留言板****************************
			createRecord();
			//**************************
		})
		//跳转到多少页 
	$(".z-jump-page").click(function() {
		index = $(".z-pager input").val();
		if(index > page || index < 1) {
			alert("超出范围")
		} else {
			$(".z-page li").remove();
			if(page - index > 3) {
				if(index == 1) {
					for(var i = 1; i < 4; i++) {
						$(".z-page").append('<li class="z-the-page">' + i + '</li>');
					}
					$(".z-page").append('<li>...</li>');
					for(var i = page - 1; i <= page; i++) {
						$(".z-page").append('<li class="z-the-page">' + i + '</li>');
					}
				} else {
					for(var i = 1; i < 4; i++) {
						$(".z-page").append('<li class="z-the-page">' + (index - 2 + i) + '</li>');
					}
					$(".z-page").append('<li>...</li>');
					for(var i = page - 1; i <= page; i++) {
						$(".z-page").append('<li class="z-the-page">' + i + '</li>');
					}
				}                             
			} else {
				for(var i = 1; i < 6; i++) {
					$(".z-page").append('<li class="z-the-page">' + (page - 5 + i) + '</li>');
				}
			}
			//更新留言板************************
			createRecord();
			//***************************
		}
	})
}
//************************例子
//声明一个对象
function transactionRecord(name, price, num, time, count) {
	this.name = name;
	this.price = price;
	this.num = num;
	this.time = time;
	this.count = count;
}
//创建一个空数组来存储对象
var arr2 = [];
//创建假数据
//i的最大值为假数据总数可更改
for(var i = 0; i < 50; i++) {
	var record = new transactionRecord("张******", 699, 1, "2016-10-31 10:25:31", i);
	var record = JSON.stringify(record);
	arr2.push(record);
}
localStorage.record = arr2;
//读取假数据用数组储存
var arr2 = JSON.parse("[" + localStorage.record + "]");
//计算总共有多少页面(结果向上取整每页存储5个数据)
var page2 = Math.ceil(arr2.length / 5);
//给表格里面添加内容
function createRecord() {
	//表格除了第一个之外其他全部移除
	$(".z-transaction-record table tr").not(".z-table-header").remove();
	for(var i = 1; i < 6; i++) {
		//num是从读取的数据中第几条开始读取
		var num = 5 * (index - 1) + i;
		$(".z-transaction-record table").append('<tr> <td class="z-table-name">' + arr2[num - 1].name + arr2[num - 1].count + '</td> <td class="z-table-price">￥<span class="z-price">' + arr2[num - 1].price + '</span>.00</td> <td class="z-table-num">' + arr2[num - 1].num + '</td> <td><span class="z-table-time">' + arr2[num - 1].time + '</span></td></tr>')
	}
}
//调用
createRecord();


//调用创建分页器函数
createPager(page2, arr2.length, ".z-transaction-record", "table");
//**********************例子