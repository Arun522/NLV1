import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState('engineering');
  const navigate = useNavigate();
  
  useEffect(() => {
    // Cleanup function to reset any global styles when leaving this page
    return () => {
      // Reset body styles that might interfere with home page
      document.body.style.removeProperty('display');
      document.body.style.removeProperty('visibility');
      document.body.style.removeProperty('opacity');
    };
  }, []);

  const courseCategories = {
    engineering: {
      title: 'Engineering Colleges',
      subtitle: 'Advanced Technical Programs',
      courses: [
        {
          title: 'Full-Stack Development Mastery',
          duration: '6 months',
          level: 'Intermediate to Advanced',
          description: 'Complete web development program covering React, Node.js, databases, and cloud deployment.',
          highlights: [
            'React.js & Redux State Management',
            'Node.js Backend Development',
            'MongoDB & PostgreSQL Databases',
            'AWS Cloud Deployment',
            'Industry Project Portfolio'
          ],
          placementStats: '95% placement rate',
          companies: ['Google', 'Microsoft', 'Amazon', 'Netflix']
        },
        {
          title: 'AI & Machine Learning Specialization',
          duration: '8 months',
          level: 'Advanced',
          description: 'Comprehensive AI/ML program with hands-on projects in deep learning and neural networks.',
          highlights: [
            'Python & TensorFlow Mastery',
            'Deep Learning & Neural Networks',
            'Computer Vision & NLP',
            'MLOps & Model Deployment',
            'Capstone AI Project'
          ],
          placementStats: '98% placement rate',
          companies: ['OpenAI', 'NVIDIA', 'Tesla', 'Meta']
        },
      ]
    },
    management: {
      title: 'Management Colleges',
      subtitle: 'Business & Leadership Programs',
      courses: [
        {
          title: 'Digital Marketing & Analytics',
          duration: '4 months',
          level: 'Beginner to Intermediate',
          description: 'Comprehensive digital marketing program with focus on data-driven strategies and ROI optimization.',
          highlights: [
            'SEO & SEM Strategies',
            'Social Media Marketing',
            'Google Analytics & Data Analysis',
            'Content Marketing',
            'Email Marketing Automation'
          ],
          placementStats: '88% placement rate',
          companies: ['Google', 'Facebook', 'HubSpot', 'Adobe']
        },
        {
          title: 'Product Management Excellence',
          duration: '6 months',
          level: 'Intermediate to Advanced',
          description: 'Strategic product management program covering user research, roadmapping, and cross-functional leadership.',
          highlights: [
            'User Research & Validation',
            'Product Roadmap Strategy',
            'Agile & Scrum Methodologies',
            'Data-Driven Decision Making',
            'Stakeholder Management'
          ],
          placementStats: '93% placement rate',
          companies: ['Microsoft', 'Amazon', 'Spotify', 'Uber']
        }
      ]
    },
    arts: {
      title: 'Arts & Design Colleges',
      subtitle: 'Creative & Design Programs',
      courses: [
        {
          title: 'UI/UX Design Mastery',
          duration: '5 months',
          level: 'Beginner to Advanced',
          description: 'Complete design program covering user research, wireframing, prototyping, and visual design.',
          highlights: [
            'User Research & Personas',
            'Wireframing & Prototyping',
            'Visual Design Principles',
            'Figma & Adobe Creative Suite',
            'Usability Testing'
          ],
          placementStats: '90% placement rate',
          companies: ['Adobe', 'Figma', 'Airbnb', 'Netflix']
        },
        {
          title: '3D Animation & VFX',
          duration: '8 months',
          level: 'Intermediate to Advanced',
          description: 'Professional 3D animation and visual effects program for film and gaming industries.',
          highlights: [
            'Maya & Blender Mastery',
            'Character Animation',
            'Visual Effects Compositing',
            'Lighting & Rendering',
            'Industry Portfolio Development'
          ],
          placementStats: '85% placement rate',
          companies: ['Pixar', 'DreamWorks', 'Epic Games', 'ILM']
        }
      ]
    }
  };

  return (
    <div style={{ padding: 'clamp(20px, 5vw, 40px) clamp(15px, 4vw, 20px)', minHeight: '80vh' }}>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #456441 0%, #0353A4 100%)',
        color: 'white',
        padding: 'clamp(40px, 8vw, 60px) clamp(15px, 4vw, 20px)',
        borderRadius: '15px',
        textAlign: 'center',
        marginBottom: 'clamp(30px, 6vw, 40px)'
      }}>
        <h1 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 'bold', marginBottom: '20px' }}>
          Professional <span style={{ color: '#FFD700' }}>Training Courses</span>
        </h1>
        <p style={{ fontSize: 'clamp(1rem, 3vw, 1.4rem)', maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
          Industry-aligned programs designed for guaranteed placement success
        </p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Category Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 'clamp(10px, 3vw, 20px)',
          marginBottom: 'clamp(30px, 6vw, 40px)',
          flexWrap: 'wrap'
        }}>
          {Object.entries(courseCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              style={{
                padding: 'clamp(12px, 3vw, 15px) clamp(20px, 4vw, 30px)',
                borderRadius: '25px',
                border: 'none',
                fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                background: activeCategory === key ? '#0353A4' : '#f8f9fa',
                color: activeCategory === key ? 'white' : '#456441',
                boxShadow: activeCategory === key ? '0 4px 12px rgba(3, 83, 164, 0.3)' : '0 2px 8px rgba(0,0,0,0.1)'
              }}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', color: '#456441', textAlign: 'center', marginBottom: '10px' }}>
            {courseCategories[activeCategory].title}
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', color: '#0353A4', textAlign: 'center', marginBottom: 'clamp(30px, 6vw, 40px)' }}>
            {courseCategories[activeCategory].subtitle}
          </p>

          {/* Courses Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(400px, 100%), 1fr))', gap: 'clamp(20px, 4vw, 30px)' }}>
            {courseCategories[activeCategory].courses.map((course, index) => (
              <div
                key={index}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: 'clamp(20px, 4vw, 30px)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(3, 83, 164, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '20px'
                }}>
                  <h3 style={{ fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)', color: '#0353A4', marginBottom: '5px', flex: 1 }}>
                    {course.title}
                  </h3>
                </div>
                
                <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                  <span style={{
                    background: '#456441',
                    color: 'white',
                    padding: '5px 15px',
                    borderRadius: '15px',
                    fontSize: '0.9rem'
                  }}>
                    {course.duration}
                  </span>
                  <span style={{
                    background: '#0353A4',
                    color: 'white',
                    padding: '5px 15px',
                    borderRadius: '15px',
                    fontSize: '0.9rem'
                  }}>
                    {course.level}
                  </span>
                </div>

                <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.6', marginBottom: '20px' }}>
                  {course.description}
                </p>

                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ fontSize: '1.2rem', color: '#456441', marginBottom: '10px' }}>What You'll Learn:</h4>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {course.highlights.map((highlight, idx) => (
                      <li key={idx} style={{
                        fontSize: '0.95rem',
                        color: '#555',
                        marginBottom: '8px',
                        position: 'relative',
                        paddingLeft: '20px'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: '0',
                          color: '#0353A4',
                          fontWeight: 'bold'
                        }}>✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{
                  borderTop: '1px solid #eee',
                  paddingTop: '20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#456441' }}>
                      {course.placementStats}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: '#666', marginTop: '5px' }}>
                      Top Companies: {course.companies.slice(0, 3).join(', ')}
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      navigate('/contact');
                    }}
                    style={{
                    background: '#0353A4',
                    color: 'white',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '25px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'background 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#456441'}
                  onMouseLeave={(e) => e.target.style.background = '#0353A4'}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div style={{
          background: 'linear-gradient(135deg, #0353A4 0%, #456441 100%)',
          color: 'white',
          padding: 'clamp(40px, 8vw, 50px) clamp(20px, 4vw, 30px)',
          borderRadius: '15px',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: '20px' }}>Ready to Transform Your Career?</h2>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', marginBottom: '30px', opacity: 0.9 }}>
            Join thousands of students who have successfully transitioned to high-paying tech careers
          </p>
          <button 
            onClick={() => navigate('/contact')}
            style={{
            background: '#FFD700',
            color: '#333',
            border: 'none',
            padding: 'clamp(15px, 3vw, 18px) clamp(25px, 5vw, 40px)',
            borderRadius: '30px',
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            Start Your Journey Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;