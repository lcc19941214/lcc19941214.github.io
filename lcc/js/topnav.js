function addLoadEvent(func){
	//执行函数
	var oldonLoad = window.onload;
	if (typeof window.onload != "function") {
		window.onload = func;
	}else{
		window.onload = function(){
			oldonLoad();
			func();
		}
	}
}

function topNavShift(){
	//导航栏状态及对应内容切换
	var topNavBtn = document.body.getElementsByClassName("m-topnav")[0].getElementsByTagName('a');
	var contentArea = document.body.getElementsByClassName("m-content");
	for (var i = 0; i < topNavBtn.length; i++) {
		//存储循环值
		topNavBtn[i].index = i;
		//创建点击事件
		topNavBtn[i].onclick = function(){
			//遍历按钮
			for (var n = 0; n < topNavBtn.length; n++) {
				//取消选中current类
				topNavBtn[n].className = "";
				contentArea[n].className = contentArea[n].className.slice(0,21);
			};
			//添加current类
			this.className = "current";
			contentArea[this.index].className += " current";
		}
	};
}

