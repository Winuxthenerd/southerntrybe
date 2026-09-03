import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import FAQs from "./pages/FAQs";
import Contact from "./pages/Contact";
import Magazine from "./pages/Magazine";
import Sessions from "./pages/Sessions";
import Stories from "./pages/Stories";
import ScreenKulture from "./pages/ScreenKulture";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter basename="/southerntrybe">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/magazine" element={<Magazine />} />
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/screen-kulture" element={<ScreenKulture />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;