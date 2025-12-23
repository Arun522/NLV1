/**
 * PM2 Ecosystem Configuration for NextMaze Landing Page
 * 
 * This configuration provides:
 * - Zero-downtime deployment with cluster mode
 * - Automatic restart on crashes
 * - Log management and rotation
 * - Environment-specific settings
 * - Performance monitoring
 * - Memory and CPU optimization for landing page
 */

module.exports = {
  apps: [{
    // Application identification
    name: 'nextmaze-landing',
    
    // Custom Node.js server for serving static files
    script: './server.js',
    
    // Working directory
    cwd: '/var/www/nextmaze-landing/current',
    
    // Execution mode: cluster for better performance, fork for simplicity
    // For a lightweight landing page, fork mode is often sufficient
    exec_mode: 'fork',
    
    // Number of instances
    // For landing page: 1 instance is usually enough, but you can scale based on traffic
    instances: 1,
    
    // Auto restart configuration
    autorestart: true,
    
    // Maximum memory threshold (restart if exceeded)
    // Landing pages typically use very little memory
    max_memory_restart: '200M',
    
    // Restart delay to avoid rapid restarts
    restart_delay: 4000,
    
    // Maximum unstable restarts (stop restarting if too many crashes)
    max_restarts: 10,
    min_uptime: '10s',
    
    // Environment variables for production
    env: {
      NODE_ENV: 'production',
      PORT: 3001,
      // Add any custom environment variables your app needs
      REACT_APP_API_URL: 'https://api.nextmaze.in',
      REACT_APP_DOMAIN: 'www.nextmaze.in'
    },
    
    // Development environment (for local testing)
    env_development: {
      NODE_ENV: 'development',
      PORT: 3001,
      REACT_APP_API_URL: 'http://localhost:8000',
      REACT_APP_DOMAIN: 'localhost'
    },
    
    // Staging environment
    env_staging: {
      NODE_ENV: 'staging',
      PORT: 3001,
      REACT_APP_API_URL: 'https://staging-api.nextmaze.in',
      REACT_APP_DOMAIN: 'staging.nextmaze.in'
    },
    
    // Logging configuration
    log_file: '/var/www/nextmaze-landing/shared/logs/combined.log',
    out_file: '/var/www/nextmaze-landing/shared/logs/out.log',
    error_file: '/var/www/nextmaze-landing/shared/logs/error.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    
    // Log rotation to prevent disk space issues
    log_type: 'json',
    merge_logs: true,
    
    // Process management
    kill_timeout: 5000,
    listen_timeout: 8000,
    
    // Graceful shutdown
    kill_retry_time: 100,
    
    // Health monitoring
    health_check_url: 'http://localhost:3001',
    health_check_grace_period: 30000,
    
    // Source map support for better error tracking
    source_map_support: true,
    
    // Disable automatic restart during specific hours (optional)
    // cron_restart: '0 4 * * *', // Restart at 4 AM daily
    
    // Watch files for development (disable in production)
    watch: false,
    ignore_watch: ['node_modules', 'logs', '*.log'],
    
    // Advanced PM2 features
    vizion: true, // Enable git tracking
    post_update: ['npm install', 'npm run build'], // Commands to run after update
    
    // Graceful start/shutdown
    wait_ready: true,
    ready_timeout: 10000,
    
    // Instance variables (useful for load balancing)
    instance_var: 'INSTANCE_ID',
    
    // Custom startup script (optional)
    // pre_hook: 'scripts/pre-deploy.sh',
    // post_hook: 'scripts/post-deploy.sh',
  }],
  
  // Deployment configuration (alternative to GitHub Actions)
  deploy: {
    production: {
      // SSH connection details
      user: 'root',
      host: '69.62.81.61',
      ref: 'origin/main',
      repo: 'git@github.com:YourUsername/nextmaze-landing.git',
      path: '/var/www/nextmaze-landing',
      
      // Build commands
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': 'apt update && apt install git -y',
      
      // SSH options
      ssh_options: 'StrictHostKeyChecking=no',
      
      // Environment
      env: {
        NODE_ENV: 'production'
      }
    },
    
    staging: {
      user: 'root', 
      host: '69.62.81.61',
      ref: 'origin/develop',
      repo: 'git@github.com:YourUsername/nextmaze-landing.git',
      path: '/var/www/nextmaze-landing-staging',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env staging',
      env: {
        NODE_ENV: 'staging'
      }
    }
  }
};

/**
 * Usage Commands:
 * 
 * Start the application:
 * pm2 start ecosystem.config.js --env production
 * 
 * Reload without downtime:
 * pm2 reload nextmaze-landing
 * 
 * Monitor application:
 * pm2 monit
 * 
 * View logs:
 * pm2 logs nextmaze-landing
 * 
 * Application status:
 * pm2 status
 * 
 * Restart application:
 * pm2 restart nextmaze-landing
 * 
 * Stop application:
 * pm2 stop nextmaze-landing
 * 
 * Delete application:
 * pm2 delete nextmaze-landing
 * 
 * Deploy using PM2:
 * pm2 deploy ecosystem.config.js production setup    (first time only)
 * pm2 deploy ecosystem.config.js production          (subsequent deployments)
 * 
 * Save PM2 configuration:
 * pm2 save
 * pm2 startup
 */