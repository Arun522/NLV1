export const ANIMATION_VARIANTS = {
  sectionVariants: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  },

  slideInLeft: {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  },

  slideInRight: {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  },

  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  },

  logoScrollVariants: {
    animate: {
      x: [0, -2000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  },

  scaleUp: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8 }
    }
  },

  statsCard: {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  },

  progressBar: {
    initial: { width: 0 },
    animate: { width: "100%" }
  },

  textSlider: {
    animate: { 
      opacity: [0, 1, 1, 0],
      y: [20, 0, 0, -20]
    },
    transition: { 
      duration: 4,
      repeat: Infinity,
      repeatDelay: 1,
      times: [0, 0.2, 0.8, 1]
    }
  }
};

export const ANIMATION_CONFIGS = {
  viewport: { once: true, amount: 0.3 },
  viewportLow: { once: true, amount: 0.2 },
  hoverScale: { scale: 1.05, transition: { duration: 0.2 } },
  progressTransition: (delay = 0.5) => ({ duration: 1.5, delay })
};