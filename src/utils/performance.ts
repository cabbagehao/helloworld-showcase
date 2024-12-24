import { useEffect, useCallback } from 'react';

// 延迟加载图片
export function useLazyLoading() {
  const onIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLImageElement;
        if (target.dataset.src) {
          target.src = target.dataset.src;
          target.removeAttribute('data-src');
        }
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection, {
      rootMargin: '50px 0px',
      threshold: 0.1
    });

    document.querySelectorAll('img[data-src]').forEach(img => observer.observe(img));

    return () => observer.disconnect();
  }, [onIntersection]);
}

// 预加载关键资源
export function preloadResources(resources: string[]) {
  resources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.js') ? 'script' : 
              resource.endsWith('.css') ? 'style' : 'image';
    document.head.appendChild(link);
  });
}