import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { ANIMATION_VARIANTS, ANIMATION_CONFIGS } from '../../constants/animations';

const AnimatedDiv = React.memo(({ 
  children, 
  className = '', 
  variant = 'sectionVariants',
  viewport = ANIMATION_CONFIGS.viewport,
  whileHover,
  ...props 
}) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={ANIMATION_VARIANTS[variant]}
      whileHover={whileHover}
      {...props}
    >
      {children}
    </motion.div>
  );
});

AnimatedDiv.displayName = 'AnimatedDiv';

AnimatedDiv.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.string,
  viewport: PropTypes.object,
  whileHover: PropTypes.object
};

export default AnimatedDiv;