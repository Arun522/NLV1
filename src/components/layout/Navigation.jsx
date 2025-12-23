import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef, useCallback } from 'react';
import { NAVIGATION_ITEMS } from '../../constants';

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const navRef = useRef(null);
  const hamburgerRef = useRef(null);
  const timeoutRefs = useRef(new Set());
  const isNavigatingRef = useRef(false);
  const isMobileMenuOpenRef = useRef(false);

  // Cleanup function for timeouts
  const clearAllTimeouts = useCallback(() => {
    timeoutRefs.current.forEach(timeoutId => clearTimeout(timeoutId));
    timeoutRefs.current.clear();
  }, []);

  // Safe timeout function that tracks timeouts
  const safeSetTimeout = useCallback((callback, delay) => {
    const timeoutId = setTimeout(() => {
      if (timeoutRefs.current) {
        timeoutRefs.current.delete(timeoutId);
      }
      if (callback) {
        callback();
      }
    }, delay);
    if (timeoutRefs.current) {
      timeoutRefs.current.add(timeoutId);
    }
    return timeoutId;
  }, []);

  const isActive = useCallback((path) => {
    // Exact match for home page
    if (path === '/' && location.pathname === '/') return true;
    // For other pages, ensure exact match
    if (path !== '/' && location.pathname === path) return true;
    return false;
  }, [location.pathname]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => {
      const newValue = !prev;
      isMobileMenuOpenRef.current = newValue;
      return newValue;
    });
  }, []);


  // Close mobile menu when route changes with proper cleanup
  useEffect(() => {
    clearAllTimeouts(); // Clear any pending timeouts
    setIsNavigating(true);
    isNavigatingRef.current = true;
    setIsMobileMenuOpen(false);
    isMobileMenuOpenRef.current = false;

    // Reset navigation state more quickly for menu interaction
    safeSetTimeout(() => {
      setIsNavigating(false);
      isNavigatingRef.current = false;
    }, 100);

    return () => {
      clearAllTimeouts();
    };
  }, [location.pathname, clearAllTimeouts, safeSetTimeout]);

  // Handle navigation clicks with simplified state management
  const handleNavClick = useCallback(() => {
    setIsMobileMenuOpen(false);
    isMobileMenuOpenRef.current = false;
  }, []);

  // Simplified click outside detection  
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleDocumentClick = (event) => {
      // Don't close if clicking on hamburger button or nav menu
      if (hamburgerRef.current && hamburgerRef.current.contains(event.target)) {
        return;
      }
      if (navRef.current && navRef.current.contains(event.target)) {
        return;
      }

      // Close if clicking outside
      setIsMobileMenuOpen(false);
      isMobileMenuOpenRef.current = false;
    };

    // Add listener after a short delay
    const timeoutId = setTimeout(() => {
      document.addEventListener('click', handleDocumentClick);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isMobileMenuOpen]);

  // Keep refs in sync with state for immediate access
  useEffect(() => {
    isMobileMenuOpenRef.current = isMobileMenuOpen;
  }, [isMobileMenuOpen]);

  useEffect(() => {
    isNavigatingRef.current = isNavigating;
  }, [isNavigating]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearAllTimeouts();
    };
  }, [clearAllTimeouts]);


  return (
    <div
      ref={navRef}
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      role="banner"
      className="navbar w-nav"
    >
      <div className="container w-container">
        <Link to="/" className="brand w-nav-brand">
          <img
            src="images/nextmaze_official_logo.svg"
            loading="lazy"
            alt="NextMaze Tech"
            className="image"
          />
        </Link>

        <nav
          role="navigation"
          className={`nav-menu w-nav-menu ${isMobileMenuOpen ? 'w--nav-menu-open' : ''}`}
          data-nav-menu-open={isMobileMenuOpen ? '' : null}
        >
          {NAVIGATION_ITEMS.map((item, index) => {
            if (item.type === 'internal') {
              const active = isActive(item.path);
              return (
                <Link
                  key={index}
                  to={item.path}
                  className={`nav-link w-nav-link ${active ? 'w--current' : ''} ${item.className || ''}`}
                  aria-current={active ? 'page' : undefined}
                  onClick={handleNavClick}
                >
                  {item.label}
                </Link>
              );
            }
            if (item.type === 'external') {
              return (
                <a
                  key={index}
                  href={item.path}
                  className={`nav-link w-nav-link ${item.className || ''}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleNavClick}
                >
                  {item.label}
                </a>
              );
            }
            if (item.type === 'anchor') {
              return (
                <a
                  key={index}
                  href={item.path}
                  className={`nav-link w-nav-link ${item.className || ''}`}
                  onClick={(e) => {
                    handleNavClick();
                    if (location.pathname === '/') {
                      e.preventDefault();
                      // Add timeout to ensure menu is closed before scrolling
                      setTimeout(() => {
                        const sectionId = item.path.replace('/#', '');
                        const section = document.querySelector(`#${sectionId}`);
                        if (section) {
                          section.scrollIntoView({ behavior: 'smooth' });
                        }
                      }, 100);
                    }
                  }}
                >
                  {item.label}
                </a>
              );
            }
            return null;
          })}
        </nav>

        <div
          ref={hamburgerRef}
          className={`menu-button w-nav-button ${isMobileMenuOpen ? 'w--open' : ''}`}
          onClick={toggleMobileMenu}
          role="button"
          tabIndex="0"
          aria-label="menu"
          aria-expanded={isMobileMenuOpen}
        >
          <div className="w-icon-nav-menu"></div>
        </div>
      </div>

    </div>
  );
};

export default Navigation;