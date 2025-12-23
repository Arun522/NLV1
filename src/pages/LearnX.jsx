import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const LearnX = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedImage, setExpandedImage] = useState(null);
  const navigate = useNavigate();

  // Screenshots data
  const screenshots = [
    {
      src: "images/learnx-courses.png",
      alt: "LearnX Courses Interface",
      title: "Courses Interface",
      description: "Browse comprehensive learning materials with MERN Stack, JavaScript, and Java programming courses"
    },
    {
      src: "images/learnx-dashboard.png",
      alt: "LearnX Student Dashboard",
      title: "Student Dashboard",
      description: "Personalized student profile with progress tracking, achievements, and recent activity"
    },
    {
      src: "images/learnx-coding.png",
      alt: "LearnX Coding Practice Interface",
      title: "Coding Practice",
      description: "Interactive coding environment with problem-solving interface and real-time code execution"
    },
    {
      src: "images/learnx-course-content.png",
      alt: "LearnX Course Content",
      title: "Course Content",
      description: "Detailed course materials with interactive lessons, assignments, and learning resources"
    }
  ];

  // Modal functions
  const openModal = (screenshot) => {
    setExpandedImage(screenshot);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setExpandedImage(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  // Close modal on Escape key
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape' && expandedImage) {
      closeModal();
    }
  }, [expandedImage]);

  // Add keyboard event listener
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset'; // Cleanup on unmount
    };
  }, [handleKeyDown]);

  const features = [
    {
      icon: '🎓',
      title: 'Interactive Learning',
      description: 'Hands-on coding practice with real-time feedback and multiple programming languages support.'
    },
    {
      icon: '⚡',
      title: 'Real-time Coding',
      description: 'Monaco Editor integration with Judge0 API for secure code execution and instant results.'
    },
    {
      icon: '📊',
      title: 'Progress Analytics',
      description: 'Comprehensive reports with performance tracking, time analysis, and improvement charts.'
    },
    {
      icon: '🎯',
      title: 'Assessment System',
      description: 'Secure proctored assessments with anti-cheating measures and detailed evaluation.'
    },
    {
      icon: '🏢',
      title: 'Career Tools',
      description: 'Resume builder and job portal integration for complete career preparation.'
    },
    {
      icon: '🔒',
      title: 'Secure Environment',
      description: 'Role-based access control with monitoring capabilities and data protection.'
    }
  ];

  const modules = [
    {
      id: 'dashboard',
      name: 'Student Dashboard',
      description: 'Personalized dashboard with batch information, assignments, and quick actions',
      features: ['Profile overview', 'Statistics cards', 'Assignment tracking', 'Progress monitoring']
    },
    {
      id: 'practice',
      name: 'Coding Practice',
      description: 'Interactive coding environment with multiple programming languages',
      features: ['Problem browser', 'Monaco code editor', 'Real-time execution', 'Test case validation']
    },
    {
      id: 'assessment',
      name: 'Assessment System',
      description: 'Secure examination platform with proctoring capabilities',
      features: ['Timed assessments', 'Multiple question types', 'Anti-cheating measures', 'Instant feedback']
    },
    {
      id: 'courses',
      name: 'Course Management',
      description: 'Comprehensive course materials with structured learning paths',
      features: ['Batch-specific content', 'Interactive materials', 'Progress tracking', 'Certificates']
    },
    {
      id: 'compiler',
      name: 'Online Compiler',
      description: 'Multi-language code execution environment',
      features: ['5+ Programming languages', 'Custom input support', 'Performance metrics', 'Code templates']
    },
    {
      id: 'reports',
      name: 'Analytics & Reports',
      description: 'Detailed performance analytics and progress tracking',
      features: ['Performance charts', 'Time analysis', 'Skill metrics', 'Comparative data']
    }
  ];

  const tabContent = {
    overview: (
      <div>
        <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', color: '#0353A4', marginBottom: '20px' }}>
          Complete Learning Management System
        </h3>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#555', marginBottom: '30px' }}>
          NextMaze LearnX is a comprehensive learning management platform designed for programming education 
          and skill development. Built with modern web technologies, it provides students with interactive 
          coding environments, assessments, assignments, and career preparation tools.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: 'clamp(15px, 3vw, 20px)', marginBottom: 'clamp(30px, 6vw, 40px)' }}>
          {features.map((feature, index) => (
            <div key={index} style={{
              background: '#f8f9fa',
              padding: 'clamp(20px, 4vw, 25px)',
              borderRadius: '15px',
              textAlign: 'center',
              border: '1px solid #e0e0e0'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{feature.icon}</div>
              <h4 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)', color: '#456441', marginBottom: '10px' }}>{feature.title}</h4>
              <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.5' }}>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Screenshots Section */}
        <div style={{ marginTop: '50px' }}>
          <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', color: '#0353A4', textAlign: 'center', marginBottom: 'clamp(25px, 5vw, 30px)' }}>
            Platform Screenshots
          </h3>
          {/* 2 screenshots per row layout */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)', 
            gap: 'clamp(20px, 4vw, 40px)',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {screenshots.map((screenshot, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div 
                  style={{ 
                    position: 'relative',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onClick={() => openModal(screenshot)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
                  }}
                >
                  <img 
                    src={screenshot.src}
                    alt={screenshot.alt}
                    loading="lazy"
                    style={{ 
                      width: '100%', 
                      borderRadius: '15px', 
                      boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                      marginBottom: '15px',
                      transition: 'all 0.3s ease'
                    }}
                  />
                  {/* Click to expand indicator */}
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: 'rgba(0,0,0,0.7)',
                    color: 'white',
                    padding: '8px',
                    borderRadius: '50%',
                    fontSize: '14px',
                    opacity: '0.7',
                    transition: 'opacity 0.3s ease'
                  }}>
                    🔍
                  </div>
                </div>
                <h4 style={{ 
                  fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', 
                  color: '#456441', 
                  marginBottom: '10px',
                  fontWeight: '600'
                }}>
                  {screenshot.title}
                </h4>
                <p style={{ 
                  fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', 
                  color: '#666',
                  lineHeight: '1.5',
                  maxWidth: '400px',
                  margin: '0 auto'
                }}>
                  {screenshot.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Mobile responsive override */}
          <style>{`
            @media (max-width: 768px) {
              div[style*="grid-template-columns: repeat(2, 1fr)"] {
                grid-template-columns: 1fr !important;
                gap: clamp(30px, 6vw, 40px) !important;
              }
            }
          `}</style>
        </div>
      </div>
    ),
    features: (
      <div>
        <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', color: '#0353A4', marginBottom: 'clamp(25px, 5vw, 30px)' }}>Core Features</h3>
        <div style={{ display: 'grid', gap: '25px' }}>
          {modules.map((module, index) => (
            <div key={index} style={{
              background: 'white',
              padding: 'clamp(20px, 4vw, 30px)',
              borderRadius: '15px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
              border: '1px solid #e0e0e0'
            }}>
              <h4 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', color: '#456441', marginBottom: '15px' }}>{module.name}</h4>
              <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px', lineHeight: '1.6' }}>
                {module.description}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))', gap: '10px' }}>
                {module.features.map((feature, idx) => (
                  <div key={idx} style={{
                    background: '#f8f9fa',
                    padding: '10px 15px',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    color: '#0353A4',
                    border: '1px solid #e0e0e0'
                  }}>
                    ✓ {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    benefits: (
      <div>
        <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', color: '#0353A4', marginBottom: 'clamp(25px, 5vw, 30px)' }}>Why Choose LearnX?</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(350px, 100%), 1fr))', gap: 'clamp(20px, 4vw, 30px)', marginBottom: 'clamp(30px, 6vw, 40px)' }}>
          <div>
            <h4 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', color: '#456441', marginBottom: '20px' }}>For Educational Institutions</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                'Batch-based student management',
                'Comprehensive progress tracking',
                'Automated assessment evaluation',
                'Detailed analytics and reporting',
                'Secure examination environment',
                'Career preparation tools'
              ].map((item, idx) => (
                <li key={idx} style={{ 
                  fontSize: '1rem', 
                  color: '#555', 
                  marginBottom: '15px',
                  paddingLeft: '25px',
                  position: 'relative'
                }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: '0', 
                    color: '#456441', 
                    fontWeight: 'bold',
                    fontSize: '1.2rem'
                  }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', color: '#456441', marginBottom: '20px' }}>For Students</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                'Interactive coding practice',
                'Real-time code execution',
                'Personalized learning paths',
                'Performance analytics',
                'Resume builder integration',
                'Job portal access'
              ].map((item, idx) => (
                <li key={idx} style={{ 
                  fontSize: '1rem', 
                  color: '#555', 
                  marginBottom: '15px',
                  paddingLeft: '25px',
                  position: 'relative'
                }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: '0', 
                    color: '#0353A4', 
                    fontWeight: 'bold',
                    fontSize: '1.2rem'
                  }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #456441 0%, #0353A4 100%)',
          color: 'white',
          padding: 'clamp(25px, 5vw, 40px)',
          borderRadius: '15px',
          textAlign: 'center'
        }}>
          <h4 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '20px' }}>Technical Specifications</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(250px, 100%), 1fr))', gap: 'clamp(15px, 3vw, 20px)', textAlign: 'left' }}>
            <div>
              <h5 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', marginBottom: '15px', color: '#FFD700' }}>Programming Languages</h5>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.95rem' }}>
                <li>• Python</li>
                <li>• Java</li>
                <li>• C++</li>
                <li>• JavaScript</li>
                <li>• C</li>
              </ul>
            </div>
            <div>
              <h5 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', marginBottom: '15px', color: '#FFD700' }}>Integrations</h5>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.95rem' }}>
                <li>• Judge0 API</li>
                <li>• Monaco Editor</li>
                <li>• Supabase Backend</li>
                <li>• YouTube Integration</li>
                <li>• RapidAPI Job Portal</li>
              </ul>
            </div>
            <div>
              <h5 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', marginBottom: '15px', color: '#FFD700' }}>Security Features</h5>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.95rem' }}>
                <li>• Role-based Access</li>
                <li>• Secure Code Execution</li>
                <li>• Assessment Proctoring</li>
                <li>• Data Encryption</li>
                <li>• Anti-cheating Measures</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  };

  return (
    <div style={{ padding: 'clamp(20px, 5vw, 40px) clamp(15px, 4vw, 20px)', minHeight: '80vh' }}>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #456441 0%, #0353A4 100%)',
        color: 'white',
        padding: 'clamp(50px, 10vw, 80px) clamp(15px, 4vw, 20px)',
        borderRadius: '20px',
        textAlign: 'center',
        marginBottom: 'clamp(40px, 8vw, 50px)'
      }}>
        <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', fontWeight: 'bold', marginBottom: '20px' }}>
          NextMaze <span style={{ color: '#FFD700' }}>LearnX</span>
        </h1>
        <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', maxWidth: '800px', margin: '0 auto 30px', opacity: 0.9 }}>
          Comprehensive Learning Management System for Programming Education
        </p>
        <div style={{ display: 'flex', gap: 'clamp(15px, 3vw, 20px)', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button 
            onClick={() => navigate('/contact')}
            style={{
            background: '#FFD700',
            color: '#333',
            border: 'none',
            padding: 'clamp(12px, 3vw, 15px) clamp(20px, 4vw, 30px)',
            borderRadius: '25px',
            fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            Try Live Demo
          </button>
          <button 
            onClick={() => navigate('/contact')}
            style={{
            background: 'transparent',
            color: 'white',
            border: '2px solid white',
            padding: 'clamp(12px, 3vw, 15px) clamp(20px, 4vw, 30px)',
            borderRadius: '25px',
            fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            Request Institution Access
          </button>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Navigation Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 'clamp(8px, 2vw, 10px)',
          marginBottom: 'clamp(30px, 6vw, 40px)',
          flexWrap: 'wrap'
        }}>
          {[
            { id: 'overview', label: 'Platform Overview' },
            { id: 'features', label: 'Core Features' },
            { id: 'benefits', label: 'Benefits & Tech Specs' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: 'clamp(12px, 3vw, 15px) clamp(20px, 4vw, 25px)',
                borderRadius: '25px',
                border: 'none',
                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                background: activeTab === tab.id ? '#0353A4' : '#f8f9fa',
                color: activeTab === tab.id ? 'white' : '#456441',
                boxShadow: activeTab === tab.id ? '0 4px 12px rgba(3, 83, 164, 0.3)' : '0 2px 8px rgba(0,0,0,0.1)'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div style={{
          background: 'white',
          padding: 'clamp(25px, 5vw, 40px)',
          borderRadius: '20px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          marginBottom: 'clamp(40px, 8vw, 50px)'
        }}>
          {tabContent[activeTab]}
        </div>

        {/* CTA Section */}
        <div style={{
          background: '#f8f9fa',
          padding: 'clamp(35px, 7vw, 50px) clamp(20px, 4vw, 30px)',
          borderRadius: '20px',
          textAlign: 'center',
          border: '1px solid #e0e0e0'
        }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', color: '#456441', marginBottom: '20px' }}>
            Ready to Transform Your Institution's Learning Experience?
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', color: '#555', marginBottom: '30px', maxWidth: '700px', margin: '0 auto 30px' }}>
            Join leading educational institutions using NextMaze LearnX for programming education and career preparation.
          </p>
          <div style={{ display: 'flex', gap: 'clamp(15px, 3vw, 20px)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={() => navigate('/contact')}
              style={{
                background: '#0353A4',
                color: 'white',
                border: 'none',
                padding: 'clamp(15px, 3vw, 18px) clamp(25px, 5vw, 35px)',
                borderRadius: '30px',
                fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'background 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.background = '#456441'}
              onMouseLeave={(e) => e.target.style.background = '#0353A4'}
            >
              Schedule a Demo
            </button>
            <button 
              onClick={() => navigate('/contact')}
              style={{
                background: 'transparent',
                color: '#456441',
                border: '2px solid #456441',
                padding: 'clamp(15px, 3vw, 18px) clamp(25px, 5vw, 35px)',
                borderRadius: '30px',
                fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#456441';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#456441';
              }}
            >
              Get Pricing Info
            </button>
          </div>
        </div>
      </div>

      {/* Modal for expanded image */}
      {expandedImage && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000,
            padding: '20px',
            boxSizing: 'border-box'
          }}
          onClick={closeModal}
        >
          {/* Close button */}
          <button
            onClick={closeModal}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              color: 'white',
              fontSize: '24px',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.3s ease',
              zIndex: 10001
            }}
            onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.3)'}
            onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
          >
            ×
          </button>

          {/* Modal content */}
          <div
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on content
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              animation: 'modalFadeIn 0.3s ease-out'
            }}
          >
            {/* Expanded image */}
            <img
              src={expandedImage.src}
              alt={expandedImage.alt}
              style={{
                maxWidth: '100%',
                maxHeight: '80vh',
                borderRadius: '15px',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                marginBottom: '20px'
              }}
            />

            {/* Image info */}
            <div style={{
              textAlign: 'center',
              color: 'white',
              maxWidth: '600px'
            }}>
              <h3 style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                color: '#FFD700',
                marginBottom: '10px',
                fontWeight: '600'
              }}>
                {expandedImage.title}
              </h3>
              <p style={{
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: '1.5',
                margin: 0
              }}>
                {expandedImage.description}
              </p>
            </div>
          </div>

          {/* Modal animation styles */}
          <style>{`
            @keyframes modalFadeIn {
              from {
                opacity: 0;
                transform: scale(0.9);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }
          `}</style>
        </div>
      )}
    </div>
  );
};

export default LearnX;