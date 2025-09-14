import { Routes, Route } from "react-router-dom";
import Navbar from "./componeants/navbar";
import ProcessSection from "./componeants/processSection";
import ServicesSection from "./pages/services";
import WorkSection from "./pages/work";
import Pricing from "./pages/prices";
import BrandsAccordion from "./pages/BrandsAccordion";
import FAQ from "./pages/faq";
// Services
// Process
// Work
// Pricing
// FAQ
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProcessSection />} />
        <Route
          path="/work"
          element={<WorkSection></WorkSection>}
        />
        <Route
          path="/process"
          element={<ProcessSection />}
        />
        <Route
          path="/services"
          element={<ServicesSection></ServicesSection>}
        />
        <Route
          path="/about"
          element={
            <section className="h-screen w-full mt-20">
              <h1 className="text-6xl font-extrabold text-center popins-bold-heading">
                About
              </h1>
            </section>
          }
        />
        <Route
          path="/faq"
          element={<FAQ></FAQ>}
        />
        <Route
          path="/pricing"
          element={<Pricing></Pricing>}
        />
        <Route
          path="/Brands"
          element={<BrandsAccordion></BrandsAccordion>}
        />
      </Routes>
    </>
  );
}

export default App;
