import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Used from "./pages/Used";
import CarDetails from "./pages/CarDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/usados" Component={Used} />
        <Route path="/usados/auto/:id" Component={CarDetails} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
