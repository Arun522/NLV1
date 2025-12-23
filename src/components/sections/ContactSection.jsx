import { motion } from 'framer-motion';
import { useState } from 'react';
import WhyChooseUs from '../ui/WhyChooseUs';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    interestArea: 'Select Interest Area',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Format the message for WhatsApp
      const message = `*New Contact Form Submission*
      
*Name:* ${formData.firstName} ${formData.lastName}
*Email:* ${formData.email}
*Company:* ${formData.company || 'Not specified'}
*Interest Area:* ${formData.interestArea}

*Message:*
${formData.message}`;

      // WhatsApp number (without + sign, just country code and number)
      const phoneNumber = '917397165757'; // +91 73971 65757

      // Encode the message for URL
      const encodedMessage = encodeURIComponent(message);

      // Open WhatsApp with the message
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');

      setSubmitStatus('success');
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        interestArea: 'Select Interest Area',
        message: ''
      });
    } catch (error) {
      console.error('WhatsApp redirect failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Clear status message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <motion.section
      id="contact"
      className="section logos sdv"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="content osnova">
        <div className="div-block-8">
          <motion.h2
            className="heading-2"
            variants={sectionVariants}
          >
            Contact <span className="text-span">Us</span>
          </motion.h2>
          <motion.div
            className="text-block-7"
            style={{
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto',
              display: 'block'
            }}
            variants={sectionVariants}
          >
            Ready to transform your business with cutting-edge technology? Get in touch with our team of experts.
          </motion.div>
        </div>
      </div>

      <motion.div
        className="div-block-35 mini contact-grid"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: 'clamp(25px, 5vw, 40px)', padding: 'clamp(40px, 8vw, 60px) clamp(15px, 4vw, 20px)' }}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Contact Information */}
        <motion.div
          className="contact-info"
          variants={sectionVariants}
        >
          <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 1.75rem)', marginBottom: '20px', color: '#456441' }}>Contact Information</h3>

          {/* Email Section */}
          <div className="contact-item" style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', fontWeight: 'bold', color: '#0353A4', marginBottom: '10px' }}>Email</h4>
            <div style={{ marginBottom: '5px' }}>
              <span style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)', color: '#666' }}>info@nextmaze.in</span>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <span style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)', color: '#666' }}>nextmazetechnologies@gmail.com</span>
            </div>
          </div>

          {/* Phone Section */}
          <div className="contact-item" style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', fontWeight: 'bold', color: '#0353A4', marginBottom: '10px' }}>Phone</h4>
            <div style={{ marginBottom: '5px' }}>
              <span style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)', color: '#666' }}>+91 80726 68128</span>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <span style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)', color: '#666' }}>+91 73971 65757</span>
            </div>
          </div>

          {/* Address Section */}
          <div className="contact-item" style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', fontWeight: 'bold', color: '#0353A4', marginBottom: '10px' }}>Address</h4>
            <div style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)', color: '#666', lineHeight: '1.5' }}>
              Nextmaze Training Center<br />
              Velachery Rd, Velachery<br />
              Chennai, Tamil Nadu 600042
            </div>
          </div>

          {/* Office Hours Section */}
          <div className="contact-item">
            <h4 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', fontWeight: 'bold', color: '#0353A4', marginBottom: '10px' }}>Office Hours</h4>
            <div style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)', color: '#666', lineHeight: '1.6' }}>
              <div style={{ marginBottom: '5px' }}>Monday - Friday: 9:00 AM - 6:00 PM</div>
              <div style={{ marginBottom: '5px' }}>Saturday: 10:00 AM - 4:00 PM</div>
              <div>Sunday: Closed</div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="contact-form"
          variants={sectionVariants}
        >
          <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 1.75rem)', marginBottom: '20px', color: '#456441' }}>Send Us a Message</h3>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div style={{
              padding: '15px',
              backgroundColor: '#d4edda',
              border: '1px solid #c3e6cb',
              borderRadius: '5px',
              color: '#155724',
              marginBottom: '20px'
            }}>
              ✅ Thank you! Your message has been sent successfully. We'll get back to you soon!
            </div>
          )}

          {submitStatus === 'error' && (
            <div style={{
              padding: '15px',
              backgroundColor: '#f8d7da',
              border: '1px solid #f5c6cb',
              borderRadius: '5px',
              color: '#721c24',
              marginBottom: '20px'
            }}>
              ❌ Sorry, there was an error sending your message. Please try again or contact us directly.
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(15px, 3vw, 20px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))', gap: 'clamp(15px, 3vw, 20px)' }}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name *"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                style={{ padding: 'clamp(12px, 2.5vw, 15px)', border: '2px solid #e0e0e0', borderRadius: '5px', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name *"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                style={{ padding: 'clamp(12px, 2.5vw, 15px)', border: '2px solid #e0e0e0', borderRadius: '5px', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleInputChange}
              required
              style={{ padding: 'clamp(12px, 2.5vw, 15px)', border: '2px solid #e0e0e0', borderRadius: '5px', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleInputChange}
              style={{ padding: 'clamp(12px, 2.5vw, 15px)', border: '2px solid #e0e0e0', borderRadius: '5px', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}
            />
            <select
              name="interestArea"
              value={formData.interestArea}
              onChange={handleInputChange}
              style={{ padding: 'clamp(12px, 2.5vw, 15px)', border: '2px solid #e0e0e0', borderRadius: '5px', fontSize: 'clamp(0.9rem, 2vw, 1rem)', backgroundColor: 'white' }}
            >
              <option>Select Interest Area</option>
              <option>Engineering Programs</option>
              <option>Management Programs</option>
              <option>Arts & Design Programs</option>
              <option>Placement Services</option>
              <option>College Partnership</option>
              <option>Other</option>
            </select>
            <textarea
              name="message"
              placeholder="Tell us about your training needs or partnership requirements *"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows="5"
              style={{ padding: 'clamp(12px, 2.5vw, 15px)', border: '2px solid #e0e0e0', borderRadius: '5px', fontSize: 'clamp(0.9rem, 2vw, 1rem)', resize: 'vertical' }}
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="button green w-button"
              style={{
                padding: 'clamp(12px, 2.5vw, 15px) clamp(20px, 4vw, 30px)',
                fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
                backgroundColor: isSubmitting ? '#ccc' : '#456441',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                transition: 'background-color 0.3s ease'
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </motion.div>

      <WhyChooseUs />
    </motion.section>
  );
};

export default ContactSection;