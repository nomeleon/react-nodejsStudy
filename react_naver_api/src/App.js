/* eslint-disable */
//yarn add axios
import React, { useState } from 'react';
import axios from 'axios';
import EncycList from './components/EncycList';
import { Routes, Route, Router } from '../node_modules/react-router-dom/index';

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<EncycList />} />
//     </Routes>
//   );
// };
// const App = () => {
//   const [data, setData] = useState(null);

//   const NAVER_CLIENT_ID = 'ir3vWsGnql5HVjuMKodQ';
//   const NAVER_CLIENT_SECRET = '9xYnqTe25x';

//   const onClick = () => {
//     axios
//       .get('/v1/search/encyc', {
//         params: {
//           query: '한글', // 이미지 검색 텍스트
//           start: 1, // 검색 시작 위치
//           display: 5, // 가져올 이미지 갯수
//         },
//         headers: {
//           'X-NAVER-Client-Id': NAVER_CLIENT_ID,
//           'X-NAVER-Client-Secret': NAVER_CLIENT_SECRET,
//         },
//       })
//       .then((response) => {
//         setData(response.data);
//       });
//   };
//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
//       {/*
//       lastBuildDate / datetime :  검색 결과를 생성한 시간이다.
//       total / int : 검색 결과 문서의 총 개수를 의미한다.
//       start / int : 검색 결과 문서 중, 문서의 시작점을 의미한다.
//       display / int : 	검색된 검색 결과의 개수이다.
//       items{
//         title /string : 검색 결과 사전 정의의 제목을 나타낸다.
//         link /string : 사전 정의 정보 및 추가 정보를 볼 수 있는 link를 제공한다. link값은 두산 백과사전 사이트의 해당 페이지로 연결된다.
//         description /string : 검색 결과 문서의 내용을 요약한 패시지 정보이다. 문서 전체의 내용은 link를 따라가면 읽을 수 있다. 패시지에서 검색어와 일치하는 부분은 태그로 감싸져 있다.
//         thumbnail /string : 검색 결과에 이미지가 포함된 경우, 해당 이미지의 썸네일 link url을 나타낸다.
//       }
//       */}
//       {data && (
//         <textarea
//           rows={7}
//           value={JSON.stringify(data, null, 2)}
//           readOnly={true}
//         />
//       )}
//     </div>
//   );
// };
// "proxy": "https://openapi.naver.com",

const App = () => {
  const [data, setData] = useState(null);

  const onClick = () => {
    axios
      .get('/rest/KorService/areaCode', {
        params: {
          ServiceKey:
            'RaKTB3hA3JRDxMNjDRqbIzY2NLn6oWp1zEe4yrO8cK3m2CZiUntJX%2BAInm6OyIP4ggjwmDe0%2FOMTbC4lJcHaXQ%3D%3D', // 공공데이터포털에서 발급받은 인증키
          MobileOS: 1, // IOS (아이폰), AND (안드로이드), WIN (원도우폰), ETC
          MobileApp: 5, // 	서비스명=어플명
        },
      })
      .then((response) => {
        setData(response.data);
      });
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>

      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
};

export default App;
