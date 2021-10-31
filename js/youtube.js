
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() { 
  new YT.Player('player', { 
    videoId: '76LepBimJvg',
    playerVars: {
      autoplay: true, 
      loop: true, 
      playlist: '76LepBimJvg' 
    },
    events: {
      onReady: function (event) {
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