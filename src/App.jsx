import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import Solutions from "./pages/Solutions";
import Resources from "./pages/Resources";
import BusinessSolutions from "./pages/BusinessSolutions";
import ProfessionalSolutions from "./pages/ProfessionalSolutions";
import PersonalSolutions from "./pages/PersonalSolutions";
import SegmentSolutions from "./pages/SegmentSolutions";
import Modules from "./pages/Modules";
import Integrations from "./pages/Integrations";
import News from "./pages/News";
export default function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solucoes-para-empresas" element={<BusinessSolutions />} />
        <Route path="/politica-de-privacidade"element={<PrivacyPolicy />} />
        <Route path="/termos-de-uso"element={<TermsOfUse />}/>
        <Route path="/sobre-nos" element={<About />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/solucoes" element={<Solutions />} />
        <Route path="/recursos" element={<Resources />} />
        <Route path="/solucoes-para-profissionais" element={<ProfessionalSolutions />} />
        <Route path="/solucoes-para-pessoas" element={<PersonalSolutions />} />
        <Route path="/solucoes-por-segmento" element={<SegmentSolutions />} />
        <Route path="/modulos" element={<Modules />} />
        <Route path="/integracoes" element={<Integrations />} />
        <Route path="/novidades" element={<News />} />
      </Routes>

    </BrowserRouter>
  );
}