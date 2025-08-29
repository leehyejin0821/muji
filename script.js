document.addEventListener(`DOMContentLoaded`, function () {
  // //scoll event
  // window.addEventListener(`scroll`, () => {
  //   //윈도우에 스크롤할때 (document에 스크롤해도됨)
  //   //변수를 설정해서 스크롤 상단값 저장
  //   const scrollTopData = window.scrollY;

  //   console.log(scrollTopData);

  //   const header = document.querySelectorAll(`.header-area`);

  //   if (scrollTopData >= 510) {
  //     for (let on of header) {
  //       on.classList.add(`scroll`);
  //     }
  //   } else {
  //     for (let on of header) {
  //       on.classList.remove(`scroll`);
  //     }
  //   }
  // });

  const windowWidth = window.innerWidth;
  // 윈도우 너비 저장하는 함수

  const scrollMobile = () => {
    // if (windowWidth <= 970) {
    // } else {
    // }
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
}); //end

// 스크롤이벤트를 함수하나만들어서 담아줌
// if조건문으로 윈도우 너비값저장
// 윈도우 너비값이 970이하면 스크롤 이벤트함수 실행
// 이상이면 제거
// 리사이징도 추가 - 새로고침누르지않아도 너비줄이거나 늘릴때 바로 적용됨
