import React, { useEffect, useState } from "react";
import axios from "../node_modules/axios/index";
import Map from "./Map";
import NaverMap from "./NaverMap";

// function App() {
// return <Map></Map>;
// return <NaverMap />;

//   useEffect(() => {
//     const mapDiv = document.getElementById("map");
//     const map = new window.naver.maps.Map(mapDiv);
//   }, []);

//   return (
//     <div>
//       <div id="map" style={{ width: "400px", height: "400px" }} />
//     </div>
//   );
// }

const App = () => {
  const [data, setData] = useState(null);

  const NAVER_CLIENT_ID = "nbyudojtl1";
  const NAVER_CLIENT_SECRET = "SHGv3iw1BxZy6GQ7Xx1uBn8uNlJwXvKNowC9Yaiu";

  const onClick = () => {
    axios
      .get(
        "https://naveropenapi.apigw.ntruss.com/map-direction/v1/driving?start=127.1058342,37.359708&goal=129.075986,35.179470&option=trafast",
        {
          headers: {
            "X-NAVER-Client-Id": NAVER_CLIENT_ID,
            "X-NAVER-Client-Secret": NAVER_CLIENT_SECRET,
          },
        }
      )
      .then((response) => {
        setData(response.data);
        console.log(data);
      });
  };

  useEffect(() => {
    onClick();
  }, []);
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>{" "}
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
