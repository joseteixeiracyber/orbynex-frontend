import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/politica-de-privacidade"
          element={<PrivacyPolicy />}
        />

        <Route
          path="/termos-de-uso"
          element={<TermsOfUse />}
        />
      </Routes>
    </BrowserRouter>
  );
}