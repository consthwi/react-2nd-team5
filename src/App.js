import { Route, Routes } from "react-router-dom";
import "./App.css";
import RecipePage from "./pages/RecipePage/RecipePage";

function App() {
  return (
    <Routes>
      <Route path="recipes" element={<RecipePage />} />
    </Routes>
  );
}

export default App;
