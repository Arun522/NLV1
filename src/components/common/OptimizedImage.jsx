import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const OptimizedImage = React.memo(({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  sizes,
  srcSet,
  variants,
  ...props 
}) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      loading={loading}
      sizes={sizes}
      srcSet={srcSet}
      className={className}
      variants={variants}
      {...props}
    />
  );
});

OptimizedImage.displayName = 'OptimizedImage';

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  loading: PropTypes.string,
  sizes: PropTypes.string,
  srcSet: PropTypes.string,
  variants: PropTypes.object
};

export default OptimizedImage;