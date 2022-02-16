import { Route, Routes } from "react-router-dom";

import EditProfile from "../../pages/editProfile";
import Entry from "../../pages/entry";
import HomePage from "../../pages/home/index";
import ProfilePage from "../../pages/profile/index";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/sign-up" element={<Entry />} />
      <Route path="/sign-in" element={<Entry />} />
      <Route path="/edit-profile" element={<EditProfile />} />
    </Routes>
  );
};

export default AppRouter;
