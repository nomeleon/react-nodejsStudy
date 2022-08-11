import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const reponse = await axios.get(
        "https://apis.data.go.kr/B551011/KorService/areaBasedList?serviceKey=RaKTB3hA3JRDxMNjDRqbIzY2NLn6oWp1zEe4yrO8cK3m2CZiUntJX%2BAInm6OyIP4ggjwmDe0%2FOMTbC4lJcHaXQ%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=C"
      );
      setData(reponse.data);
    } catch (e) {
      console.log(e);
    }
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
          //stringify : 객체를 josn으로
          //parse : json을 객체로
          readOnly={true}
        />
      )}
    </div>
  );
};

export default App;
