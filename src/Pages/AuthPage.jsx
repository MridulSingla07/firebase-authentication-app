import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const AuthPage = ({ children }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (user) return children;
  return navigate("/user-login");
};

export default AuthPage;
