var request = require("request");
const express = require("express");
const path = require("path");

const app = express();
app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
  res.send("Hello, Express");
  //   res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});

//지역 코드
// var url =
//   "http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaCode";
// var queryParams =
//   "?" +
//   encodeURIComponent("serviceKey") +
//   "=RaKTB3hA3JRDxMNjDRqbIzY2NLn6oWp1zEe4yrO8cK3m2CZiUntJX%2BAInm6OyIP4ggjwmDe0%2FOMTbC4lJcHaXQ%3D%3D"; /* Service Key*/
// queryParams +=
//   "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("10"); /* */
// queryParams +=
//   "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /* */
// queryParams +=
//   "&" + encodeURIComponent("MobileOS") + "=" + encodeURIComponent("ETC"); /* */
// queryParams +=
//   "&" +
//   encodeURIComponent("MobileApp") +
//   "=" +
//   encodeURIComponent("AppTest"); /* */
// queryParams +=
//   "&" + encodeURIComponent("areaCode") + "=" + encodeURIComponent("1"); /* */

// request(
//   {
//     url: url + queryParams,
//     method: "GET",
//   },
//   function (error, response, body) {
//     console.log("Status", response.statusCode);
//     console.log("Headers", JSON.stringify(response.headers));
//     console.log("Reponse received", body);
//   }
// );

//행사정보
var url =
  "http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchFestival";
var queryParams =
  "?" +
  encodeURIComponent("serviceKey") +
  "=RaKTB3hA3JRDxMNjDRqbIzY2NLn6oWp1zEe4yrO8cK3m2CZiUntJX%2BAInm6OyIP4ggjwmDe0%2FOMTbC4lJcHaXQ%3D%3D"; /* Service Key*/
queryParams +=
  "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("10"); /* */
queryParams +=
  "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /* */
queryParams +=
  "&" + encodeURIComponent("MobileOS") + "=" + encodeURIComponent("ETC"); /* */
queryParams +=
  "&" +
  encodeURIComponent("MobileApp") +
  "=" +
  encodeURIComponent("AppTest"); /* */
queryParams +=
  "&" + encodeURIComponent("arrange") + "=" + encodeURIComponent("A"); /* */
queryParams +=
  "&" + encodeURIComponent("listYN") + "=" + encodeURIComponent("Y"); /* */
queryParams +=
  "&" + encodeURIComponent("areaCode") + "=" + encodeURIComponent(""); /* */
queryParams +=
  "&" + encodeURIComponent("sigunguCode") + "=" + encodeURIComponent(""); /* */
queryParams +=
  "&" +
  encodeURIComponent("eventStartDate") +
  "=" +
  encodeURIComponent("20170901"); /* */
queryParams +=
  "&" + encodeURIComponent("eventEndDate") + "=" + encodeURIComponent(""); /* */
queryParams +=
  "&" + encodeURIComponent("modifiedtime") + "=" + encodeURIComponent(""); /* */

request(
  {
    url: url + queryParams,
    method: "GET",
  },
  function (error, response, body) {
    console.log("Status", response.statusCode);
    console.log("Headers", JSON.stringify(response.headers));
    console.log("Reponse received", body);
  }
);
