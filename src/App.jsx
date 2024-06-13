import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Used from "./pages/Used";
import CarDetails from "./pages/CarDetails";
import Audi from "./pages/Audi";
import Ferrari from "./pages/Ferrari";
import Lamborghini from "./pages/Lamborghini";
import Porsche from "./pages/Porsche";
import RollsRoyce from "./pages/RollsRoyce";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/usados" Component={Used} />
        <Route path="/usados/auto/:id" Component={CarDetails} />
        <Route path="/nuevos/audi" Component={Audi} />
        <Route path="/nuevos/ferrari" Component={Ferrari} />
        <Route path="/nuevos/lamborghini" Component={Lamborghini} />
        <Route path="/nuevos/porsche" Component={Porsche} />
        <Route path="/nuevos/rolls-royce" Component={RollsRoyce} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
