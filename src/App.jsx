import { BrowserRouter } from "react-router-dom"
import StarsCanvas from "./components"

function App() {

  return (
      <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <StarsCanvas/>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              {/* <Navbar />
              <Hero /> */}

        </div>
        {/* <About />
        <Experience />
        <Skills />
        <Works />
        <Feedbacks /> */}
         <div className="relative z-0">
          {/* <Contact /> */}
          </div>     
      </div>
      </BrowserRouter>
  )
}

export default App
