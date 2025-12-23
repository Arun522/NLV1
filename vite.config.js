import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  
  // Production-optimized build configuration for NextMaze Landing Page
  build: {
    // Output directory
    outDir: 'dist',
    
    // Enable aggressive minification for landing page
    minify: 'esbuild',
    
    // Target modern browsers for smaller bundles
    target: 'es2020',
    
    // Optimize chunk splitting and tree shaking
    rollupOptions: {
      output: {
        // Manual chunk splitting strategy for landing page
        manualChunks: (id) => {
          // Vendor libraries
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react';
            }
            if (id.includes('react-router-dom')) {
              return 'router';
            }
            if (id.includes('framer-motion')) {
              return 'animations';
            }
            if (id.includes('@emailjs')) {
              return 'emailjs';
            }
            return 'vendor';
          }
          
          // Component chunks
          if (id.includes('src/components')) {
            return 'components';
          }
          
          // Pages chunks
          if (id.includes('src/pages')) {
            return 'pages';
          }
        },
        
        // File naming strategy for better caching
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
      // Enable tree shaking
      treeshake: {
        preset: 'recommended',
        moduleSideEffects: false,
      },
    },
    
    // Enable CSS code splitting
    cssCodeSplit: true,
    
    // Set chunk size warning limit (landing pages should be small)
    chunkSizeWarningLimit: 800,
    
    // Disable source maps for production (reduce bundle size)
    sourcemap: false,
    
    // Asset optimization
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
    
    // Report compressed size
    reportCompressedSize: true,
  },
  
  // Dependency pre-bundling optimizations
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      '@emailjs/browser'
    ],
    // Force optimize these dependencies
    force: false,
  },
  
  // Production esbuild optimizations
  esbuild: {
    // Remove console logs and debugger in production
    drop: mode === 'production' ? ['console', 'debugger'] : [],
    // Enable legal comments removal
    legalComments: 'none',
    // Optimize for size
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
  },
  
  // Development server optimizations
  server: {
    // Port configuration
    port: 3000,
    // Enable compression
    compress: true,
    // CORS settings for development
    cors: true,
    // HMR optimizations
    hmr: {
      overlay: true,
    },
  },
  
  // Preview server configuration (for production testing)
  preview: {
    port: 3001,
    host: true, // Listen on all addresses
    cors: true,
  },
  
  // Asset handling optimizations
  assetsInclude: [
    '**/*.woff2',
    '**/*.woff',
    '**/*.ttf',
    '**/*.svg',
    '**/*.png',
    '**/*.jpg',
    '**/*.jpeg',
    '**/*.webp',
  ],
  
  // CSS optimization
  css: {
    // CSS modules configuration
    modules: {
      generateScopedName: mode === 'production' 
        ? '[hash:base64:5]' 
        : '[name]__[local]___[hash:base64:5]',
    },
    // PostCSS optimizations will be handled by postcss.config.js
    postcss: {},
  },
  
  // Public directory
  publicDir: 'public',
  
  // Environment variables prefix
  envPrefix: 'VITE_',
  
  // Base URL for deployment (adjust if deploying to subdirectory)
  base: '/',
  
  // Define global constants
  define: {
    __APP_VERSION__: JSON.stringify('1.0.0'),
    __BUILD_DATE__: JSON.stringify(new Date().toISOString()),
  },
}))
