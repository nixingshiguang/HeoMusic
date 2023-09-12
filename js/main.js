console.log("\n %c HeoMusic 开源静态音乐播放器 v1.5 %c https://github.com/zhheo/HeoMusic \n", "color: #fadfa3; background: #030307; padding:5px 0;", "background: #fadfa3; padding:5px 0;")
var volume = 0.8;
function getPlayList() {
  var heoMusicPage = document.getElementById("heoMusic-page");
  heoMusicPage.innerHTML = `<meting-js id="${userId}" server="${userServer}" type="${userType}" mutex="true" preload="auto" order="random"></meting-js>`;
}

// 首次加载调用
getPlayList();

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

// 我加的代码
// 切换播放列表开始

// 点击打开切换播放列表
document.getElementById("list-name").addEventListener("click", function () {
  document.getElementById("dialog").showModal()
})

// 切换二级选择列表
const platformselect = document.getElementById("platformselect");
const playlistselect = document.getElementById("playlistselect");

platformselect.addEventListener("change", () => {
  //获取平台
  let selectedplatform = platformselect.options[platformselect.selectedIndex].value;
  console.log(selectedplatform);

  // 清空播放列表下拉列表 
  playlistselect.innerHTML = "";

  // 根据选中的平台动态添加播放列表选项  
  if (selectedplatform == "tencent") {
    // qq音乐播放列表选项
    var listOptions = ["全部", "词曲", "作词", "作曲", "翻唱"];
    // qq音乐播放列表id
    var listnum = ["7947315801", "7801901402", "7801915516", "9008544992", "7895783898"]
    for (var i = 0; i < listOptions.length; i++) {
      var option = document.createElement("option");
      option.text = listOptions[i];
      option.value = listnum[i];
      playlistselect.add(option);
    }
  } else {
    // 网易云选项
    var listOptions = ["专属"];
    // 网易云播放列表id
    var listnum = ["8728418784"];
    for (var i = 0; i < listOptions.length; i++) {
      var option = document.createElement("option");
      option.text = listOptions[i];
      option.value = listnum[i];
      playlistselect.add(option);
    }
  }
})

// 监听弹窗关闭并切换播放列表
document.getElementById("dialog").addEventListener("close", () => {
  userServer = platformselect.value;
  userId = playlistselect.value;
  // 重新加载播放列表
  getPlayList();
})

// 切换播放列表结束