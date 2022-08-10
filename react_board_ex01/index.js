const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
// cors : cross-origin resource sharing
//교차 출처 릴소스 공유
//한 출처에서 실행 중인 웹 어플리케이션이 다른 출처의 선택한 자원에 접근
//할 수 잇는 권한을 부여하도록 부라우저에 알려주는 체제이다.
const cors = require("cors");

const app = express();
const PORT = process.env.port || 8008;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

let corsOptions = {
  origin: "*", //출처 허용 옵션
  Credential: true, //사용자가 인증이 필요한 리소스(쿠키 등) 점근
};

app.use(cors(corsOptions));

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "bbs",
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
