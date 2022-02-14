import { Route, Routes } from "react-router-dom";
import EditProfile from "../../pages/editProfile";
import HomePage from "../../pages/home/index";
import ProfilePage from "../../pages/profile/index";
import SignUp from "../../pages/signUp";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignUp />} />
      <Route path="/edit-profile" element={<EditProfile />} />
    </Routes>
  );
};

export default AppRouter;
