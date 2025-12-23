import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const heroContent = [
  {
    id: 1,
    title: "Technical Training",
    tagline: "Professional skill training for college placement",
    features: ["Industry Skills", "Placement Readiness", "Career-focused Training"],
    highlight: "The future of work is human",
    icon: "🎓",
    gradient: "linear-gradient(135deg, #0353A4 0%, #023047 100%)",
    image: "images/student_placement_success.png"
  },
  {
    id: 2,
    title: "Web & Mobile Development",
    tagline: "Build scalable digital solutions for your business",
    features: ["Full-Stack Apps", "Mobile Development", "Startup & Enterprise Solutions"],
    highlight: "Transform ideas into reality",
    icon: "💻",
    gradient: "linear-gradient(135deg, #0353A4 0%, #023047 100%)",
    image: "images/hero_web_mobile_dev.png"
  },
  {
    id: 3,
    title: "Performance Marketing",
    tagline: "Grow your business with data-driven campaigns",
    features: ["Meta Ads & Google Ads", "Lead Generation", "ROI-Focused Campaigns"],
    highlight: "Scale your digital presence",
    icon: "📈",
    gradient: "linear-gradient(135deg, #0353A4 0%, #023047 100%)",
    image: "images/hero_performance_marketing.png"
  }
];

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Auto-rotate hero content
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, duration: 0.8 }
    }
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } }
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: { duration: 3, ease: "easeInOut", repeat: Infinity }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: { duration: 2, ease: "easeInOut", repeat: Infinity }
    }
  };

  const contentVariants = {
    enter: { opacity: 0, y: 30 },
    center: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.4 } }
  };

  const current = heroContent[currentIndex];

  return (
    <section
      className="section head"
      style={isMobile ? {
        paddingTop: '10px',
        paddingBottom: '50px',
        paddingLeft: '20px',
        paddingRight: '20px',
        height: 'auto',
      } : {}}
    >
      <motion.div
        className="content head shadow-strong bbb"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={isMobile ? {
          margin: '0 auto',
          padding: '20px',
          maxWidth: 'calc(100vw - 40px)',
          transform: 'scale(0.95)',
          borderRadius: '15px'
        } : {}}
      >
        <motion.a
          href="#services"
          className="image-2 w-inline-block"
          variants={fadeUpVariants}
        >
          <motion.img
            src="images/65443daaaaa7db30c0e9b8ad_Group%201000002459.svg"
            loading="lazy"
            sizes="(max-width: 479px) 100px, (max-width: 767px) 150px, (max-width: 991px) 200px, 250px"
            alt=""
            className="image-3"
            variants={floatingVariants}
            animate="animate"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </motion.a>

        <div
          className="div-block asa vbn"
          style={isMobile ? {
            padding: '15px 0',
            textAlign: 'center',
            maxWidth: '100%'
          } : {}}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {/* Service Badge */}
              <motion.div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  background: current.gradient,
                  borderRadius: '30px',
                  marginBottom: '16px'
                }}
              >
                <span style={{ fontSize: '16px' }}>{current.icon}</span>
                <span style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#fff',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  {current.title}
                </span>
              </motion.div>

              <div
                className="text-block"
                style={isMobile ? {
                  fontSize: '18px',
                  lineHeight: '1.2',
                  marginBottom: '15px',
                  paddingTop: '10px',
                  textAlign: 'center'
                } : {}}
              >
                <strong>{current.tagline}</strong><br /><br />
                {current.features.map((feature, idx) => (
                  <span key={idx}>
                    {feature}<br />
                  </span>
                ))}
              </div>

              <div
                className="text-block-2"
                style={isMobile ? {
                  fontSize: '20px',
                  lineHeight: '1.0',
                  textAlign: 'center'
                } : {}}
              >
                {current.highlight.split(' ').slice(0, -1).join(' ')} <br />
                <span className="text-span">{current.highlight.split(' ').slice(-1)}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Service Indicators */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            marginTop: '24px'
          }}>
            {heroContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                style={{
                  width: index === currentIndex ? '32px' : '10px',
                  height: '10px',
                  borderRadius: '5px',
                  border: 'none',
                  background: index === currentIndex
                    ? heroContent[index].gradient
                    : 'rgba(0,0,0,0.15)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: 0
                }}
              />
            ))}
          </div>
        </div>

        <div
          className="div-block _2"
          style={isMobile ? {
            transform: 'scale(0.8)',
            transformOrigin: 'center',
            margin: '10px 0',
            height: '200px',
            overflow: 'visible',
            position: 'relative'
          } : {}}
        >
          <motion.img
            src="images/6532af6ec780b51c94c90cf5_Frame%201000002364.svg"
            loading="lazy"
            alt=""
            className="image-5"
            variants={fadeInVariants}
          />
          <motion.img
            src="images/6532b01f02390add49301a6f_Group%201000002470.png"
            loading="lazy"
            sizes="(max-width: 1124px) 100vw, 1124px"
            srcSet="images/6532b01f02390add49301a6f_Group%201000002470-p-500.png 500w, images/6532b01f02390add49301a6f_Group%201000002470-p-800.png 800w, images/6532b01f02390add49301a6f_Group%201000002470-p-1080.png 1080w, images/6532b01f02390add49301a6f_Group%201000002470.png 1124w"
            alt=""
            className="image-4"
            variants={fadeInVariants}
          />
          <motion.div
            className="div-block-2"
            variants={pulseVariants}
            animate="animate"
          >
            <img
              src="images/653109692724c91cba39ab2d_Group%201000002461.png"
              loading="lazy"
              sizes="(max-width: 758px) 100vw, 758px"
              srcSet="images/653109692724c91cba39ab2d_Group%201000002461-p-500.png 500w, images/653109692724c91cba39ab2d_Group%201000002461.png 758w"
              alt=""
              className="image-7"
            />
          </motion.div>

          {/* Rotating Service Image */}
          <AnimatePresence mode="wait">
            <motion.img
              key={`service-img-${currentIndex}`}
              src={current.image}
              loading="lazy"
              alt={current.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="image-6"
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '16px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
              }}
            />
          </AnimatePresence>

          <motion.img
            src="images/6532ae72088d2cf5612b5376_Group%2014.svg"
            loading="lazy"
            sizes="(max-width: 479px) 150px, (max-width: 767px) 200px, (max-width: 991px) 250px, 300px"
            alt=""
            className="image-6 _2"
            variants={floatingVariants}
            animate="animate"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;