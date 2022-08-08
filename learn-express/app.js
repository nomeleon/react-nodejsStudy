//라이브러리
const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
//웹 서버 생성
const app = express();
//포트번호 설정
app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "session-cookie",
  })
);
// app.use((req, res, next) => {
//   console.log("모든 요청에 다 실행됩니다.");
//   next();
// });
//실제 수행
app.get(
  "/",
  (req, res, next) => {
    //   console.log(req.query);
    //   const var1 = req.query.var1;
    //   const var2 = req.query.var2;
    //   res.send({ data: var1, data2: var2 });
    //   res.sendFile(path.join(__dirname, "/index.html"));
    console.log("get /  요청에서만 실행");
    next();
  },
  (req, res) => {
    throw new Error("에러 처리 미들웨어로 갑니다. ");
  }
);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

// app.post("/", (req, res) => {
//   console.log(req.body);
//   res.send("Hello, Express");
//   //   res.sendFile(path.join(__dirname, '/index.html'));
// });

//고객 요청 감시 과정
app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
