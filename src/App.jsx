import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import Profile from "./Pages/Profile";
import Register from "./Pages/Register";
import AuthPage from "./Pages/AuthPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/user-login" element={<LoginPage />} />

        <Route path="/register" element={<Register />} />
        <Route
          path="/user-profile"
          element={
            <AuthPage>
              <Profile />
            </AuthPage>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
