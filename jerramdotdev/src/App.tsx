import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/homepage/Home';

import Navigation from './components/navigation/Navigation';
import Parallax from './components/parallax/Parallax';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';
import { ThemeProvider } from './components/ThemeProvider';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navigation />
      <Home />
      <About />
      <Parallax type="about" />
      <Skills />
      <Parallax type="portfolio" />
      <Portfolio />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
