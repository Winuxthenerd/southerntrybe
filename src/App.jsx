import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import FAQs from "./pages/FAQs";
import Contact from "./pages/Contact";
import Magazine from "./pages/Magazine";
import Sessions from "./pages/Sessions";
import Films from "./pages/Films";

function App() {
  return (
    <BrowserRouter basename="/southerntrybe">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/magazine" element={<Magazine />} />
        <Route path="/sessions" element={<Sessions />} />
        <Route path="/films" element={<Films />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;