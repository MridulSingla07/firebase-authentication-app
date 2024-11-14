import { useContext } from "react";
import CommonForm from "../Components/CommonForm";
import { RegisterFormControls } from "../Context/FormControls";
import { AuthContext } from "../Context/AuthContext";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import auth from "../Config/firebaseConfig";

const Register = () => {
  const { registerFormData, setRegisterFormData, registerWithFirebase } =
    useContext(AuthContext);

  const navigate = useNavigate();

  function handleRegisterFormSubmit(e) {
    e.preventDefault();
    registerWithFirebase()
      .then((result) => {
        updateProfile(result.user, {
          displayName: registerFormData.userName,
        }).then(() => {
          if (auth.currentUser.displayName) {
            navigate("/user-profile");
          }
        });
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="w-full rounded-lg min-h-screen pt-20">
      <div className="py-6 w-2/3 mx-auto">
        <h2 className="text-center text-3xl mt-2 font-bold">
          Welcome! Register here.
        </h2>
        <div className="w-1/3 mt-10 mx-auto">
          <CommonForm
            formControls={RegisterFormControls}
            formData={registerFormData}
            setFormData={setRegisterFormData}
            onSubmit={handleRegisterFormSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
