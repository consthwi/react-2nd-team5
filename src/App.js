import { Route, Routes } from "react-router-dom";
import "./App.css";
import RecipePage from "./pages/RecipePage/RecipePage";
import AppLayout from "./common/layout/AppLayout/AppLayout";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import "./common/styles/font.css";
import HomePage from "./pages/Homepage/HomePage";
import RecipeDetailPage from "./pages/RecipeDetailPage/RecipeDetailPage";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import LoginPage from "./pages/Login/LoginPage";
import PrivateRoute from "./pages/components/PrivateRoute";
import UserPage from "./pages/Wish/UserPage";
import GestPage from "./pages/Wish/GestPage";

function App() {
  return (
  <Provider store={store}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="recipes">
            <Route index element={<RecipePage />} />
            <Route path=":recipeName" element={<RecipeDetailPage />} />
          </Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="wish">
            <Route path="guest" element={<GestPage />} />
            <Route path="user" element={<PrivateRoute><UserPage /></PrivateRoute>} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
</Provider>

  );
}

export default App;