import "./App.css";
import { ViewAll } from "./components/ViewAll";
import { AddRecipe } from "./components/AddRecipe";
import { EditRecipe } from "./components/EditRecipe";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" key={Math.random()} element={<ViewAll />}></Route>
        <Route
          path="/cuisine/:id"
          key={Math.random()}
          element={<ViewAll />}
        ></Route>
        <Route path="/add" element={<AddRecipe />}></Route>
        <Route path="/edit" element={<EditRecipe />}></Route>
      </Routes>
      <footer>&copy; Copyrights reserved 2023</footer>
    </>
  );
}

export default App;
