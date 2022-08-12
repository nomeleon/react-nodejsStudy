import { useRef } from "react";
import axios from "../node_modules/axios/index";
import { useNavigate } from "../node_modules/react-router-dom/index";

const LoginForm = () => {
  const idRef = useRef();
  const pwRef = useRef();

  const navigate = useNavigate();

  const handleLoin = () => {
    if (idRef.current.value === "" || idRef.current.value === undefined) {
      alert("아이디를 입력해 주세요.");
      idRef.current.focus();
      return false;
    }
    if (pwRef.current.value === "" || pwRef.current.value === undefined) {
      alert("비밀번호를 입력해 주세요.");
      pwRef.current.focus();
      return false;
    }

    console.log(
      "LoginForm:window.sessionStorage(ligin_id) =>",
      window.sessionStorage.getItem("id")
    );

    axios
      .post("http://localhost:8008/login", {
        id: idRef.current.value,
        pw: pwRef.current.value,
      })
      .then((res) => {
        console.log("handleLogin =>", res);
        if (res.data[0].cnt === 1) {
          window.sessionStorage.setItem("id", idRef.current.value);
          navigate("/main");
        } else {
          alert("로그인 다시 정보를 확인해주세요!");
          navigate("/");
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleMemberForm = () => {
    navigate("/member");
  };

  return (
    <div>
      <p></p>
      <form>
        <table border="1" width="300px" align="center">
          <tr>
            <td width="100px">아이디</td>
            <td align="left" width="200px">
              <input
                type="text"
                name="id"
                size="20"
                ref={idRef}
                placeholder="아이디를 입력하세요"
              ></input>
            </td>
          </tr>
          <tr>
            <td width="100px">비밀번호</td>
            <td align="left" width="200px">
              <input
                type="password"
                name="PW"
                size="20"
                ref={pwRef}
                placeholder="비밀번호를 입력하세요"
              ></input>
            </td>
          </tr>
          <tr>
            <td colSpan={2} align="center">
              <input type="button" value="로그인" onClick={handleLoin}></input>
              &nbsp;
              <input
                type="button"
                value="회원등록"
                onClick={handleMemberForm}
              ></input>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default LoginForm;
