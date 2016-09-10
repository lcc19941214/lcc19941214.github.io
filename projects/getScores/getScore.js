// 请将下面的专业类别替换成实际专业类别
// 新闻 广告 广设 广电 播音 网传

(function() {
  window.type = '专业类别';
  var id = 'get_score_script';
  var script = document.createElement('script');
  script.id = id;
  script.setAttribute('src', 'http://achuan.me/projects/getScores/index_1473519067878.js');
  if (document.getElementById(id)) {
    document.body.replaceChild(script, document.getElementById(id));
  } else {
    document.body.appendChild(script);
  }
})();

