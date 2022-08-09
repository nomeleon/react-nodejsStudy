//라이브러리
const express = require("express");
// const morgan = require("morgan");
// const cookieParser = require("cookie-parser");
// const session = require("express-session");
// const dotenv = require("dotenv");
// const path = require("path");
// const MySQLStore = require("express-mysql-session")(session);

// const options = {
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "123456",
//   database: "bbs",
// };

// var sessionStore = new MySQLStore(options);

// dotenv.config();
const indexRouter = require("./routes");
const userRouter = require("./routes/user");
const router = require("./routes");
//웹 서버 생성
const app = express();
//포트번호 설정
app.set("port", process.env.PORT || 3000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/user", userRouter);

router.get("/user/:id", function (req, res) {
  console.log(req.params, req.query);
});

//고객 요청 감시 과정
app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});

// app.use(morgan("dev"));
// app.use("/", express.static(path.join(__dirname, "public")));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser(process.env.COOKIE_SECRET));
// app.use(
//   session({
//     resave: false,
//     saveUninitialized: false,
//     secret: process.env.COOKIE_SECRET,
//     store: sessionStore,
//     cookie: {
//       httpOnly: true,
//       secure: false,
//     },
//     name: "session-cookie",
//   })
// );

// const multer = require("multer");
// const fs = require("fs");

// try {
//   fs.readdirSync("uploads");
// } catch (error) {
//   console.error("uploads 폴더가 없어 uploads폴더를 생성합니다.");
//   fs.mkdirSync("uploads");
// }

// const upload = multer({
//   storage: multer.diskStorage({
//     destination(req, file, done) {
//       done(null, "uploads/");
//     },
//     filename(req, file, done) {
//       //확장자
//       const ext = path.extname(file.originalname);
//       done(null, path.basename(file.originalname, ext) + Date.now() + ext);
//     },
//   }),
//   limits: { fileSize: 10 * 1024 * 1024 },
// });

// app.get("/upload", (req, res) => {
//   res.sendFile(path.join(__dirname, "multipart.html"));
// });

// app.post(
//   "/upload",
//   upload.fields([{ name: "image1" }, { name: "image2" }]),
//   (req, res) => {
//     console.log(req.files, req.body);
//     res.send("ok");
//   }
// );

// app.post("/upload", upload.single("image"), (req, res) => {
//   console.log(req.file, req.body);
//   res.send("ok");
// });

// app.post("/upload", upload.array("images"), (req, res) => {
//   console.log(req.files, req.body);
//   res.send("ok");
// });

// app.use((req, res, next) => {
//   console.log("모든 요청에 다 실행됩니다.");
//   sess = req.session;
//   sess.username = "soyeon";
//   console.log(req.session.username);
//   console.log(req.sessionID);
//   console.log(req.session);
//   next();
// });
//실제 수행
// app.get(
//   "/",
//   (req, res, next) => {
//     //   console.log(req.query);
//     //   const var1 = req.query.var1;
//     //   const var2 = req.query.var2;
//     //   res.send({ data: var1, data2: var2 });
//     //   res.sendFile(path.join(__dirname, "/index.html"));
//     console.log("get /  요청에서만 실행");
//     next();
//   },
//   (req, res) => {
//     throw new Error("에러 처리 미들웨어로 갑니다. ");
//   }
// );

// app.use((err, req, res, next) => {
//   console.error(err);
//   res.status(500).send(err.message);
// });

// app.post("/", (req, res) => {
//   console.log(req.body);
//   res.send("Hello, Express");
//   //   res.sendFile(path.join(__dirname, '/index.html'));
// });
