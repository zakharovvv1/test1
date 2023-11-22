import { Route, Routes } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import PostByIdPage from "../Pages/PostByIdPage";

const PagesRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/:id" element={<PostByIdPage />} />
    </Routes>
  );
};

export default PagesRoutes;
