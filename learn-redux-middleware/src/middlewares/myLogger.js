const myLogger = (store) => (next) => (action) => {
  console.log("myLogger", action); // 먼저 액션 출력
  const result = next(action); // 다음 미들웨어 (또는 리듀서)에게 액션 전달

  // 업데이트 이후의 상태를 조회
  console.log("myLogger\t", store.getState());
  return result; // 여기서 반환하는 값은 dispatch(action)의 결과물. 기본:undefined
};

export default myLogger;

// function middleware(store) {
//   return function (next) {
//     return function (action) {
//       // 하고 싶은 작업...
//     };
//   };
// };
