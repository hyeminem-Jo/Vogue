# 보그 (vogue-korea)
> 보그 코리아 사이트를 리뉴얼한 반응형 웹사이트 프로젝트 입니다. 레이아웃으로 모바일, 태블릿, 데스크탑 형식으로 구성되어있습니다. 

![image](https://user-images.githubusercontent.com/83049523/169694102-af90cca9-2126-4d28-9c5c-e65330ad2632.png)


## 개요
본 프로젝트는 반응형 웹으로 디자인, 스크립트 등 전반적으로 새로운 기획을 거쳐 리뉴얼되었습니다. 본인 만의 방식으로 마크업 및 scss 를 작성하였으며 여러 기능들을 제이쿼리로 하드코딩하여 작업 해보았습니다.

### 사용된 언어 및 플러그인
- html / css / jQuery
- swiper-slider


## 주요 기능

### 1. 색상 팝업창
색상 버튼을 선택하면 해당 색상에 따른 색 팝업창이 뜨는 기능입니다. 색 요소들을 배열로 저장한 후 요소의 인덱스(index) 값을 추출하여 해당 색상이 뜰 수 있도록 구현되었습니다.

![image](https://user-images.githubusercontent.com/83049523/169694710-de3e0f5b-4f4e-4a59-a0b3-3786bb7889e8.png)

``` javascript
var colorBg = ["#9D0206", "#EBA19E", "#FA6F06", "#042470"];
var colorN; 

$("#fashion-color .full-size").click(function () {
  $("#fashion-color").append('<div class="color-pop"></div>');
  $(".color-pop").append('<button class="close" type="button">X</button>');
  $(".close").click(function () {
    $(".color-pop").remove();
  });

  colorN = $(this).parent().parent().index();
  $(".color-pop").css("background-color", colorBg[colorN]);
  $(".color-items li:eq(" + colorN + ") .color-info")
    .clone()
    .appendTo(".color-pop");
  $(".color-items li:eq(" + colorN + ") .color-copy")
    .clone()
    .appendTo(".color-pop .color-info");
  $(".color-pop .color-copy").append('<img src="img/c-btn_copy.svg" alt="">');
});
```

---

### 2. 동시 슬라이드

하나의 버튼으로 3개의 슬라이드가 동시에 동작하는 효과가 나타납니다. 공통 클래스를 가진 세 개의 슬라이드를 만든 후 슬라이드 요소의 순서를 하나씩 바꾸어 마치 다음 슬라이드 요소가 옆의 슬라이드에서 등장하는 듯한 모션을 만들어 보았습니다.

<!-- ![image](https://user-images.githubusercontent.com/83049523/169694990-0f32f39f-72bb-4948-ad15-62892cdfd710.png) -->
![image](https://user-images.githubusercontent.com/83049523/169695051-270c098f-07e6-4182-9de7-01bec98f308a.png)

<img width="751" alt="image" src="https://user-images.githubusercontent.com/83049523/169695092-da2e477f-66a2-4d42-96c5-0722c5b2b8b7.png">

``` javascript
const mySwiper = new Swiper(".runway__slide .swiper-container", {
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,
  speed: 800,
  loop: true,
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".runway__slide .swiper-prev",
    nextEl: ".runway__slide .swiper-next",
  },
});
```

---

## 프로젝트 의의
디자인을 과감한 레이아웃으로 구성한 만큼, 평소 시도해보지 않았던 기능 들을 구현하게 되었습니다. 예로 Hot Issue 섹션에 사용된 기능의 경우 css 의 새로운 속성인 sticky 를 이용할 수 있었지만, 제이쿼리를 이용하여 하드코딩으로 구현한것을 들 수 있습니다. 또한 swiper slide 플러그인을 사용하면서, 슬라이드 되는 home 배경을 fixed 하여 parallax 효과를 구현한 점, 또는 Runway 섹션에서 다수의 슬라이드를 동시에 동작되게 하는 등 다양한 시도를 함으로써 제이쿼리를 활용하거나, 플러그인을 응용하는 능력을 길렀습니다.