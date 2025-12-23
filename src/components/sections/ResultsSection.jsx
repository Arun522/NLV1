import React from 'react';
import { motion } from 'framer-motion';
import { ANIMATION_VARIANTS, ANIMATION_CONFIGS } from '../../constants/animations';
import { STATS } from '../../constants/data';
import AnimatedSection from '../common/AnimatedSection';
import AnimatedDiv from '../common/AnimatedDiv';
import OptimizedImage from '../common/OptimizedImage';

const StatsCard = ({ stat }) => {
  return (
    <AnimatedDiv 
      className="div-block-36 nn"
      variant="statsCard"
      whileHover={ANIMATION_CONFIGS.hoverScale}
    >
      <div className="div-block-37">
        <div className="text-block-15">{stat.title}</div>
      </div>
      <div className="div-block-37 _2222">
        <motion.div 
          className="text-block-16"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={ANIMATION_CONFIGS.viewport}
          transition={{ duration: 0.8, delay: stat.delay }}
        >
          {stat.value}
        </motion.div>
        <OptimizedImage 
          src={stat.graphSrc}
          alt={`Graph showing ${stat.title}`}
          className="image-17"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={ANIMATION_CONFIGS.viewport}
          transition={{ duration: 0.6, delay: stat.delay + 0.2 }}
        />
      </div>
    </AnimatedDiv>
  );
};

const ResultsSection = React.memo(() => {
  return (
    <AnimatedSection className="section" viewport={ANIMATION_CONFIGS.viewport}>
      <div className="content osnova">
        <div className="div-block-8">
          <motion.h2 
            className="heading-2"
            variants={ANIMATION_VARIANTS.sectionVariants}
          >
            The results speak <span className="text-span">for themselves</span>
          </motion.h2>
        </div>
      </div>
      
      <AnimatedDiv 
        className="div-block-35 mini"
        variant="staggerContainer"
        viewport={ANIMATION_CONFIGS.viewport}
      >
        {STATS.map((stat) => (
          <StatsCard key={stat.id} stat={stat} />
        ))}
      </AnimatedDiv>
    </AnimatedSection>
  );
});

ResultsSection.displayName = 'ResultsSection';

export default ResultsSection;