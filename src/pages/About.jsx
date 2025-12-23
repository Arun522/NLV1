const About = () => {
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
          About <span style={{ color: '#FFD700' }}>NextMaze Tech</span>
        </h1>
        <p style={{ fontSize: 'clamp(1rem, 3vw, 1.4rem)', maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
          Revolutionizing Education through cutting-edge technology
        </p>
      </div>

      {/* Company Overview */}
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', color: '#456441', textAlign: 'center', marginBottom: 'clamp(25px, 5vw, 30px)' }}>
            Building Tomorrow's <span style={{ color: '#0353A4' }}>Workforce Today</span>
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', lineHeight: '1.8', color: '#333', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
            NextMaze Tech is a pioneering EdTech company founded in 2023, dedicated to revolutionizing higher education through innovative technology solutions. We bridge the critical gap between academic knowledge and industry demands, empowering colleges and universities to deliver cutting-edge, placement-oriented education that prepares students for tomorrow's workforce.
          </p>
        </section>

        {/* Mission & Vision */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(400px, 100%), 1fr))', gap: 'clamp(20px, 4vw, 30px)', marginBottom: 'clamp(40px, 8vw, 50px)' }}>
          <div style={{
            background: '#f8f9fa',
            padding: '40px',
            borderRadius: '15px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', color: '#0353A4', marginBottom: '20px' }}>Our Mission</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#555' }}>
              To democratize access to industry-relevant education by empowering colleges and universities with AI-driven, personalized learning platforms. We're committed to bridging the skills gap, ensuring every student graduates with market-ready competencies and guaranteed career pathways in the digital economy.
            </p>
          </div>
          
          <div style={{
            background: '#f8f9fa',
            padding: '40px',
            borderRadius: '15px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', color: '#456441', marginBottom: '20px' }}>Our Vision</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#555' }}>
              To be the global leader in educational transformation, creating a world where every educational institution delivers outcomes-based learning that directly translates to career success. We envision a future where traditional education evolves into dynamic, industry-integrated experiences.
            </p>
          </div>
        </section>

        {/* Leadership Team */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#456441', textAlign: 'center', marginBottom: '40px' }}>
            Leadership <span style={{ color: '#0353A4' }}>Team</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: 'clamp(20px, 4vw, 30px)' }}>
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <h4 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', color: '#0353A4', marginBottom: '5px' }}> Arunkumar Velu</h4>
              <p style={{ fontSize: '1rem', color: '#666', marginBottom: '15px' }}>CEO & Co-Founder</p>
              <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.5' }}>
                Former Tech Lead at TCS with 3 years of full-stack development experience and 4 years as a technical tutor. Computer Science graduate with strong expertise in building scalable web applications and mentoring engineering talent.
              </p>
            </div>
            
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <h4 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', color: '#0353A4', marginBottom: '5px' }}>Anand Viswananthan</h4>
              <p style={{ fontSize: '1rem', color: '#666', marginBottom: '15px' }}>CTO & Co-Founder</p>
              <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.5' }}>
                CS Graduate, former Tech Lead at Norton with 3 years of full-stack experience. Expert in system design and iOS development with hands-on experience at PayPal.
              </p>
            </div>
            
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <h4 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', color: '#0353A4', marginBottom: '5px' }}>Tamil Selvi</h4>
              <p style={{ fontSize: '1rem', color: '#666', marginBottom: '15px' }}>Chief Academic Officer</p>
              <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.5' }}>
                Former Technical Tutor with 4 years of experience mentoring and training engineering students. CS Graduate skilled in full-stack development, system design, and competitive programming.
              </p>
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section style={{
          background: 'linear-gradient(135deg, #0353A4 0%, #456441 100%)',
          color: 'white',
          padding: 'clamp(35px, 7vw, 50px) clamp(20px, 4vw, 30px)',
          borderRadius: '15px',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: 'clamp(30px, 6vw, 40px)' }}>Our Impact</h2>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-around', 
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 'clamp(20px, 4vw, 30px)', 
            maxWidth: '1200px', 
            margin: '0 auto'
          }}>
            <div style={{ padding: 'clamp(10px, 2.5vw, 15px)', minWidth: 'clamp(150px, 35vw, 200px)', textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', fontWeight: 'bold', color: '#FFD700', marginBottom: '10px' }}>150+</div>
              <div style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', opacity: 0.9, lineHeight: '1.3' }}>Partner Universities</div>
            </div>
            <div style={{ padding: 'clamp(10px, 2.5vw, 15px)', minWidth: 'clamp(150px, 35vw, 200px)', textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', fontWeight: 'bold', color: '#FFD700', marginBottom: '10px' }}>50K+</div>
              <div style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', opacity: 0.9, lineHeight: '1.3' }}>Students Trained</div>
            </div>
            <div style={{ padding: 'clamp(10px, 2.5vw, 15px)', minWidth: 'clamp(150px, 35vw, 200px)', textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', fontWeight: 'bold', color: '#FFD700', marginBottom: '10px' }}>94%</div>
              <div style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', opacity: 0.9, lineHeight: '1.3' }}>Average Placement Rate</div>
            </div>
            <div style={{ padding: 'clamp(10px, 2.5vw, 15px)', minWidth: 'clamp(150px, 35vw, 200px)', textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', fontWeight: 'bold', color: '#FFD700', marginBottom: '10px' }}>500+</div>
              <div style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', opacity: 0.9, lineHeight: '1.3' }}>Industry Partners</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;