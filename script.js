document.addEventListener(`DOMContentLoaded`, function () {
  // 스크롤이벤트를 함수하나만들어서 담아줌
  // if조건문으로 윈도우 너비값저장
  // 윈도우 너비값이 970이하면 스크롤 이벤트함수 실행
  // 이상이면 제거
  // 리사이징도 추가 - 새로고침누르지않아도 너비줄이거나 늘릴때 바로 적용됨

  const windowWidth = window.innerWidth;
  // 윈도우 너비 저장하는 함수

  const scrollMobile = () => {
    window.addEventListener(`scroll`, () => {
      const scrollTopData = window.scrollY;
      console.log(scrollTopData);
      const header = document.querySelector(`.header-area`);

      if (scrollTopData >= 340) {
        header.classList.add(`scroll`);
      } else {
        header.classList.remove(`scroll`);
      }
    });
  };

  if (windowWidth <= 970) {
    scrollMobile();
  } else {
  }

  // 윈도우 자동 리사이징
  window.addEventListener("resize", () => {
    scrollMobile();
  });

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

  // 수정완료
}); //end
