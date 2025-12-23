import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { ANIMATION_VARIANTS, ANIMATION_CONFIGS } from '../../constants/animations';

const AnimatedSection = React.memo(({ 
  children, 
  className = '', 
  variant = 'sectionVariants',
  viewport = ANIMATION_CONFIGS.viewport,
  ...props 
}) => {
  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={ANIMATION_VARIANTS[variant]}
      {...props}
    >
      {children}
    </motion.section>
  );
});

AnimatedSection.displayName = 'AnimatedSection';

AnimatedSection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.string,
  viewport: PropTypes.object
};

export default AnimatedSection;