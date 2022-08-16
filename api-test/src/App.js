import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState(null);
  const serviceKey =
    "RaKTB3hA3JRDxMNjDRqbIzY2NLn6oWp1zEe4yrO8cK3m2CZiUntJX%2BAInm6OyIP4ggjwmDe0%2FOMTbC4lJcHaXQ%3D%3D";

  const get_festival_api = async () => {
    try {
      const reponse = await axios.get(
        `https://apis.data.go.kr/B551011/KorService/areaBasedList?serviceKey=${serviceKey}`,
        {
          params: {
            numOfRows: 10, //한페이지결과수
            pageNo: 1, //페이지번호
            MobileOS: "ETC", //OS 구분 : IOS (아이폰), AND (안드로이드), WIN (윈도우폰), ETC(기타)
            MobileApp: "AppTest", //서비스명(어플명)
            _type: "json", //응답메세지 형식
            listYN: "Y", //목록구분(Y=목록, N=개수)
            arrange: "C", //정렬구분(A=제목순, B=조회순, C=수정일순, D=생성일순)대표이미지가반드시있는정렬(O=제목순, P=조회순, Q=수정일순, R=생성일순)

            //areaCode 지역코드
            //sigunguCode 시군구코드
            //eventStartDate 행사시작일(형식 :YYYYMMDD)
            //eventEndDate 행사종료일(형식 :YYYYMMDD)
            //modifiedtime 콘텐츠 수정일(형식:YYYYMMDD)
          },
        }
      );
      setData(reponse.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div>
        <button onClick={get_festival_api}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          //stringify : 객체를 josn으로
          //parse : json을 객체로
          readOnly={true}
        />
      )}
    </div>
  );
};

export default App;
