/*
 *  HeaderNav鼠标移入移出效果
 *  通用
 *  author:Conan;
 *  date:2015/10/20;
 */

window.onload = function()
{
	var oHeader = document.getElementById('g-header'),
		oNav = oHeader.getElementsByClassName('u-nav')[0],
		oNavLi = oHeader.getElementsByClassName('u-nav-li');

	for (var i = 0; i < oNavLi.length; i++) {
		oNavLi[i].onmouseover = function(){
			var oLiChild = this.getElementsByClassName('u-nav-child')[0];
			oLiChild.className += " hover";
		}
		oNavLi[i].onmouseout = function(){
			var oLiChild = this.getElementsByClassName('u-nav-child')[0];
			oLiChild.className = "u-nav-child";
		}
	};
}