/* global kakao */
import React, { useEffect } from "react";
import cn from "classnames";

const { kakao } = window;

const Map = () => {
  useEffect(() => {
    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    var map = new kakao.maps.Map(container, options);
    //     var markerPosition  = new kakao.maps.LatLng(37.365264512305174, 127.10676860117488);
    //     var marker = new kakao.maps.Marker({
    //       position: markerPosition
    //   });
    //   marker.setMap(map);
    console.log("loading kakaomap");
  }, []);

  return (
    <div>
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </div>
  );
};

export default Map;
