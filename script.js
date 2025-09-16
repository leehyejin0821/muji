document.addEventListener(`DOMContentLoaded`, function () {
  const header = document.querySelector(`.header-area`);

  const scrollMobile = () => {
    const scrollTopData = window.scrollY;
    // console.log(scrollTopData);
    if (scrollTopData >= 340) {
      header.classList.add(`scroll`);
    } else {
      header.classList.remove(`scroll`);
    }
  };

  let isScrollBound = false;

  const bindScroll = () => {
    if (!isScrollBound) {
      window.addEventListener(`scroll`, scrollMobile);
      isScrollBound = true;

      scrollMobile();
    }
  };
  const unbindScroll = () => {
    if (isScrollBound) {
      window.removeEventListener(`scroll`, scrollMobile);
      isScrollBound = false;
    }
    header?.classList.remove(`scroll`);
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
