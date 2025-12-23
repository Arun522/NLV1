import React from 'react';
import { motion } from 'framer-motion';
import { ANIMATION_VARIANTS, ANIMATION_CONFIGS } from '../../constants/animations';
import { PARTNER_LOGOS } from '../../constants/data';
import AnimatedSection from '../common/AnimatedSection';
import OptimizedImage from '../common/OptimizedImage';

const LogosSection = React.memo(() => {
  return (
    <AnimatedSection 
      className="section logos shadow-strong hjkl"
      viewport={ANIMATION_CONFIGS.viewport}
    >
      <div className="content osnova">
        <div className="div-block-8">
          <motion.h2 
            className="heading-2"
            variants={ANIMATION_VARIANTS.sectionVariants}
          >
            <span className="text-span">Our</span> partners
          </motion.h2>
        </div>
      </div>
      
      <div className="div-block-31">
        <div className="div-block-32"></div>
        <div className="div-block-32 right"></div>
        
        <motion.div 
          className="div-block-33"
          variants={ANIMATION_VARIANTS.logoScrollVariants}
          animate="animate"
        >
          {PARTNER_LOGOS.map((logo, index) => (
            <OptimizedImage
              key={`logo-${index}`}
              src={logo.src}
              alt={logo.alt}
              className="image-15"
              sizes={logo.sizes}
              srcSet={logo.srcSet}
            />
          ))}
          {/* Duplicate for seamless animation */}
          {PARTNER_LOGOS.slice(0, 4).map((logo, index) => (
            <OptimizedImage
              key={`logo-duplicate-${index}`}
              src={logo.src}
              alt={logo.alt}
              className="image-15"
            />
          ))}
        </motion.div>
      </div>
      
      <div className="green-up"></div>
    </AnimatedSection>
  );
});

LogosSection.displayName = 'LogosSection';

export default LogosSection;