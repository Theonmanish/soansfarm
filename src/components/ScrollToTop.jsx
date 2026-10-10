import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    let frameId;
    let secondFrameId;
    frameId = window.requestAnimationFrame(() => {
      if (hash) {
        const target = document.getElementById(decodeURIComponent(hash.slice(1)));
        if (target) {
          secondFrameId = window.requestAnimationFrame(() => {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          });
          return;
        }
      }

      window.scrollTo(0, 0);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
      if (secondFrameId) window.cancelAnimationFrame(secondFrameId);
    };
  }, [pathname, hash]);

  return null;
}
