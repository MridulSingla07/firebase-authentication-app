import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const Profile = () => {
  const { user, handleLogOut } = useContext(AuthContext);

  console.log(user, "user-data");

  return (
    <>
      <div>{user.displayName}</div>
      <div>{user.email}</div>

      <button
        className="px-2 py-1 text-xl bg-blue-600 rounded-md text-white"
        onClick={handleLogOut}
      >
        Log Out
      </button>
    </>
  );
};

export default Profile;
