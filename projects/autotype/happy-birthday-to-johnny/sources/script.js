var ROOT_PATH  = '/projects/autotype/happy-birthday-to-johnny/';

var sentences = [
  '你眷恋的',
  '都已离去',
  ' ',
  '我在等你敲碎我的冰',
  '充分接触空气然后开始融化',
  '水位上涨',
  '濒临决堤',
  '我在等你奋力挥舞锄头',
  '抛洒炽热香甜的汗',
  '沿着两岸',
  '种下种子',
  '我在等你午后满足的睡醒',
  '到处是云到处是雨',
  '穿上雨衣',
  '和毛线袜',
  '如此周而复始直到',
  '你厌烦地用息壤把我充满毫无',
  '退路毫无解释',
  '我也还在等你',
  '扑通一声落水熄灭的',
  '流星',
  ' ',
  '壮阳，生日快乐'
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

player.on('play', function () {
  if (!flag) {
    showElement('.container');
    setTimeout(function() {
      startType();
    }, 2000);
    flag = true;
  }
});
