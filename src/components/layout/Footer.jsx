import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#0f172a',
        color: '#e2e8f0',
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        padding: '80px 20px 40px',
        borderTop: '1px solid #1e293b',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
        }}
      >
        {/* Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            marginBottom: '60px',
          }}
        >
          {/* Company Info */}
          <div>
            <img
              src="images/nextmaze_footer_logo.svg"
              alt="NextMaze"
              loading="lazy"
              style={{
                width: '170px',
                height: 'auto',
                marginBottom: '24px',
              }}
            />
            <p
              style={{
                fontSize: '15px',
                lineHeight: '1.7',
                color: '#94a3b8',
                fontWeight: 400,
                margin: '0 0 24px 0',
                maxWidth: '320px',
              }}
            >
              Empowering the next generation with cutting-edge skills and industry-ready training programs.
            </p>

            {/* Contact Info */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', color: '#e2e8f0', fontSize: '15px' }}>
                <span style={{ marginRight: '12px', fontSize: '18px', marginTop: '2px' }}>📍</span>
                <span>
                  Velachery Rd, Velachery, Chennai, Tamil Nadu 600042
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', color: '#e2e8f0', fontSize: '15px' }}>
                <span style={{ marginRight: '12px', fontSize: '18px' }}>📞</span>
                <a
                  href="tel:+918072668128"
                  style={{
                    color: '#e2e8f0',
                    textDecoration: 'none',
                  }}
                >
                  +91 80726 68128
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', color: '#e2e8f0', fontSize: '15px' }}>
                <span style={{ marginRight: '12px', fontSize: '18px' }}>✉️</span>
                <a
                  href="mailto:info@nextmaze.in"
                  style={{
                    color: '#3b82f6',
                    textDecoration: 'none',
                  }}
                >
                  info@nextmaze.in
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: '18px',
                fontWeight: 600,
                color: '#f1f5f9',
                marginBottom: '20px',
                letterSpacing: '0.3px',
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { to: '/', label: 'Home', external: false },
                { to: '/about', label: 'About Us', external: false },
                { to: '/courses', label: 'Courses', external: false },
                { to: '/learnx', label: 'LearnX Platform', external: false },
                { to: '/#contact', label: 'Contact Us', external: true },
              ].map((link, index) => (
                <li key={index} style={{ marginBottom: '10px' }}>
                  {link.external ? (
                    <a
                      href={link.to}
                      style={{
                        color: '#94a3b8',
                        textDecoration: 'none',
                        fontSize: '15px',
                        transition: 'color 0.2s ease',
                      }}
                      onMouseEnter={(e) => (e.target.style.color = '#3b82f6')}
                      onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.to}
                      style={{
                        color: '#94a3b8',
                        textDecoration: 'none',
                        fontSize: '15px',
                        transition: 'color 0.2s ease',
                      }}
                      onMouseEnter={(e) => (e.target.style.color = '#3b82f6')}
                      onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4
              style={{
                fontSize: '18px',
                fontWeight: 600,
                color: '#f1f5f9',
                marginBottom: '20px',
                letterSpacing: '0.3px',
              }}
            >
              Our Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { label: 'Technical Training', anchor: '#services' },
                { label: 'Web & Mobile Development', anchor: '#services' },
                { label: 'Performance Marketing', anchor: '#services' },
              ].map((service, index) => (
                <li key={index} style={{ marginBottom: '10px' }}>
                  <a
                    href={service.anchor}
                    style={{
                      color: '#94a3b8',
                      textDecoration: 'none',
                      fontSize: '15px',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#3b82f6')}
                    onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4
              style={{
                fontSize: '18px',
                fontWeight: 600,
                color: '#f1f5f9',
                marginBottom: '20px',
                letterSpacing: '0.3px',
              }}
            >
              Resources
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { to: '/learnx', label: 'Learning Platform', external: false },
                { to: '/#', label: 'Career Guidance', external: true },
                { to: '/#', label: 'Placement Support', external: true },
                { to: '/#', label: 'Alumni Network', external: true },
                { to: '/#', label: 'Industry Partners', external: true },
              ].map((link, index) => (
                <li key={index} style={{ marginBottom: '10px' }}>
                  {link.external ? (
                    <a
                      href={link.to}
                      style={{
                        color: '#94a3b8',
                        textDecoration: 'none',
                        fontSize: '15px',
                        transition: 'color 0.2s ease',
                      }}
                      onMouseEnter={(e) => (e.target.style.color = '#3b82f6')}
                      onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.to}
                      style={{
                        color: '#94a3b8',
                        textDecoration: 'none',
                        fontSize: '15px',
                        transition: 'color 0.2s ease',
                      }}
                      onMouseEnter={(e) => (e.target.style.color = '#3b82f6')}
                      onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          style={{
            borderTop: '1px solid #1e293b',
            paddingTop: '28px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            textAlign: 'center',
          }}
        >
          {/* Legal Links */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '24px',
            }}
          >
            <Link
              to="/terms"
              style={{
                color: '#94a3b8',
                textDecoration: 'none',
                fontSize: '14px',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#3b82f6')}
              onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}
            >
              Terms & Conditions
            </Link>
            <Link
              to="/privacy-policy"
              style={{
                color: '#94a3b8',
                textDecoration: 'none',
                fontSize: '14px',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#3b82f6')}
              onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}
            >
              Privacy Policy
            </Link>
          </div>

          {/* Copyright */}
          <p
            style={{
              color: '#64748b',
              fontSize: '14px',
              fontWeight: 400,
              margin: 0,
            }}
          >
            © 2024 NextMaze. All rights reserved.
          </p>

          {/* Tagline */}
          <p
            style={{
              color: '#475569',
              fontSize: '14px',
              fontStyle: 'italic',
              margin: 0,
              fontWeight: 500,
            }}
          >
            Empowering Future Tech Leaders 🚀
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;