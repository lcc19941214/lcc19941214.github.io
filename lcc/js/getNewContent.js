function getNewContent(){
	var request = getHttpObject();
	if(request){
		request.open("GET", "product.html", "true");
		request.onreadystatechange = function(){
			if (request.readyState == 4) {
				var m_content_2 = document.createElement("div");
				m_content_2.className = "m-content m-content-2 current";
				m_content_2.textContent = (request.responseXML);
				var footer = document.getElementsByClassName("g-footer")[0];
				document.getElementsByClassName("g-container")[0].insertBefore(m_content_2, footer);
			}
		};
		request.send(null);
	}
}