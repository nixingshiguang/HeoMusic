console.log("\n %c HeoMusic 开源静态音乐播放器 v1.5 %c https://github.com/zhheo/HeoMusic \n", "color: #fadfa3; background: #030307; padding:5px 0;", "background: #fadfa3; padding:5px 0;")
var volume = 0.8;

// 获取地址栏参数
// 创建URLSearchParams对象并传入URL中的查询字符串
const params = new URLSearchParams(window.location.search);

var heo = {
  // 音乐节目切换背景
  changeMusicBg: function (isChangeBg = true) {
    const heoMusicBg = document.getElementById("music_bg")

    // if (isChangeBg) {
    //   // player loadeddata 会进入此处
    //   const musiccover = document.querySelector("#heoMusic-page .aplayer-pic");
    //   var img = new Image();
    //   img.src = extractValue(musiccover.style.backgroundImage);
    //   img.onload = function() {
    //     heoMusicBg.style.backgroundImage = musiccover.style.backgroundImage;
    //   };
    // } else {
    // 第一次进入，绑定事件，改背景
    // let timer = setInterval(()=>{
    //   const musiccover = document.querySelector("#heoMusic-page .aplayer-pic");
    //   // 确保player加载完成
    //   // console.info(heoMusicBg);
    //   if (musiccover) {
    //     clearInterval(timer)
    //     //初始化音量
    //     document.querySelector('meting-js').aplayer.volume(0.2,true);
    //     // 绑定事件
    //     heo.addEventListenerChangeMusicBg();
    //   }
    // }, 100)
    // }
  },
  // addEventListenerChangeMusicBg: function () {
  //   const heoMusicPage = document.getElementById("heoMusic-page");
  //   heoMusicPage.querySelector("meting-js").aplayer.on('loadeddata', function () {
  //     heo.changeMusicBg();
  //     // console.info('player loadeddata');
  //   });
  // },
  getCustomPlayList: function () {
    const heoMusicPage = document.getElementById("heoMusic-page");
    const playlistType = params.get("type") || "playlist";

    if (params.get("id") && params.get("server")) {
      console.log("获取到自定义内容")
      var id = params.get("id")
      var server = params.get("server")
      heoMusicPage.innerHTML = `<meting-js id="${id}" server="${server}" type="${playlistType}" mutex="true" preload="auto" order="random"></meting-js>`;
    } else {
      console.log("无自定义内容")
      heoMusicPage.innerHTML = `<meting-js id="${userId}" server="${userServer}" type="${userType}" mutex="true" preload="auto" order="random"></meting-js>`;
    }
    heo.changeMusicBg(false);
  }
}

// 调用
heo.getCustomPlayList();
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
change_list.addEventListener("click", () => {
  if (second_level_list.style.display != "flex") {
    second_level_list.style.display = "flex";
  } else {
    second_level_list.style.display = "none";
  }
});

quanbu.addEventListener("click", function () {
  userId = "7947315801";
  second_level_list.style.display = "none";
  heo.getCustomPlayList();
});
ciqu.addEventListener("click", function () {
  userId = "7801901402";
  second_level_list.style.display = "none";
  heo.getCustomPlayList();
});
ci.addEventListener("click", function () {
  userId = "7801915516";
  second_level_list.style.display = "none";
  heo.getCustomPlayList();
});
qu.addEventListener("click", function () {
  userId = "9008544992";
  second_level_list.style.display = "none";
  heo.getCustomPlayList();
});
fanchang.addEventListener("click", function () {
  userId = "7895783898";
  second_level_list.style.display = "none";
  heo.getCustomPlayList();
});


// 改进vh
const vh = window.innerHeight * 1;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 1;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

//获取图片url
// function extractValue(input) {
//   var valueRegex = /\("([^\s]+)"\)/g;
//   var match = valueRegex.exec(input);
//   return match[1];
// }

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