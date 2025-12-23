import { useEffect } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({ children }) => {
  useEffect(() => {
    // Load Webflow scripts with performance optimizations
    const scripts = [
      'js/jquery-3.5.1.min.dc5e7f18c8.js',
      'js/webflow.schunk.36b8fb49256177c8.js',
      'js/webflow.schunk.408e4d700860c213.js',
      'js/webflow.6f87b1e5.96db7c5a04d58d54.js',
      'js/widget.js'
    ];

    const loadedScripts = [];

    // Load scripts sequentially to avoid blocking
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        // Check if script already exists
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = src;
        script.type = 'text/javascript';
        script.async = true; // Make all scripts async for better performance
        script.defer = true; // Defer execution until DOM is complete
        
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load ${src}`));
        
        document.head.appendChild(script); // Use head instead of body
        loadedScripts.push(script);
      });
    };

    // Load scripts with a small delay to not block initial render
    const loadTimeout = setTimeout(() => {
      scripts.forEach((src) => {
        loadScript(src).catch(console.error);
      });
    }, 100);

    return () => {
      clearTimeout(loadTimeout);
      // Cleanup scripts on unmount
      loadedScripts.forEach((script) => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
    };
  }, []);

  return (
    <div className="body">
      <Navigation />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;