import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/layout/Navbar';
import { Home } from './pages/Home';
import './index.css';

// There is no router any more: every route rendered <Home />, and the real
// navigation is scrollIntoView inside Navbar. On GitHub Pages a direct hit to
// /projects was a hard 404 anyway, since Pages has no rewrite rule.
function App() {
  return (
    <LanguageProvider>
      <video
        className="bg-video"
        autoPlay
        muted
        loop
        playsInline
        poster="/moon-poster.webp"
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src="/moon.webm" type="video/webm" />
        <source src="/moon.mp4" type="video/mp4" />
      </video>
      <div className="bg-scrim" aria-hidden="true" />
      <Navbar />
      <Home />
    </LanguageProvider>
  );
}

export default App;
