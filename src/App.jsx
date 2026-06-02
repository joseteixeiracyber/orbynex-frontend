import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import Solutions from "./pages/Solutions";
import Resources from "./pages/Resources";
export default function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politica-de-privacidade"element={<PrivacyPolicy />} />
        <Route path="/termos-de-uso"element={<TermsOfUse />}/>
        <Route path="/sobre-nos" element={<About />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/solucoes" element={<Solutions />} />
        <Route path="/recursos" element={<Resources />} />
      </Routes>

    </BrowserRouter>
  );
}