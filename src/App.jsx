import { BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

// Componentes ligeros - carga inmediata
import { Navbar, Hero, StarsCanvas } from "./components";

// Componentes pesados - lazy loading
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Education = lazy(() => import("./components/Education"));
const Skills = lazy(() => import("./components/Skills"));
const Works = lazy(() => import("./components/Works"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Contact = lazy(() => import("./components/Contact"));

// Loader simple
const SectionLoader = () => (
  <div className="flex justify-center items-center h-32">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <StarsCanvas />

        <div>
          <Navbar />
          <Hero />
        </div>

        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Experience />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Education />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Skills />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Works />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Testimonials />
        </Suspense>

        <div className='relative z-0'>
          <Suspense fallback={<SectionLoader />}>
            <Contact />
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
