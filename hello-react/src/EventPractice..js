import { Component, useState } from "react";

// class EventPractice extends Component {
//   render() {
//     return (
//       <div>
//         <h1>event practice</h1>
//         <input
//           type="text"
//           name="message"
//           placeholder="here"
//           onChange={(e) => {
//             console.log(e);
//             console.log(e.target.value);
//           }}
//         />
//       </div>
//     );
//   }
// }

// class EventPractice extends Component {
//   state = {
//     message: "",
//   };
//   render() {
//     return (
//       <div>
//         <h1>event practice</h1>
//         <input
//           type="text"
//           name="message"
//           placeholder="here"
//           onChange={(e) => {
//             this.setState({
//               message: e.target.value,
//             });
//             console.log(this.state.message);
//           }}
//         />
//         <button
//           onClick={() => {
//             alert(this.state.message);
//             this.setState({
//               message: "",
//             });
//           }}
//         >
//           check
//         </button>
//       </div>
//     );
//   }
// }

// class EventPractice extends Component {
//   state = {
//     message: "",
//   };

//   //일반 함수 형식 : 생성자 바인딩 필요
//   //   constructor(props) {
//   //     super(props);
//   //     this.handleChange = this.handleChange.bind(this);
//   //     this.handleClick = this.handleClick.bind(this);
//   //   }
//   //   handleChange(e) {
//   //     this.setState({
//   //       message: e.target.value,
//   //     });
//   //     console.log(e.target.value);
//   //   }
//   //   handleClick() {
//   //     this.setState({
//   //       message: "",
//   //     });
//   //   }

//   //화살표 함수 바인딩 불필요
//   handleChange = (e) => {
//     this.setState({
//       message: e.target.value,
//     });
//     alert(e.target.name);
//   };
//   handleClick = () => {
//     this.setState({
//       message: "",
//     });
//   };
//   render() {
//     return (
//       <div>
//         <h1>event practice</h1>
//         <input
//           type="text"
//           name="message_name"
//           placeholder="here"
//           value={this.state.message}
//           onChange={this.handleChange}
//         />
//         <button onClick={this.handleClick}>check</button>
//       </div>
//     );
//   }
// }

// class EventPractice extends Component {
//   state = {
//     username: "",
//     id: "",
//     message: "",
//   };

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };
//   handleClick = () => {
//     alert(this.state.username + ": " + this.state.message);
//     this.setState({
//       username: "",
//       id: "",
//       message: "",
//     });
//   };
//   render() {
//     return (
//       <div>
//         <h1>event practice</h1>
//         <input
//           type="text"
//           name="username"
//           placeholder="name"
//           value={this.state.username}
//           onChange={this.handleChange}
//         />
//         <input
//           type="text"
//           name="id"
//           placeholder="id"
//           value={this.state.id}
//           onChange={this.handleChange}
//         />
//         <input
//           type="text"
//           name="message"
//           placeholder="message"
//           value={this.state.message}
//           onChange={this.handleChange}
//         />
//         <button onClick={this.handleClick}>check</button>
//       </div>
//     );
//   }
// }

// class EventPractice extends Component {
//   state = {
//     username: "",
//     message: "",
//   };

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };
//   handleClick = () => {
//     alert(this.state.username + ": " + this.state.message);
//     this.setState({
//       username: "",
//       message: "",
//     });
//   };
//   handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       this.handleClick();
//     }
//   };
//   render() {
//     return (
//       <div>
//         <h1>event practice</h1>
//         <input
//           type="text"
//           name="username"
//           placeholder="name"
//           value={this.state.username}
//           onChange={this.handleChange}
//         />
//         <input
//           type="text"
//           name="message"
//           placeholder="message"
//           value={this.state.message}
//           onChange={this.handleChange}
//           onKeyPress={this.handleKeyPress}
//         />
//         <button onClick={this.handleClick}>check</button>
//       </div>
//     );
//   }
// }

// const EventPractice = () => {
//   const [username, setUsername] = useState("");
//   const [message, setMessage] = useState("");
//   const onChangeUsername = (e) => setUsername(e.target.value);
//   const onChangeMessage = (e) => setMessage(e.target.value);
//   const onClick = () => {
//     alert(username + ": " + message);
//     setUsername("");
//     setMessage("");
//   };

//   const onKeyPress = (e) => {
//     if (e.key === "Enter") {
//       onClick();
//     }
//   };

//   return (
//     <div>
//       <h1>event practice</h1>
//       <input
//         type="text"
//         name="username"
//         placeholder="name"
//         value={username}
//         onChange={onChangeUsername}
//       />
//       <input
//         type="text"
//         name="message"
//         placeholder="message"
//         value={message}
//         onChange={onChangeMessage}
//         onKeyPress={onKeyPress}
//       />
//       <button onClick={onClick}>check</button>
//     </div>
//   );
// };

const EventPractice = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const { username, message } = form;
  const onChange = (e) => {
    setTimeout(() => console.log(e), 500);
    const nextFrom = {
      ...form, //기존의 form 내용을 이 자리에 복사 한 뒤
      [e.target.name]: e.target.value, //원하는 값을 덮어씌우기
    };
    setForm(nextFrom);
  };
  const onClick = () => {
    alert(username + ": " + message);
    setForm({
      username: "",
      message: "",
    });
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>event practice</h1>
      <input
        type="text"
        name="username"
        placeholder="name"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="message"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>check</button>
    </div>
  );
};

export default EventPractice;
