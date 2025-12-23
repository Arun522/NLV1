import React from 'react';
import { motion } from 'framer-motion';
import { ANIMATION_VARIANTS, ANIMATION_CONFIGS } from '../../constants/animations';
import { TESTIMONIAL } from '../../constants/data';
import AnimatedSection from '../common/AnimatedSection';
import AnimatedDiv from '../common/AnimatedDiv';
import OptimizedImage from '../common/OptimizedImage';

const SocialSection = React.memo(() => {
  return (
    <AnimatedSection 
      id="more" 
      className="section social"
      viewport={ANIMATION_CONFIGS.viewport}
    >
      <div className="content osnova">
        <div className="div-block-8">
          <motion.h2 
            className="heading-2"
            variants={ANIMATION_VARIANTS.sectionVariants}
          >
            <span className="text-span">Innovative. Scalable. Transformative.</span>
          </motion.h2>
        </div>
      </div>
      
      <div className="div-block-10 mini _1 vert _33">
        <div className="div-block-30 inv">
          <AnimatedDiv 
            className="text-block-8 sdferg"
            variant="slideInRight"
            viewport={ANIMATION_CONFIGS.viewport}
          >
            Say goodbye to outdated curriculum and generic training. <br /><br />
            Say hello to industry-aligned courses, practical skill development, and placement-focused programs.
          </AnimatedDiv>
        </div>
        
        <AnimatedDiv 
          className="div-block-11 shadow-strong video _100"
          variant="slideInLeft"
          viewport={ANIMATION_CONFIGS.viewport}
        >
          <div className="div-block-12 ff inv">
            <OptimizedImage 
              src={TESTIMONIAL.image} 
              alt={`${TESTIMONIAL.author} - ${TESTIMONIAL.position}`}
              className="image-8 svsv" 
            />
            <div className="text-block-7 left ef hj">
              {TESTIMONIAL.author}<br />
              <strong>‍</strong>{TESTIMONIAL.position} <br />
              at {TESTIMONIAL.company}
            </div>
          </div>
          
          <div className="div-block-48 inv">
            <OptimizedImage 
              src="images/653300bffeb8883847c69659_%E2%80%9C.svg" 
              alt="Quote icon"
              className="image-8" 
            />
            <div className="text-block-7 left">
              {TESTIMONIAL.quote}
            </div>
          </div>
          
          <div style={{paddingTop: "56.27659574468085%"}} className="video-2 w-video w-embed">
            <iframe 
              className="embedly-embed" 
              src={TESTIMONIAL.videoSrc}
              width="940" 
              height="529" 
              scrolling="no" 
              allowFullScreen=""
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
              title={TESTIMONIAL.videoTitle}
            />
          </div>
        </AnimatedDiv>
        
        {/* Animated decorative elements */}
        <AnimatedDiv 
          className="div-block-13 _2 sdc dfgdf"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={ANIMATION_CONFIGS.viewport}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        <AnimatedDiv 
          className="div-block-13 _2 sdc"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={ANIMATION_CONFIGS.viewport}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
        <AnimatedDiv 
          className="div-block-13 wf3"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={ANIMATION_CONFIGS.viewport}
          transition={{ duration: 0.6, delay: 0.6 }}
        />
      </div>
      
      <div className="green-up"></div>
    </AnimatedSection>
  );
});

SocialSection.displayName = 'SocialSection';

export default SocialSection;