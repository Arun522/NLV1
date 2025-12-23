import React from 'react';
import { motion } from 'framer-motion';
import { ANIMATION_VARIANTS, ANIMATION_CONFIGS } from '../../constants/animations';
import { FEATURES } from '../../constants/data';
import AnimatedSection from '../common/AnimatedSection';
import AnimatedDiv from '../common/AnimatedDiv';
import OptimizedImage from '../common/OptimizedImage';

const FeatureBlock = ({ feature }) => {
  if (feature.text) {
    return (
      <AnimatedDiv 
        className={feature.className}
        variant={feature.variant}
      >
        <div className="text-block-18 green">{feature.text}</div>
      </AnimatedDiv>
    );
  }

  return (
    <AnimatedDiv 
      className={feature.className}
      variant={feature.variant}
    >
      <div className="div-block-47">
        <div className="text-block-18">
          <strong className={`bold-text${feature.id > 3 ? `-${feature.id - 3}` : '-4'}`}>
            {feature.title}
          </strong>
        </div>
        <div className="div-block-19 _2">
          <motion.div 
            className="div-block-20 _1 _11"
            initial={ANIMATION_VARIANTS.progressBar.initial}
            whileInView={ANIMATION_VARIANTS.progressBar.animate}
            viewport={ANIMATION_CONFIGS.viewport}
            transition={ANIMATION_CONFIGS.progressTransition(feature.progressDelay)}
          />
          <div className="div-block-20 _2 _22" />
        </div>
      </div>
      <div className="text-block-17 v">{feature.description}</div>
    </AnimatedDiv>
  );
};

const AIServicesSection = React.memo(() => {
  return (
    <AnimatedSection 
      className="section sd sdf"
      viewport={ANIMATION_CONFIGS.viewportLow}
    >
      <div className="content osnova">
        <div className="div-block-8">
          <div className="div-block-9 wfw">
            <motion.h2 
              className="heading-2"
              variants={ANIMATION_VARIANTS.sectionVariants}
            >
              <span className="text-span">AI, Cloud Architecture and Future-focused Tech</span>
            </motion.h2>
            
            <motion.div 
              className="slider-replacement"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={ANIMATION_CONFIGS.viewport}
              transition={{ duration: 0.8 }}
            >
              <motion.h2 
                className="heading-2 we"
                animate={ANIMATION_VARIANTS.textSlider.animate}
                transition={ANIMATION_VARIANTS.textSlider.transition}
              >
                for your entire organization
              </motion.h2>
            </motion.div>
          </div>
        </div>
      </div>
      
      <AnimatedDiv 
        className="div-block-40 mini efwd asdasd wef"
        variant="staggerContainer"
        viewport={ANIMATION_CONFIGS.viewportLow}
      >
        <OptimizedImage 
          src="images/65444223dd2e922ad8899915_iPad%20%2526%20Apple%20Pencil.png"
          alt="iPad with Apple Pencil showing AI services interface"
          sizes="(max-width: 1104px) 100vw, 1104px"
          srcSet="images/65444223dd2e922ad8899915_iPad%20%2526%20Apple%20Pencil-p-500.png 500w, images/65444223dd2e922ad8899915_iPad%20%2526%20Apple%20Pencil-p-800.png 800w, images/65444223dd2e922ad8899915_iPad%20%2526%20Apple%20Pencil-p-1080.png 1080w, images/65444223dd2e922ad8899915_iPad%20%2526%20Apple%20Pencil.png 1104w"
          className="image-19"
          variants={ANIMATION_VARIANTS.scaleUp}
        />
        
        {FEATURES.map((feature) => (
          <FeatureBlock key={feature.id} feature={feature} />
        ))}
      </AnimatedDiv>
      
      <div className="green-up dd"></div>
    </AnimatedSection>
  );
});

AIServicesSection.displayName = 'AIServicesSection';

export default AIServicesSection;