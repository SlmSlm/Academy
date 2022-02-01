import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/home/index";
import ProfilePage from "../../pages/profile/index";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};

export default AppRouter;
