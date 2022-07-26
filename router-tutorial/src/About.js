/* eslint-disable */
import React from "react";
import qs from "qs";
import { useLocation } from "react-router";
import { useSearchParams } from "react-router-dom";

// const About = () => {
//   return (
//     <div>
//       <h1>소개</h1>
//       <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트입니다.</p>
//     </div>
//   );
// };

// const About = () => {
//   const location = useLocation();
//   return (
//     <div>
//       <h1>소개</h1>
//       <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트입니다.</p>
//       <p>쿼리스트링: {location.search}</p>
//     </div>
//   );
// };

const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  const detail = searchParams.get("detail");
  const mode = searchParams.get("mode");

  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === "true" ? false : true });
  };

  const onIncreaseMode = () => {
    console.log(mode);
    const nextMode = mode === "null" ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트입니다.</p>
      <p>detail : {detail}</p>
      <p>mode : {mode}</p>
      <button onClick={onToggleDetail}>toggle</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
    </div>
  );
};

// const About = ({ location }) => {
//   const query = qs.parse(location.search, {
//     ignoreQueryPrefix: true // 이 설정을 통하여 문자열 맨 앞의 ? 를 생략합니다.
//   });
//   const showDetail = query.detail === 'true'; // 쿼리의 파싱 결과값은 문자열입니다.
//   return (
//     <div>
//       <h1>소개</h1>
//       <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트입니다.</p>
//       {showDetail && <p>detail 값을 true 로 설정하셨군요!</p>}
//     </div>
//   );
// };

export default About;
