/* eslint-disable */
//yarn add react-router-dom
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profile from "./Profile";
import Article from "./Article";
import Articles from "./Articles";
import Layout from "./layout";
import Notfound from "./Notfound";
import Login from "./Login";
import Mypage from "./Mypage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Route>
      {/* <Route path="/Articles/" element={<Articles />} />
      <Route path="/Articles/:id" element={<Article />} /> */}
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/mypage" element={<Mypage />} />
      {/* Notfound 가장마지막에 */}
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default App;
