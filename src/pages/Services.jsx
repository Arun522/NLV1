import React from 'react';
import { Link } from 'react-router-dom';

const services = [
    {
        id: 1,
        title: "Technical Training",
        subtitle: "Industry-Ready Skill Development",
        description: "Transform your career with our comprehensive technical training programs designed in collaboration with industry leaders. Our curriculum bridges the gap between academic learning and real-world requirements.",
        icon: "🎓",
        features: [
            "Job-ready curriculum designed with industry input",
            "Hands-on real-world projects and case studies",
            "Interview preparation and mock interviews",
            "Resume building and LinkedIn optimization",
            "Placement assistance with partner companies",
            "Soft skills and communication training"
        ],
        benefits: ["100+ Placements", "20+ Partner Companies", "95% Success Rate"],
        image: "images/student_placement_success.png",
        gradient: "linear-gradient(135deg, #0353A4 0%, #023047 100%)",
        accent: "#0353A4",
        ctaText: "Start Learning",
        ctaLink: "/courses"
    },
    {
        id: 2,
        title: "Web & Mobile Development",
        subtitle: "Scalable Digital Solutions",
        description: "From startup MVPs to enterprise applications, we build high-performance web and mobile solutions that drive business growth. Our expert team delivers pixel-perfect designs with robust functionality.",
        icon: "💻",
        features: [
            "Full-stack web application development",
            "Native & cross-platform mobile apps",
            "E-commerce solutions and payment integration",
            "Custom CRM and ERP systems",
            "API development and third-party integrations",
            "Ongoing maintenance and support"
        ],
        benefits: ["50+ Projects Delivered", "Modern Tech Stack", "24/7 Support"],
        image: "images/hero_web_mobile_dev.png",
        gradient: "linear-gradient(135deg, #0353A4 0%, #023047 100%)",
        accent: "#0353A4",
        ctaText: "Get Quote",
        ctaLink: "/contact"
    },
    {
        id: 3,
        title: "Performance Marketing",
        subtitle: "Data-Driven Growth",
        description: "Maximize your ROI with our performance marketing expertise. We create and manage campaigns that deliver measurable results, helping you reach the right audience at the right time.",
        icon: "📈",
        features: [
            "Meta Ads (Facebook & Instagram) management",
            "Google Ads and Search campaigns",
            "Lead generation and funnel optimization",
            "Conversion rate optimization",
            "Analytics and detailed reporting",
            "A/B testing and campaign optimization"
        ],
        benefits: ["3x Average ROI", "500+ Campaigns", "Transparent Reporting"],
        image: "images/hero_performance_marketing.png",
        gradient: "linear-gradient(135deg, #0353A4 0%, #023047 100%)",
        accent: "#0353A4",
        ctaText: "Grow Now",
        ctaLink: "/contact"
    }
];

// Portfolio/Case Studies Data
const portfolioProjects = [
    {
        title: "E-Commerce Platform",
        category: "Mobile App",
        description: "Full-featured shopping app with 50K+ downloads",
        image: "images/portfolio_ecommerce_app_1766503845995.png",
        stats: { users: "50K+", rating: "4.8★", conversion: "+45%" }
    },
    {
        title: "Analytics Dashboard",
        category: "Web Application",
        description: "Enterprise SaaS platform for data visualization",
        image: "images/portfolio_dashboard_1766503868921.png",
        stats: { clients: "100+", uptime: "99.9%", dataPoints: "1M+" }
    }
];

const marketingCaseStudies = [
    {
        client: "Fashion Retail Brand",
        challenge: "Low online visibility and minimal lead generation",
        results: [
            { metric: "ROAS", value: "4.2x", description: "Return on Ad Spend" },
            { metric: "Leads", value: "1,500+", description: "Monthly Qualified Leads" },
            { metric: "CPA", value: "-65%", description: "Cost Per Acquisition" }
        ]
    },
    {
        client: "SaaS Startup",
        challenge: "Need to scale user acquisition efficiently",
        results: [
            { metric: "Signups", value: "10K+", description: "New User Registrations" },
            { metric: "CTR", value: "3.8%", description: "Click-Through Rate" },
            { metric: "CAC", value: "-40%", description: "Customer Acquisition Cost" }
        ]
    }
];

const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Node.js", icon: "🟢" },
    { name: "React Native", icon: "📱" },
    { name: "Flutter", icon: "🦋" },
    { name: "Python", icon: "🐍" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
    { name: "AWS", icon: "☁️" },
    { name: "Firebase", icon: "🔥" }
];

const ServiceDetailCard = ({ service, index }) => {
    const isEven = index % 2 === 0;

    return (
        <div
            style={{
                background: '#fff',
                borderRadius: '32px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
                marginBottom: '60px'
            }}
        >
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                minHeight: '500px'
            }}>
                {/* Image Section */}
                <div
                    style={{
                        background: service.gradient,
                        padding: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        order: isEven ? 0 : 1,
                        minHeight: '400px'
                    }}
                >
                    <img
                        src={service.image}
                        alt={service.title}
                        style={{
                            maxWidth: '100%',
                            maxHeight: '350px',
                            borderRadius: '16px',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                        }}
                    />
                </div>

                {/* Content Section */}
                <div style={{
                    padding: '48px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    order: isEven ? 1 : 0
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        marginBottom: '16px'
                    }}>
                        <span style={{ fontSize: '40px' }}>{service.icon}</span>
                        <span style={{
                            padding: '6px 16px',
                            background: `${service.accent}15`,
                            borderRadius: '20px',
                            fontSize: '12px',
                            fontWeight: '600',
                            color: service.accent,
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                        }}>
                            Service {service.id}
                        </span>
                    </div>

                    <h2 style={{
                        fontSize: 'clamp(28px, 4vw, 36px)',
                        fontWeight: '700',
                        color: '#1a1a2e',
                        marginBottom: '8px',
                        lineHeight: '1.2'
                    }}>
                        {service.title}
                    </h2>

                    <p style={{
                        fontSize: '18px',
                        fontWeight: '500',
                        color: service.accent,
                        marginBottom: '16px'
                    }}>
                        {service.subtitle}
                    </p>

                    <p style={{
                        fontSize: '16px',
                        color: '#666',
                        lineHeight: '1.7',
                        marginBottom: '24px'
                    }}>
                        {service.description}
                    </p>

                    {/* Features Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '12px',
                        marginBottom: '24px'
                    }}>
                        {service.features.map((feature, i) => (
                            <div
                                key={i}
                                style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '8px',
                                    fontSize: '14px',
                                    color: '#444'
                                }}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
                                    <circle cx="12" cy="12" r="10" fill={`${service.accent}20`} />
                                    <path d="M8 12l2.5 2.5L16 9" stroke={service.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>

                    {/* Benefits Pills */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '12px',
                        marginBottom: '28px'
                    }}>
                        {service.benefits.map((benefit, i) => (
                            <span
                                key={i}
                                style={{
                                    padding: '10px 20px',
                                    background: service.gradient,
                                    borderRadius: '25px',
                                    color: '#fff',
                                    fontSize: '13px',
                                    fontWeight: '600'
                                }}
                            >
                                {benefit}
                            </span>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <Link to={service.ctaLink} style={{ textDecoration: 'none', alignSelf: 'flex-start' }}>
                        <button
                            style={{
                                padding: '16px 32px',
                                borderRadius: '14px',
                                border: 'none',
                                background: service.gradient,
                                color: '#fff',
                                fontSize: '16px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}
                        >
                            {service.ctaText}
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

// Portfolio Section Component
const PortfolioSection = () => (
    <section id="web-mobile-portfolio" style={{
        background: 'linear-gradient(180deg, #f8fafc 0%, #fff 100%)',
        padding: '80px 20px',
        scrollMarginTop: '80px'
    }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div
                style={{ textAlign: 'center', marginBottom: '60px' }}
            >
                <span style={{
                    display: 'inline-block',
                    padding: '8px 20px',
                    background: 'linear-gradient(135deg, rgba(3, 83, 164, 0.1) 0%, rgba(2, 48, 71, 0.1) 100%)',
                    borderRadius: '30px',
                    fontSize: '13px',
                    fontWeight: '600',
                    color: '#0353A4',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    marginBottom: '20px'
                }}>
                    💻 Web & Mobile Portfolio
                </span>
                <h2 style={{
                    fontSize: 'clamp(32px, 4vw, 44px)',
                    fontWeight: '700',
                    color: '#1a1a2e',
                    marginBottom: '16px'
                }}>
                    Projects That <span style={{ color: '#0353A4' }}>Deliver Results</span>
                </h2>
                <p style={{ fontSize: '18px', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
                    Explore some of our recent work that has helped businesses scale and succeed
                </p>
            </div>

            {/* Tech Stack */}
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '16px',
                    marginBottom: '60px'
                }}
            >
                {techStack.map((tech, i) => (
                    <div
                        key={i}
                        style={{
                            padding: '12px 24px',
                            background: '#fff',
                            borderRadius: '12px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontSize: '14px',
                            fontWeight: '600',
                            color: '#1a1a2e'
                        }}
                    >
                        <span style={{ fontSize: '20px' }}>{tech.icon}</span>
                        {tech.name}
                    </div>
                ))}
            </div>

            {/* Portfolio Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: '32px'
            }}>
                {portfolioProjects.map((project, i) => (
                    <div
                        key={i}
                        style={{
                            background: '#fff',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            boxShadow: '0 15px 50px rgba(0,0,0,0.1)'
                        }}
                    >
                        <div style={{
                            height: '280px',
                            overflow: 'hidden',
                            background: 'linear-gradient(135deg, #0353A4 0%, #023047 100%)'
                        }}>
                            <img
                                src={project.image}
                                alt={project.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                        <div style={{ padding: '28px' }}>
                            <span style={{
                                display: 'inline-block',
                                padding: '6px 14px',
                                background: '#0353A415',
                                borderRadius: '20px',
                                fontSize: '12px',
                                fontWeight: '600',
                                color: '#0353A4',
                                marginBottom: '12px'
                            }}>
                                {project.category}
                            </span>
                            <h3 style={{
                                fontSize: '22px',
                                fontWeight: '700',
                                color: '#1a1a2e',
                                marginBottom: '8px'
                            }}>
                                {project.title}
                            </h3>
                            <p style={{
                                fontSize: '15px',
                                color: '#666',
                                marginBottom: '20px'
                            }}>
                                {project.description}
                            </p>
                            <div style={{
                                display: 'flex',
                                gap: '16px'
                            }}>
                                {Object.entries(project.stats).map(([key, value], idx) => (
                                    <div key={idx} style={{ textAlign: 'center' }}>
                                        <div style={{
                                            fontSize: '20px',
                                            fontWeight: '700',
                                            color: '#0353A4'
                                        }}>
                                            {value}
                                        </div>
                                        <div style={{
                                            fontSize: '12px',
                                            color: '#888',
                                            textTransform: 'capitalize'
                                        }}>
                                            {key}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// Marketing Case Studies Component
const MarketingCaseStudies = () => (
    <section id="marketing-success" style={{
        background: '#fff',
        padding: '80px 20px',
        scrollMarginTop: '80px'
    }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div
                style={{ textAlign: 'center', marginBottom: '60px' }}
            >
                <span style={{
                    display: 'inline-block',
                    padding: '8px 20px',
                    background: 'linear-gradient(135deg, rgba(3, 83, 164, 0.1) 0%, rgba(2, 48, 71, 0.1) 100%)',
                    borderRadius: '30px',
                    fontSize: '13px',
                    fontWeight: '600',
                    color: '#0353A4',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    marginBottom: '20px'
                }}>
                    📈 Marketing Success Stories
                </span>
                <h2 style={{
                    fontSize: 'clamp(32px, 4vw, 44px)',
                    fontWeight: '700',
                    color: '#1a1a2e',
                    marginBottom: '16px'
                }}>
                    Real Results for <span style={{ color: '#0353A4' }}>Real Businesses</span>
                </h2>
                <p style={{ fontSize: '18px', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
                    See how our data-driven campaigns have transformed businesses
                </p>
            </div>

            {/* Marketing Results Image */}
            <div
                style={{
                    marginBottom: '60px',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.1)'
                }}
            >
                <img
                    src="images/portfolio_marketing_results_1766503893963.png"
                    alt="Marketing Performance Results"
                    style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block'
                    }}
                />
            </div>

            {/* Case Study Cards */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: '32px'
            }}>
                {marketingCaseStudies.map((study, i) => (
                    <div
                        key={i}
                        style={{
                            background: 'linear-gradient(135deg, #0353A4 0%, #023047 100%)',
                            borderRadius: '24px',
                            padding: '36px',
                            color: '#fff'
                        }}
                    >
                        <div style={{
                            display: 'inline-block',
                            padding: '8px 16px',
                            background: 'rgba(255,255,255,0.2)',
                            borderRadius: '20px',
                            fontSize: '13px',
                            fontWeight: '600',
                            marginBottom: '20px'
                        }}>
                            Case Study
                        </div>
                        <h3 style={{
                            fontSize: '24px',
                            fontWeight: '700',
                            marginBottom: '12px'
                        }}>
                            {study.client}
                        </h3>
                        <p style={{
                            fontSize: '15px',
                            opacity: 0.85,
                            marginBottom: '28px',
                            lineHeight: '1.6'
                        }}>
                            <strong>Challenge:</strong> {study.challenge}
                        </p>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '16px'
                        }}>
                            {study.results.map((result, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        background: 'rgba(255,255,255,0.15)',
                                        borderRadius: '16px',
                                        padding: '20px 16px',
                                        textAlign: 'center'
                                    }}
                                >
                                    <div style={{
                                        fontSize: '28px',
                                        fontWeight: '700',
                                        marginBottom: '4px'
                                    }}>
                                        {result.value}
                                    </div>
                                    <div style={{
                                        fontSize: '12px',
                                        opacity: 0.8
                                    }}>
                                        {result.description}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Platform Badges */}
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '20px',
                    marginTop: '60px'
                }}
            >
                {['Meta Business Partner', 'Google Ads Certified', 'Analytics Expert', 'Conversion Specialist'].map((badge, i) => (
                    <div
                        key={i}
                        style={{
                            padding: '16px 28px',
                            background: '#f8fafc',
                            borderRadius: '12px',
                            border: '2px solid #e2e8f0',
                            fontSize: '14px',
                            fontWeight: '600',
                            color: '#1a1a2e',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                        }}
                    >
                        <span style={{ fontSize: '20px' }}>✓</span>
                        {badge}
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Services = React.memo(() => {
    return (
        <>
            {/* Compact Hero Section */}
            <section style={{
                background: 'linear-gradient(180deg, #f8fafc 0%, #fff 100%)',
                padding: '60px 20px 20px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
                    <span
                        style={{
                            display: 'inline-block',
                            padding: '8px 20px',
                            background: 'linear-gradient(135deg, rgba(3, 83, 164, 0.1) 0%, rgba(2, 48, 71, 0.1) 100%)',
                            borderRadius: '30px',
                            fontSize: '12px',
                            fontWeight: '600',
                            color: '#0353A4',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            marginBottom: '16px'
                        }}
                    >
                        Our Expertise
                    </span>

                    <h1
                        style={{
                            fontSize: 'clamp(28px, 5vw, 42px)',
                            fontWeight: '700',
                            color: '#1a1a2e',
                            marginBottom: '12px',
                            lineHeight: '1.2'
                        }}
                    >
                        Services That <span style={{ color: '#0353A4' }}>Drive Growth</span>
                    </h1>

                    <p
                        style={{
                            fontSize: '16px',
                            color: '#666',
                            maxWidth: '600px',
                            margin: '0 auto',
                            lineHeight: '1.6'
                        }}
                    >
                        From technical training to digital solutions, we provide comprehensive services
                        designed to empower your success.
                    </p>
                </div>
            </section>

            {/* Services Detail Section */}
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px 20px 60px' }}>
                {services.map((service, index) => (
                    <ServiceDetailCard key={service.id} service={service} index={index} />
                ))}
            </div>

            {/* Portfolio Section - Web & Mobile */}
            <PortfolioSection />

            {/* Marketing Case Studies */}
            <MarketingCaseStudies />

            {/* CTA Section */}
            <section style={{
                background: 'linear-gradient(135deg, #0353A4 0%, #023047 100%)',
                padding: '80px 20px',
                textAlign: 'center'
            }}>
                <div
                    style={{ maxWidth: '700px', margin: '0 auto' }}
                >
                    <h2 style={{
                        fontSize: 'clamp(28px, 4vw, 40px)',
                        fontWeight: '700',
                        color: '#fff',
                        marginBottom: '16px'
                    }}>
                        Ready to Get Started?
                    </h2>
                    <p style={{
                        fontSize: '18px',
                        color: 'rgba(255,255,255,0.8)',
                        marginBottom: '32px',
                        lineHeight: '1.6'
                    }}>
                        Let's discuss how we can help achieve your goals. Contact us today for a free consultation.
                    </p>
                    <Link to="/contact" style={{ textDecoration: 'none' }}>
                        <button
                            style={{
                                padding: '18px 40px',
                                borderRadius: '14px',
                                border: '2px solid #fff',
                                background: '#fff',
                                color: '#0353A4',
                                fontSize: '16px',
                                fontWeight: '600',
                                cursor: 'pointer'
                            }}
                        >
                            Contact Us Now
                        </button>
                    </Link>
                </div>
            </section>
        </>
    );
});

Services.displayName = 'Services';

export default Services;

