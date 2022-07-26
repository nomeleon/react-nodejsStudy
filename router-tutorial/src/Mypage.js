import { Navigate } from "react-router";

const Mypage = () => {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return <Navigate to="/login" repalce={true} />;
  }
  return <div>my page</div>;
};

export default Mypage;
