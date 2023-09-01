console.log("\n %c HeoMusic 开源静态音乐播放器 v1.5 %c https://github.com/zhheo/HeoMusic \n", "color: #fadfa3; background: #030307; padding:5px 0;", "background: #fadfa3; padding:5px 0;")
var volume = 0.8;
function getPlayList () {
  var heoMusicPage = document.getElementById("heoMusic-page");
heoMusicPage.innerHTML = `<meting-js id="${userId}" server="${userServer}" type="${userType}" mutex="true" preload="auto" order="random"></meting-js>`;
}

// 调用
getPlayList();
//自定义
//获取各种元素
var change_list = document.getElementById("change-list");
var second_level_list = document.getElementById("second-level-list");
var quanbu = document.getElementById("quanbu");
var ciqu = document.getElementById("ciqu");
var ci = document.getElementById("ci");
var qu = document.getElementById("qu");
var fanchang = document.getElementById("fanchang");
//点击切换列表弹出选择
change_list.addEventListener("click", (event) => {
  event.stopPropagation();
  if (second_level_list.style.display != "flex") {
    second_level_list.style.display = "flex";
  } else {
    second_level_list.style.display = "none";
  }
});

quanbu.addEventListener("click", function (event) {
  event.stopPropagation();
  userId = "7947315801";
  second_level_list.style.display = "none";
  getPlayList();
});
ciqu.addEventListener("click", function (event) {
  event.stopPropagation();
  userId = "7801901402";
  second_level_list.style.display = "none";
  getPlayList();
});
ci.addEventListener("click", function (event) {
  event.stopPropagation();
  userId = "7801915516";
  second_level_list.style.display = "none";
  getPlayList();
});
qu.addEventListener("click", function (event) {
  event.stopPropagation();
  userId = "9008544992";
  second_level_list.style.display = "none";
  getPlayList();
});
fanchang.addEventListener("click", function (event) {
  event.stopPropagation();
  userId = "7895783898";
  second_level_list.style.display = "none";
  getPlayList();
});


// 改进vh
const vh = window.innerHeight * 1;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 1;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

//空格控制音乐
document.addEventListener("keydown", function (event) {
  //暂停开启音乐
  if (event.code === "Space") {
    event.preventDefault();
    document.querySelector('meting-js').aplayer.toggle();
  };
  //切换下一曲
  if (event.keyCode === 39) {
    event.preventDefault();
    document.querySelector('meting-js').aplayer.skipForward();
  };
  //切换上一曲
  if (event.keyCode === 37) {
    event.preventDefault();
    document.querySelector('meting-js').aplayer.skipBack();
  }
  //增加音量
  if (event.keyCode === 38) {
    if (volume <= 1) {
      volume += 0.1;
      document.querySelector('meting-js').aplayer.volume(volume, true);
    }
  }
  //减小音量
  if (event.keyCode === 40) {
    if (volume >= 0) {
      volume += -0.1;
      document.querySelector('meting-js').aplayer.volume(volume, true);
    }
  }
});