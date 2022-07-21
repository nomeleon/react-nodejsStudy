import { Component } from "react";

// class Counter extends Component {
//   //생성자 : 객체 생성 시 자동으로 호출
//   constructor(props) {
//     super(props);
//     this.state = {
//       number: 0,
//       fixedNumber: 0,
//     };
//   }
//   render() {
//     const { number, fixedNumber } = this.state;
//     return (
//       <div>
//         <h1>{number}</h1>
//         <h2>unchange number : {fixedNumber}</h2>
//         <button
//           onClick={() => {
//             this.setState({
//               number: number + 1,
//             });
//           }}
//         >
//           {" "}
//           +1{" "}
//         </button>
//       </div>
//     );
//   }
// }

class Counter extends Component {
  //생성자없이 state 초기값 설정
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>unchange number : {fixedNumber}</h2>
        <button
          onClick={() => {
            // this.setState((prevState) => {
            //   return {
            //     number: number + 1,
            //   };
            // });
            // this.setState((prevState) => ({
            //   number: prevState.number + 1,
            // }));
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log(this.state);
              }
            );
          }}
        >
          {" "}
          +1{" "}
        </button>
      </div>
    );
  }
}

export default Counter;
