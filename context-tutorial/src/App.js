import logo from "./logo.svg";
import "./App.css";
import ColorBox from "./components/ColorBox";

const App = () => {
  return (
    <div>
      <ColorBox />
    </div>
  );
};

// const App = () => {
//   return (
//     <ColorProvider>
//       <div>
//         <SelectColors />
//         <ColorBox />
//       </div>
//     </ColorProvider>
//   );
// };

export default App;
