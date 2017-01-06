var ROOT_PATH  = '/projects/autotype/happy-birthday-to-elvira/';

var sentences = [
  '愿有所息',
  '生无所息',
  ' ',
  '没有人是一座孤岛',
  '可以自全',
  '每个人都是大陆的一片',
  '整体的一部分',
  '如果海水冲掉一块',
  '欧洲就减小',
  '如同一个海岬失掉一角',
  '如同你的朋友',
  '或者你自己的领地失掉一块',
  '任何人的死亡都是我的损失',
  '因为我是人类的一员',
  '因此不要问丧钟为谁而鸣',
  '它就为你而鸣'
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
        title: '我要你',
        author: '任素汐',
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
