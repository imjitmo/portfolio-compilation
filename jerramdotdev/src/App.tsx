import { lazy, Suspense } from 'react';
import About from './components/about/About';
import Loader from './components/Loader';
import Parallax from './components/parallax/Parallax';
import { ThemeProvider } from './components/ThemeProvider';

const Navigation = lazy(() => import('./components/navigation/Navigation'));
const Home = lazy(() => import('./components/homepage/Home'));
const Portfolio = lazy(() => import('./components/portfolio/Portfolio'));
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
