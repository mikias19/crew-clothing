import "./App.css";
import { HomePage } from "./Componets/pages/homepages/homepage.jsx";
import { Route, Routes } from "react-router-dom";
function App() {
  const hatspage = () => {
    return (
      <div>
        <h1>Hats page</h1>
      </div>
    );
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={HomePage()} />
        <Route path="/hats" element={hatspage()} />
      </Routes>
    </div>
  );
}

export default App;
