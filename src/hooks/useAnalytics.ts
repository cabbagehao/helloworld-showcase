import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag?: (command: string, ...args: any[]) => void;
    _hmt?: any[];
  }
}

export function useAnalytics() {
  const location = useLocation();

  useEffect(() => {
    // Google Analytics
    if (window.gtag) {
      window.gtag('config', 'G-MLV5KYL9EY', {
        page_path: location.pathname + location.search
      });
    }

    // Baidu Analytics
    if (window._hmt) {
      window._hmt.push(['_trackPageview', location.pathname + location.search]);
    }
  }, [location]);
}