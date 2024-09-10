import { Route, Routes } from "react-router-dom";
import "./App.css";
import RecipePage from "./pages/RecipePage/RecipePage";
import Home from "./common/Home/Home";
import AppLayout from "./common/layout/AppLayout/AppLayout";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import "./common/styles/font.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="recipes" element={<RecipePage />} />
        {/* <Route index element={<RecipePage1 />} /> */}
        {/* <Route path=":id" element={<RecipeDetailPage />} /> */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
