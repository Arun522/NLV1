import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedSection from '../common/AnimatedSection';
import { ANIMATION_CONFIGS } from '../../constants/animations';

const services = [
    {
        id: 1,
        title: "Technical Training",
        subtitle: "Develop industry-ready skills",
        features: [
            "Job-ready curriculum",
            "Real projects",
            "Interview & placement guidance"
        ],
        image: "images/student_placement_success.png",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        accent: "#667eea",
        link: "/courses"
    },
    {
        id: 2,
        title: "Web & Mobile Development",
        subtitle: "Build powerful digital solutions",
        features: [
            "Fast, scalable, modern apps",
            "Startup & business-focused",
            "Maintenance & support"
        ],
        image: "images/business_app_growth.png",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        accent: "#f5576c",
        link: "/services#web-mobile-portfolio"
    },
    {
        id: 3,
        title: "Performance Marketing",
        subtitle: "Grow your digital presence",
        features: [
            "Meta Ads & Google Ads",
            "Lead generation & ROI-focused campaigns",
            "Transparent reporting"
        ],
        image: "images/social_media_leads.png",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        accent: "#4facfe",
        link: "/services#marketing-success"
    }
];


const ServiceCard = ({ service, index }) => {
    const cardVariants = {
        hidden: { opacity: 0, y: 60, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.6, delay: index * 0.2, ease: "easeOut" }
        }
    };

    const imageVariants = {
        hover: { scale: 1.05, transition: { duration: 0.4, ease: "easeOut" } }
    };

    const featureVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: { delay: 0.4 + (i * 0.1), duration: 0.4 }
        })
    };

    return (
        <motion.div
            className="service-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.3 }
            }}
            style={{
                background: '#fff',
                borderRadius: '24px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                minHeight: '480px',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <motion.div
                style={{
                    height: '200px',
                    position: 'relative',
                    overflow: 'hidden',
                    background: service.gradient
                }}
                whileHover="hover"
            >
                <motion.img
                    src={service.image}
                    alt={service.title}
                    variants={imageVariants}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0.9
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '100px',
                        background: 'linear-gradient(to top, rgba(255,255,255,1), transparent)'
                    }}
                />
            </motion.div>

            <div style={{
                padding: '28px 32px 32px',
                flex: 1,
                display: 'flex',
                flexDirection: 'column'
            }}>
                <motion.div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: service.accent }} />
                    <span style={{ fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1.5px', color: service.accent }}>
                        Our Services
                    </span>
                </motion.div>

                <h3 style={{ fontSize: '26px', fontWeight: '700', color: '#1a1a2e', marginBottom: '8px', lineHeight: '1.2' }}>
                    {service.title}
                </h3>

                <p style={{ fontSize: '15px', color: '#666', marginBottom: '24px', lineHeight: '1.5' }}>
                    {service.subtitle}
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1 }}>
                    {service.features.map((feature, i) => (
                        <motion.li
                            key={i}
                            custom={i}
                            variants={featureVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '12px',
                                marginBottom: '14px',
                                fontSize: '15px',
                                color: '#444',
                                lineHeight: '1.5'
                            }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
                                <circle cx="12" cy="12" r="10" fill={`${service.accent}20`} />
                                <path d="M8 12l2.5 2.5L16 9" stroke={service.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>{feature}</span>
                        </motion.li>
                    ))}
                </ul>

                <Link to={service.link} style={{ textDecoration: 'none' }}>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                            marginTop: '20px',
                            padding: '14px 28px',
                            borderRadius: '12px',
                            border: 'none',
                            background: service.gradient,
                            color: '#fff',
                            fontSize: '14px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            transition: 'box-shadow 0.3s ease',
                            width: '100%'
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 10px 30px ${service.accent}40`; }}
                        onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
                    >
                        Learn More
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </motion.button>
                </Link>
            </div>
        </motion.div>
    );
};

const ServicesSection = React.memo(() => {
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };

    return (
        <div id="services">
            <AnimatedSection className="section sd sdf" viewport={ANIMATION_CONFIGS.viewportLow}>
                <div className="content osnova" style={{ maxWidth: '1300px', margin: '0 auto' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ textAlign: 'center', marginBottom: '60px' }}
                    >
                        <motion.span style={{
                            display: 'inline-block',
                            padding: '8px 20px',
                            background: 'linear-gradient(135deg, #667eea20 0%, #764ba220 100%)',
                            borderRadius: '30px',
                            fontSize: '13px',
                            fontWeight: '600',
                            color: '#667eea',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            marginBottom: '20px'
                        }}>
                            What We Offer
                        </motion.span>
                        <h2 className="heading-2" style={{
                            fontSize: 'clamp(32px, 5vw, 48px)',
                            fontWeight: '700',
                            color: '#1a1a2e',
                            marginBottom: '16px',
                            lineHeight: '1.2'
                        }}>
                            Our <span className="text-span">Services</span>
                        </h2>
                        <p style={{ fontSize: '18px', color: '#666', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
                            Empowering businesses and students with cutting-edge solutions for growth and success
                        </p>
                    </motion.div>

                    <motion.div
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                            gap: '32px',
                            padding: '0 20px'
                        }}
                    >
                        {services.map((service, index) => (
                            <ServiceCard key={service.id} service={service} index={index} />
                        ))}
                    </motion.div>
                </div>

                <div className="green-up dd"></div>
            </AnimatedSection>
        </div>
    );
});

ServicesSection.displayName = 'ServicesSection';

export default ServicesSection;
