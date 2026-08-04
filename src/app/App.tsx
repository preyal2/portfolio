import { Suspense, lazy, useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { CustomCursor } from "./components/CustomCursor";
import { ScrollProgress } from "./components/ScrollProgress";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Achievements } from "./components/Achievements";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Certificates } from "./components/Certificates";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { RecruiterActionBanner } from "./components/RecruiterActionBanner";
import { HireMeModal } from "./components/HireMeModal";

// Lazy-load API-heavy sections to improve initial page load
const CodingJourney = lazy(() =>
  import("./components/CodingJourney").then((m) => ({ default: m.CodingJourney }))
);
const GitHub = lazy(() =>
  import("./components/GitHub").then((m) => ({ default: m.GitHub }))
);

function SectionFallback() {
  return (
    <div className="flex justify-center items-center py-32">
      <div
        className="w-10 h-10 rounded-full border-2 border-t-transparent animate-spin"
        style={{ borderColor: "rgba(37,99,235,0.3)", borderTopColor: "#2563EB" }}
      />
    </div>
  );
}

export default function App() {
  const [hireMeOpen, setHireMeOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${isLight ? "light-bg" : ""}`}
      style={{
        background: isLight ? "#FFFFFF" : "#0A0A0A",
        color: isLight ? "#111827" : "#FFFFFF",
      }}
    >
      {/* Global overlays */}
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <RecruiterActionBanner onHireMeClick={() => setHireMeOpen(true)} />
      <HireMeModal isOpen={hireMeOpen} onClose={() => setHireMeOpen(false)} />

      {/* Noise texture overlay */}
      <div className="noise-overlay" aria-hidden="true" style={{ opacity: isLight ? 0.015 : 0.025 }} />

      {/* Navigation */}
      <Navbar
        onHireMeClick={() => setHireMeOpen(true)}
        isLight={isLight}
        onToggleTheme={() => setIsLight(!isLight)}
      />

      {/* Main content */}
      <main>
        <Hero onHireMeClick={() => setHireMeOpen(true)} />
        <About />
        <Achievements />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Education />

        {/* API-heavy sections — lazy loaded */}
        <Suspense fallback={<SectionFallback />}>
          <GitHub />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <CodingJourney />
        </Suspense>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
