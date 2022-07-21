import { Component } from "react";
import React from "react";

class FormInput_class extends Component {
  state = {
    id: "",
    password: "",
    jumin1: "",
    jumin2: "",
    phone1: "",
    phone2: "",
    phone3: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onClick = () => {
    alert(
      "아이디: " +
        this.state.id +
        "\r" +
        "비밀번호: " +
        this.state.password +
        "\r" +
        "주민번호: " +
        this.state.jumin1 +
        "-" +
        this.state.jumin2 +
        "\r" +
        "핸드폰번호: " +
        this.state.phone1 +
        "-" +
        this.state.phone2 +
        "-" +
        this.state.phone3
    );

    this.setState({
      id: "",
      password: "",
      jumin1: "",
      jumin2: "",
      phone1: "",
      phone2: "",
      phone3: "",
    });
  };

  // ref 만들기
  input_id = React.createRef();
  input_pwd = React.createRef();
  input_jumin1 = React.createRef();
  input_jumin2 = React.createRef();
  input_phone1 = React.createRef();
  input_phone2 = React.createRef();
  input_phone3 = React.createRef();
  button = React.createRef();

  onKeyPress = (e) => {
    if (e.target.name === "id") {
      if (e.key === "Enter") {
        this.input_pwd.current.focus();
      }
    }
    if (e.target.name === "password") {
      if (e.key === "Enter") {
        this.input_jumin1.current.focus();
      }
    }
    if (e.target.name === "jumin1") {
      if (e.key === "Enter") {
        this.input_jumin2.current.focus();
      }
    }
    if (e.target.name === "jumin2") {
      if (e.key === "Enter") {
        this.input_phone1.current.focus();
      }
    }
    if (e.target.name === "phone1") {
      if (e.key === "Enter") {
        this.input_phone2.current.focus();
      }
    }
    if (e.target.name === "phone2") {
      if (e.key === "Enter") {
        this.input_phone3.current.focus();
      }
    }
    if (e.target.name === "phone3") {
      if (e.key === "Enter") {
        this.button.current.click();
      }
    }
  };

  render() {
    return (
      <div>
        <h1>회원 가입</h1>
        <form>
          <table border="1">
            <tbody>
              <tr>
                <td width="110px">아이디</td>
                <td width="440px">
                  <input
                    ref={this.input_id}
                    type="text"
                    name="id"
                    value={this.state.id}
                    onChange={this.onChange}
                    size="30"
                    min="6"
                    max="10"
                    placeholder="(최소6~최대10, 숫자와 알파벳만 사용)"
                    onKeyPress={this.onKeyPress}
                  />
                </td>
              </tr>
              <tr>
                <td width="110px">비밀번호</td>
                <td width="440px">
                  <input
                    ref={this.input_pwd}
                    type="password"
                    name="password"
                    size="10"
                    value={this.state.password}
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                  />
                  (최소6~최대10, 숫자와 알파벳만 사용)
                </td>
              </tr>
              <tr>
                <td width="110px">주민번호</td>
                <td width="440px">
                  <input
                    ref={this.input_jumin1}
                    type="number"
                    name="jumin1"
                    size="6"
                    maxLength="6"
                    value={this.state.jumin1}
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                  />
                  -
                  <input
                    ref={this.input_jumin2}
                    type="number"
                    name="jumin2"
                    size="7"
                    maxLength="7"
                    value={this.state.jumin2}
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                  />
                </td>
              </tr>

              <tr>
                <td width="110px">전화번호</td>
                <td width="440px">
                  <input
                    ref={this.input_phone1}
                    type="tel"
                    name="phone1"
                    size="3"
                    maxLength="3"
                    value={this.state.phone1}
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                  />
                  -
                  <input
                    ref={this.input_phone2}
                    type="tel"
                    name="phone2"
                    size="4"
                    maxLength="4"
                    value={this.state.phone2}
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                  />
                  -
                  <input
                    ref={this.input_phone3}
                    type="tel"
                    name="phone3"
                    size="4"
                    maxLength="4"
                    value={this.state.phone3}
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2" align="center">
                  <input
                    name="button"
                    ref={this.button}
                    type="button"
                    value="입력"
                    onClick={this.onClick}
                  />
                  <input type="reset" value="취소" />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

export default FormInput_class;
