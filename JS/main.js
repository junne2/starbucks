// 베너 사라지게하는법----------------------------------------------------------------------
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');


window.addEventListener('scroll', _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
        // 배지 숨기기
        // gsap.to(요소,지속시간,옵션)
        gsap.to(badgeEl, .6, {
            opacity: 0,
            // 디스플레이에 영역이 클릭되지 않게 만듬
            display: 'none'
        });
        // 버튼보이기
        gsap.to(toTopEl, .2, {
          x:0
        });
    } else {
        // 배지 보이기
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
        // 버튼 숨기기
        gsap.to(toTopEl, .2, {
          x: 100
        });
    }
// _.throttle(함수, 시간)
}, 300 ));

// 상단 스크롤 버튼 내용
toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});



// 세션 이미지 순차적 생성-------------------------------------------------------------
const fadeELs = document.querySelectorAll('.visual .fade-in');
fadeELs.forEach(function (fadeEL, index){
  gsap.to(fadeEL, 1, {
    delay: (index + 1) * .7, // 0.7, 1.4, 2.1, 2.7
    opacity: 1 // 1초 동안나타남
  });
});
// 개인적 추가
const innerLeftEl = document.querySelector('.notice-line .inner__left ');
const addCircleBtn = innerLeftEl.querySelector('.swiper-container');
innerLeftEl.addEventListener('click',function () {
  //Logic..
  addCircleBtn.focus();
});


// 공지사항 슬라이드 생성
// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  centeredSlides: true,
  loop: true
});

new Swiper('.promotion .swiper-container',{
  slidesPerView: 3, // 한번에 보일 슬라이드 수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번슬라이드가 가운데 보이기
  loop: true, // 반복하는 방법
  // autoplay: {
  //   delay: 5000 // 5초 자동 슬라이드 
  // }
  pagination:{
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어
    },
    navigation: {
      prevEl:'.promotion .swiper-prev',
      nextEl:'.promotion .swiper-next'
    }
});
new Swiper('.awards .swiper-container', {
  autoplay:true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl:'.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion  // 지속적으로 반대값을 호출
  if (isHidePromotion) {
    // 숨김 처리!
    promotionEl.classList.add('hide')
  } else {
    // 보임 처리!
    promotionEl.classList.remove('hide')
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

// 영상쪽 애니메이션 넣기 스티커 3개
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간 , 옵션);
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 5, 15);
floatingObject('.floating3', 1.5, 20);

// 스크롤매직
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소
      triggerHook: 0.8 
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});


