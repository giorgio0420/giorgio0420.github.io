import { useEffect, useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/layout/Navbar';
import { Home } from './pages/Home';
import './index.css';

// The still frame of the same clip is painted by body::after in the stylesheet,
// so the background is already there on first paint. The video is only the
// animated upgrade: mounting it before the page has loaded makes 450 kB compete
// with the fonts and the bundle, and holds back the load event for no visible
// gain. Mount it once everything else is done, and not at all where it costs
// the visitor more than it gives.
function BackgroundVideo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } })
      .connection?.saveData;
    if (
      saveData ||
      matchMedia('(prefers-reduced-motion: reduce)').matches ||
      matchMedia('(max-width: 768px)').matches
    ) {
      return;
    }

    const start = () => setMounted(true);
    if (document.readyState === 'complete') {
      start();
      return;
    }
    window.addEventListener('load', start, { once: true });
    return () => window.removeEventListener('load', start);
  }, []);

  if (!mounted) return null;

  return (
    <video className="bg-video" autoPlay muted loop playsInline aria-hidden="true" tabIndex={-1}>
      <source src="/moon.webm" type="video/webm" />
      <source src="/moon.mp4" type="video/mp4" />
    </video>
  );
}

// There is no router any more: every route rendered <Home />, and the real
// navigation is scrollIntoView inside Navbar. On GitHub Pages a direct hit to
// /projects was a hard 404 anyway, since Pages has no rewrite rule.
function App() {
  return (
    <LanguageProvider>
      <BackgroundVideo />
      <div className="bg-scrim" aria-hidden="true" />
      <Navbar />
      <Home />
    </LanguageProvider>
  );
}

export default App;
