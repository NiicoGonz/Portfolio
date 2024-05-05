import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Skills, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
          <StarsCanvas />

        <div >
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Skills />
        <Works />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
