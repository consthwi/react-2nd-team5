export const responsiveTop = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1.6, // 예를 들어 데스크탑에서는 4개의 카드가 보이도록 설정
  },
  tablet: {
    breakpoint: { max: 1224, min: 754 },
    items: 1, // tablet에서 한 번에 5개의 카드가 보이도록 설정
  },
  mobile: {
    breakpoint: { max: 754, min: 10 },
    items: 0.2, // 모바일에서 한 번에 3개의 카드가 보이도록 설정ㅞ
  },
};
