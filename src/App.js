import "./App.css";
import { HomePage } from "./Componets/pages/homepages/homepage.jsx";
import { Route, Routes } from "react-router-dom";
import { ShopPage } from "./Componets/pages/shop/shop";
import Header from "./Componets/header/header";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
