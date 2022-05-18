var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: '8iTtcYQO_60',
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: '8iTtcYQO_60', // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      onReady: function(event) {
        event.target.mute() 
      }
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

var done = false;

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}

function stopVideo() {
  player.stopVideo();
}