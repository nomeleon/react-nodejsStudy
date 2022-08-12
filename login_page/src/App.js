import Main from "./Main";
import { Route, Routes } from "../node_modules/react-router-dom/index";
import LoginForm from "./LoginForm";
import MemberFrom from "./MemberFrom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/main" element={<Main />} />
      <Route path="/member" element={<MemberFrom />} />
    </Routes>
  );
}

export default App;
