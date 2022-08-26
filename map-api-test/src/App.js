import React, { useEffect } from "react";
import Map from "./Map";
import NaverMap from "./NaverMap";

function App() {
  // return <Map></Map>;
  // return <NaverMap />;

  useEffect(() => {
    const mapDiv = document.getElementById("map");
    const map = new window.naver.maps.Map(mapDiv);
  }, []);

  return (
    <div>
      <div id="map" style={{ width: "400px", height: "400px" }} />
    </div>
  );
}

export default App;
