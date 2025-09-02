document.addEventListener(`DOMContentLoaded`, function () {
  // 스크롤이벤트를 함수하나만들어서 담아줌
  // if조건문으로 윈도우 너비값저장
  // 윈도우 너비값이 970이하면 스크롤 이벤트함수 실행
  // 이상이면 제거
  // 리사이징도 추가 - 새로고침누르지않아도 너비줄이거나 늘릴때 바로 적용됨

  // const windowWidth = window.innerWidth;
  // // 윈도우 너비 저장하는 함수

  // const scrollMobile = () => {
  //   window.addEventListener(`scroll`, () => {
  //     const scrollTopData = window.scrollY;
  //     console.log(scrollTopData);
  //     const header = document.querySelector(`.header-area`);

  //     if (scrollTopData >= 340) {
  //       header.classList.add(`scroll`);
  //     } else {
  //       header.classList.remove(`scroll`);
  //     }
  //   });
  // };

  // if (windowWidth <= 970) {
  //   scrollMobile();
  // } else {
  // }

  // // 윈도우 자동 리사이징
  // window.addEventListener("resize", () => {
  //   scrollMobile();
  // });

  // 원인: 리사이즈 때 붙였던 스크롤 리스너가 해제되지 않거나 중복으로 붙는 상황
  const header = document.querySelector(`.header-area`);

  // 스크롤만 담당하게 add/remove는 따로 관리
  const scrollMobile = () => {
    const scrollTopData = window.scrollY;
    // console.log(scrollTopData);
    if (scrollTopData >= 340) {
      header.classList.add(`scroll`);
    } else {
      header.classList.remove(`scroll`);
    }
  };

  // 현재 바인딩 상태 -> 스크롤이벤트 없음
  let isScrollBound = false;

  // 조건 충족 시에만 다시 등록
  const bindScroll = () => {
    if (!isScrollBound) {
      window.addEventListener(`scroll`, scrollMobile); // 콜백함수 안에 함수가 하나라면 호출의 형태가 아니라 함수이름만 써줘도 호출됨
      isScrollBound = true;
      // 현재 바인딩 상태 -> 스크롤이벤트 있음

      scrollMobile(); // 초기 1회 상태 맞춤
    }
  };
  const unbindScroll = () => {
    if (isScrollBound) {
      window.removeEventListener(`scroll`, scrollMobile);
      // removeEventListener : 이벤트를 제거하는 이벤트 핸들러
      isScrollBound = false;
      // 현재 바인딩 상태 -> 스크롤이벤트 다시 없음
    }
    header?.classList.remove(`scroll`); // 큰 화면 복귀 시 초기화
    // 옵셔널 체이닝 연산자 : 안전하게 속성 접근할 때 쓰는 문법
    // header 요소가 있으면 → .classList.remove('scroll') 실행 하라는 뜻!@!
  };

  // 970px 이하에서만 스크롤 동작
  const applyByWidth = () => {
    const windowWidth = window.innerWidth;
    // 먼저 모두 해제(혹시 중복 등록됐던 것들 정리)
    unbindScroll();
    if (windowWidth <= 970) bindScroll();
  };

  // 초기 적용
  applyByWidth();

  // 리사이즈 때 즉시 반영
  window.addEventListener("resize", applyByWidth);

  // -----------------------------------------------------------

  // 사업자정보 클릭이벤트
  const inforTitle = document.querySelector(`.bot-infor-txt1`);
  const infor = document.querySelector(`.bot-infor-txt2`);

  inforTitle.addEventListener(`click`, function () {
    infor.classList.toggle(`on`);
  });

  //서브메뉴 호버이벤트
  const submenuTab = document.querySelectorAll(`.menu-box li`);
  const subMenuBox = document.querySelector(`.sub-menu-box`);

  for (const li of submenuTab) {
    li.addEventListener(`mouseenter`, function () {
      subMenuBox.classList.add(`active`);

      // 탭메뉴 연결
      const tab = this.getAttribute(`data-tab`);
      // 이 아이는 html의 li 안에있는 데이터를 불러와준거임
      const subMenu = document.querySelectorAll(`.sub-menu`);

      // 전체적으로 서브메뉴 먼저제거
      for (const tabContent of subMenu) {
        tabContent.classList.remove(`active`);
      }

      // data-tab 에 작성된 데이터명과 동일한 아이디명을 가진 서브메뉴는 출력
      const changeTab = document.querySelector(`#${tab}`);
      changeTab.classList.add(`active`);
    });
  }

  // 서브메뉴박스에서 마우스 나가면 기존 상태로 변경
  subMenuBox.addEventListener(`mouseleave`, function () {
    this.classList.remove(`active`);
  });
}); //end
