// 兼容古董浏览器
// 浏览器嗅探

// var request = new ActiveXObject("Msxml2.XMLHTTP.3.0");

// var request = new XMLHttpRequest();

function getHttpObject(){
	//获取request对象
	
	//判断
	if ( typeof XMLHttpRequest == "undefiend"){
		try{ return new ActiveXObject("Msxml2.XMLHTTP.6.0"); }
			catch(e){}
		try{ return new ActiveXObject("Msxml2.XMLHTTP.3.0"); }
			catch(e){}
		try{ return new ActiveXObject("Msxml2.XMLHTTP"); }
			catch(e){}
		return false;
	}
	return new XMLHttpRequest();
}