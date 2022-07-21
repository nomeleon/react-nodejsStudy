import PropTypes from "prop-types";
import { Component } from "react";

// const MyComponent = () => {
//   return <div>새로운 컴포넌트</div>;
// };

// const MyComponent = (props) => {
//   return <div>새로운 컴포넌트 {props.name}</div>;
// };

// const MyComponent = (props) => {
//   return (
//     <div>
//       hi. my name is {props.name}
//       <br />
//       children is {props.children}
//     </div>
//   );
// };

// const MyComponent = (props) => {
//   const { name, children } = props;
//   return (
//     <div>
//       hi. my name is {name}
//       <br />
//       children is {children}
//     </div>
//   );
// };

// const MyComponent = ({ name, favoriteNumber, children }) => {
//   return (
//     <div>
//       hi. my name is {name}
//       <br />
//       my children is {children}
//       <br />
//       my favorite number is {favoriteNumber}
//     </div>
//   );
// };

class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        hi. my name is {name}
        <br />
        my children is {children}
        <br />
        my favorite number is {favoriteNumber}
      </div>
    );
  }
}

MyComponent.defaultProps = {
  name: "soyeon",
  favoriteNumber: 1,
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

const MyComponent2 = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      hi. my name is {name}
      <br />
      my children is {children}
      <br />
      my favorite number is {favoriteNumber}
    </div>
  );
};

const MyComponent3 = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      hi. my name is {name}
      <br />
      my children is {children}
      <br />
      my favorite number is {favoriteNumber}
    </div>
  );
};

export default MyComponent;
export { MyComponent2, MyComponent3 };
