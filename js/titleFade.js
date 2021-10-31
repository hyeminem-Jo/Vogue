
// .fadelist ul 생성, 위치하기 -----------------------

// 타이틀애니 리스트 생성 배치 -----------------------

// fade 애니메이션 -----------------------
// var tn = 0;

// function titleFade() {

//   if (tn < 2) {
//     $(".fade li:eq(" + tn + ")").fadeOut(1000, function () {
//       $(".fade li:eq(" + tn + ")").next().removeClass("hide").hide().fadeIn(3000);
//       // $(".fade li:eq(" + tn + ")").next().fadeIn(3000);
//       tn++;
//       $('.tbodybg').remove();
//       $('body').prepend('<div class="tbodybg"></div>');
//       $('.bodybg').css('background-image', 'url(../img/bodybg' + tn + '.jpg)').hide().fadeIn(1000);
//     });
//   } else if (tn == 2) {
//     $(".fade li:eq(" + tn + ")").fadeOut(1000, function () {
//       tn = 0;
//       $(".fade li:eq(" + tn + ")").fadeIn(3000);
//       $('.bodybg').css('background-image', 'url(../img/bodybg' + tn + '.jpg)').hide().fadeIn(1000);
//     });
//   }

// }
// setInterval(titleFade, 5000);