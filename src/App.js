import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Promotions from "./pages/Promotions";
import News from "./pages/News";
import NewsLeter from "./pages/NewsLeter";
import Brands from "./pages/Brands";
import GamingComponent from "./components/GamingComponent";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/promotions" element={<Promotions />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/newsLeter" element={<NewsLeter />}></Route>
          <Route path="/brands" element={<Brands />}></Route>
          <Route path="/cart" element={<Brands />}></Route>
          <Route
            path="/gaming"
            element={
              <>
                <GamingComponent />
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
