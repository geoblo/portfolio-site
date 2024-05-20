// ScrollMagic 사용
// 그 외 scrollreveal 추천!
let spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  // 메소드 체이닝
  new ScrollMagic.Scene({ // 감시할 장면(Scene) 추가 및 옵션 지정
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.5 // 화면의 50% 지점에서 보여짐 여부 감시(0~1사이 지정)
  })
  .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
  .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수!) - 라이브러리에서 지정한 문법으로 깊게 이해X
});

// 모달창에 영상 띄우기
let modalEl = document.querySelector('#modal');
let videoEl = document.querySelector('#modal video');
let playBtnList = document.querySelectorAll('.btn-play');
let closeBtn = document.querySelector('.btn-close');

// 본인 포트폴리오 영상을 작성할 것!
// 예: 'videos/portfolio1.mp4'
let portfolioList = ['videos/movie1.mp4', 'videos/movie2.mp4', 'videos/portfolio3.mp4', 'videos/portfolio4.mp4', ];

playBtnList.forEach(function (playBtn, index) {
  playBtn.addEventListener('click', function () {
    videoEl.src = portfolioList[index];
    videoEl.play(); // 재생시키고 싶지 않다면 코드 제거
    modalEl.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', function () {
  videoEl.pause();
  modalEl.style.display = 'none';
});

// 현재 연도 표시
// 날짜 정보를 가진 JS의 Date 객체를 활용(JS 기본 제공 객체: 여러 데이터들의 묶음)
let thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 현재 연도의 정보가 숫자 데이터로 반환됨

// 페이지 최상단으로 이동
let toTopEl = document.querySelector('#to-top');

// 페이지에 스크롤 이벤트 감지를 추가!
// window: 브라우저 창 객체
window.addEventListener('scroll', function () {
  // console.log(window.scrollY); // (y축으로 얼마나 스크롤 했는지) 페이지 스크롤 위치

  // 페이지 스크롤 위치가 
  // 500px을 넘으면 요소를 보이고, 
  // 500px을 넘지 않으면 요소 숨기기!
  if (window.scrollY > 500) {
    // 요소 보이기!
    // toTopEl.style.display = 'flex';
    // Tip! 애니메이션 처리를 하고 싶다면
    toTopEl.style.opacity = 1;
    // toTopEl.style.visibility = 'visible';
    toTopEl.style.transform = 'translateX(0)';
  } else {
    // 요소 숨기기!
    // toTopEl.style.display = 'none';
    // Tip! 애니메이션 처리를 하고 싶다면
    toTopEl.style.opacity = 0;
    // toTopEl.style.visibility = 'hidden';
    toTopEl.style.transform = 'translateX(100px)';
  }
});