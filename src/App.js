import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Myphotos from "./pages/Myphotos"
import Search from "./pages/Search";

export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/003_module/" element={<Home />} />
        <Route path="/003_module/myphotos" element={<Myphotos />} />
        <Route path="/003_module/search" element={<Search />} />
        <Route path="/003_module/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}