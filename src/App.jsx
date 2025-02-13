import { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Feedbacks, Navbar, Tech, StarsCanvas, Footer, SEO } from "./components";

// Lazy load components
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Works = lazy(() => import('./components/Works'));
const Contact = lazy(() => import('./components/Contact'));

const App = () => {
  return (
    <BrowserRouter>
      <SEO />
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar/>
          <Suspense fallback={<div>Loading...</div>}>
            <Hero/>
          npm run convert-images          </Suspense>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <About/>
          <Experience/>
          <Tech/>
          <Works/>
        </Suspense>
        <Feedbacks/>
        <div className='relative z-0'>
          <Suspense fallback={<div>Loading...</div>}>
            <Contact/>
          </Suspense>
          <StarsCanvas/>
        </div>
        <div className="relative z-0">
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
