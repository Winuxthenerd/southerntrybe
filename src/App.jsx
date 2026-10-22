import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
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
import YoutubeWatch from "./pages/YoutubeWatch";
import NotFound from "./pages/NotFound";
import MagazineView from "./pages/MagazineView";
import EditorialArticle from "./pages/EditorialArticle";
import PictorialGallery from "./pages/PictorialGallery";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUSe";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <BrowserRouter basename="/southerntrybe">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Mapped */}
          <Route path="/about" element={<About />} /> {/* Mapped */}
          <Route path="/faqs" element={<FAQs />} /> {/* Mapped */}
          <Route path="/contact" element={<Contact />} /> {/* Mapped */}
          <Route path="/magazine" element={<Magazine />} /> {/* Mapped */}
          <Route path="/magazine/view/:id" element={<MagazineView />} /> 
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/stories/editorial/:id" element={<EditorialArticle />} />
          <Route path="/stories/pictorial/:id" element={<PictorialGallery />} />
          <Route path="/screen-kulture" element={<ScreenKulture />} />
          <Route path="/screen-kulture/watch/:id" element={<YoutubeWatch />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </BrowserRouter>
  );
}

export default App;