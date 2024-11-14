import { useContext } from "react";
import CommonForm from "../Components/CommonForm";
import { LoginFormControls } from "../Context/FormControls";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { loginFormData, setLoginFormData, loginWithFirebase } =
    useContext(AuthContext);

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    loginWithFirebase()
      .then((result) => {
        if (result) navigate("/user-profile");
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="w-full rounded-lg min-h-screen pt-20">
      <div className="py-6 w-2/3 mx-auto">
        <h2 className="text-center text-3xl mt-2 font-bold">Login ...</h2>
        <div className="w-1/3 mt-8 mx-auto">
          <CommonForm
            formControls={LoginFormControls}
            formData={loginFormData}
            setFormData={setLoginFormData}
            onSubmit={handleLogin}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
