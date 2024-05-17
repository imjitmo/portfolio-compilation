import { lazy, Suspense } from 'react';

import Loader from './components/Loader';
import { ThemeProvider } from './components/ThemeProvider';

const Navigation = lazy(() => import('./components/navigation/Navigation'));
const Parallax = lazy(() => import('./components/parallax/Parallax'));
const Home = lazy(() => import('./components/homepage/Home'));
const Portfolio = lazy(() => import('./components/portfolio/Portfolio'));
const About = lazy(() => import('./components/about/About'));
const Contact = lazy(() => import('./components/contact/Contact'));
const Skills = lazy(() => import('./components/skills/Skills'));
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Suspense fallback={<Loader />}>
        <Navigation />
        <Home />
        <About />
        <Parallax type="about" />
        <Skills />
        <Parallax type="portfolio" />
        <Portfolio />
        <Contact />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
