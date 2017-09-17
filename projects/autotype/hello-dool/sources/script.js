var ROOT_PATH = '/projects/autotype/hello-dool/';

var sentences = [
  '《致橡树》',
  '我如果爱你——',
  '绝不像攀援的凌霄花',
  '借你的高枝炫耀自己：',
  '我如果爱你——',
  '绝不学痴情的鸟儿',
  '为绿荫重复单调的歌曲；',
  '也不止像泉源',
  '常年送来清凉的慰籍；',
  '也不止像险峰',
  '增加你的高度',
  '衬托你的威仪',
  '甚至日光',
  '甚至春雨',
  '不，这些都还不够！',
  '我必须是你近旁的一株木棉',
  '做为树的形象和你站在一起',
  '根，紧握在地下',
  '叶，相触在云里',
  '每一阵风过',
  '我们都互相致意',
  '但没有人',
  '听懂我们的言语',
  '你有你的铜枝铁干',
  '像刀，像剑',
  '也像戟',
  '我有我的红硕花朵',
  '像沉重的叹息',
  '又像英勇的火炬',
  '我们分担寒潮、风雷、霹雳；',
  '我们共享雾霭流岚、虹霓',
  '仿佛永远分离',
  '却又终身相依',
  '这才是伟大的爱情',
  '坚贞就在这里：',
  '不仅爱你伟岸的身躯',
  '也爱你坚持的位置',
  '脚下的土地'
];

function showElement(selector, speed = 800) {
  var container = document.querySelector(selector);
  var opacity = container.style.opacity || 0;
  var timer;

  function show() {
    if (opacity >= 1) {
      clearInterval(timer);
    } else {
      opacity += 10 / speed;
      container.style.opacity = opacity;
      setTimeout(show, 10);
    }
  }

  timer = setTimeout(show, 10);
}

function startType() {
  superplaceholder({
    el: document.querySelector('input') || document.getElementById('input'),
    sentences: sentences,
    options: {
      // delay between letters (in milliseconds)
      letterDelay: 200, // milliseconds
      // delay between sentences (in milliseconds)
      sentenceDelay: 1700,
      // should start on input focus. Set false to autostart
      startOnFocus: false,
      // loop through passed sentences
      loop: false,
      // Initially shuffle the passed sentences
      shuffle: false,
      // Show cursor or not. Shows by default
      showCursor: true,
      // String to show as cursor
      cursor: '|'
    }
  });
}

function randomBgColor() {
  var className = 'bg-color-';
  var timer;

  function changeColor() {
    var key = (Math.floor(Math.random() * 100) % 9).toString();
    document.body.className = className + key;
    setTimeout(changeColor, 3000);
  }

  timer = setTimeout(changeColor, 3000);
}

var player = new APlayer({
  element: document.getElementById('player'),
  narrow: true,
  autoplay: false,
  showlrc: false,
  mutex: true,
  theme: '#e6d0b2',
  preload: 'metadata',
  mode: 'circulation',
  music: {
    title: '突然好想你',
    author: '五月天',
    // url: 'http://devtest.qiniudn.com/Preparation.mp3',
    // pic: 'http://devtest.qiniudn.com/Preparation.jpg'
    url: ROOT_PATH + 'sources/audio.mp3',
    pic: ROOT_PATH + 'sources/cover.png'
  }
});

window.onload = function() {
  randomBgColor();
};

var flag = false;

player.on('play', function() {
  if (!flag) {
    showElement('.container');
    setTimeout(function() {
      startType();
    }, 2000);
    flag = true;
  }
});
