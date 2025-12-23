// Performance optimization utilities

// Debounce function for scroll and resize events
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function for high-frequency events
export const throttle = (func, limit) => {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Lazy loading observer for images
export const createLazyImageObserver = () => {
  if ('IntersectionObserver' in window) {
    return new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.add('loaded');
            img.removeAttribute('data-src');
          }
        }
      });
    }, {
      rootMargin: '50px 0px', // Start loading 50px before image comes into view
      threshold: 0.01
    });
  }
  return null;
};

// Preload critical resources
export const preloadResource = (href, as = 'script', type) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  if (type) link.type = type;
  document.head.appendChild(link);
};

// Performance measurement
export const measurePerformance = (name, fn) => {
  if (import.meta.env?.DEV || (typeof process !== 'undefined' && process.env?.NODE_ENV === 'development')) {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
    return result;
  }
  return fn();
};

// Critical resource hints
export const addResourceHints = () => {
  // DNS prefetch for external domains
  const domains = [
    '//fonts.googleapis.com',
    '//www.googletagmanager.com'
  ];
  
  domains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = domain;
    document.head.appendChild(link);
  });
};