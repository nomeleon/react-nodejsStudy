/* global naver */

const NaverMap = () => {
  var map = new naver.maps.Map("map", {
    center: new naver.maps.LatLng(37.3595704, 127.105399),
    zoom: 10,
  });

  return <div id="map" style="width:100%;height:400px;"></div>;
};

export default NaverMap;
