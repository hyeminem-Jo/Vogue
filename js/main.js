
// Set a same-site cookie for first-party contexts
document.cookie = 'cookie1=value1; SameSite=Lax';
// Set a cross-site cookie for third-party contexts
document.cookie = 'cookie2=value2; SameSite=None; Secure';

// document.cookie = "safeCookie1=foo; SameSite=Lax";
// document.cookie = "safeCookie2=foo";
// document.cookie = "crossCookie=bar; SameSite=None; Secure";

// Trigger로 SiteMap 열기 --------------------------
$('.site-map').hide().slideUp()
$('.trigger').click(function () {
  $('.site-map').slideToggle()
  $('body').toggleClass('overflow-hidden');
  $('.trigger span').toggleClass('close')
})

// Title 슬라이드 --------------------------
const mySwiper02 = new Swiper("#title .swiper-container", {
  sliderPerView: 1,
  spaceBetween: 0,
  effect: "fade",
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: "#title .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: "#title .swiper-prev",
    nextEl: "#title .swiper-next",
  },
});

$("#search input").focus(function () {
  $("#search .fa-search").css("color", "red");
});

$("#search input").blur(function () {
  $("#search .fa-search").css("color", "#666");
});

// Runway 슬라이드 --------------------------
const mySwiper = new Swiper(".runway__slide .swiper-container", {
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,
  speed: 800,
  loop: true,
  // autoplay: {
  //   delay: 5000
  // },
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".runway__slide .swiper-prev",
    nextEl: ".runway__slide .swiper-next",
  },
});

// fashion-color 슬라이드 --------------------------
const mySwiper03 = new Swiper("#fashion-color .swiper-container", {
  slidesPerView: 1,
  spaceBetween: 0,
  effect: "fade",
  speed: 0,
  loop: true,
  autoplay: {
    delay: 1000,
  },
});

// fashion-color 슬라이드 호버 시 autoplay 멈춤
$("#fashion-color .swiper-container").each(function (elem, target) {
  var swp = target.swiper;
  $(this).hover(
    function () {
      swp.autoplay.stop();
    },
    function () {
      swp.autoplay.start();
    }
  );
});

// fashion-color full-size 팝업창 효과 --------------------------
var colorBg = ["#9D0206", "#EBA19E", "#FA6F06", "#042470"];
var colorN; // 인덱스 값 부여
$("#fashion-color .full-size").click(function () {
  $("#fashion-color").append('<div class="color-pop"></div>');
  $(".color-pop").append('<button class="close" type="button">X</button>');
  $(".close").click(function () {
    $(".color-pop").remove();
  });

  // fashion-color full-size 팝업창 색 지정
  colorN = $(this).parent().parent().index();
  $(".color-pop").css("background-color", colorBg[colorN]);
  // 하단 항목 복제 붙여넣기
  $(".color-items li:eq(" + colorN + ") .color-info")
    .clone()
    .appendTo(".color-pop");
  $(".color-items li:eq(" + colorN + ") .color-copy")
    .clone()
    .appendTo(".color-pop .color-info");
  $(".color-pop .color-copy").append('<img src="img/c-btn_copy.svg" alt="">');
});

// 스크롤 변수/배열 생성 --------------------------
var po1 = $("#title").offset().top;
var po2 = Math.floor($("#hotissue").offset().top);
var po3 = Math.floor($("#fashion-color").offset().top);
var po4 = Math.floor($("#runway").offset().top);
var po = [po1, po2, po3, po4];
var n;

$(window).resize(function () {
  po2 = Math.floor($("#hotissue").offset().top);
  po3 = Math.floor($("#fashion-color").offset().top);
  po4 = Math.floor($("#runway").offset().top);
  po = [po1, po2, po3, po4];
});

// 스크롤 효과 -----------------------
// 스크롤 시 #top 대메뉴 효과 -----------------------

$(window).scroll(function () {
  var st = $(window).scrollTop();
  if (st > 0) {
    $("#top, .gnb, #title, .navi__logo").addClass("h-current");
  } else {
    $("#top, .gnb, #title, .navi__logo").removeClass("h-current");
  }

  // Hotissue aside 스크롤 효과 --------------------------
  if ($(window).scrollTop() > po2 + 50) {
    $("#hotissue .side-about").css({
      position: "fixed",
    });
  } else {
    $("#hotissue .side-about").css({
      position: "absolute",
    });
  }

  if ($(window).scrollTop() > po3 - 780) {
    $("#hotissue .side-about").css({
      position: "absolute",
    });
    $("#hotissue .side-about-clone").css({
      opacity: "1",
    });
  } else if ($(window).scrollTop() < po3 - 780) {
    $("#hotissue .side-about-clone").css({
      opacity: "0",
    });
  }
});