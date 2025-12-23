# NextMaze Landing Page

A modern, high-performance React landing page built with Vite and Tailwind CSS, featuring cutting-edge technology solutions and services. Optimized for production deployment with zero-downtime capabilities.

**Live Site**: [www.nextmaze.in](https://www.nextmaze.in)  
**Repository**: nextmaze-landing

## 🚀 Features

### ✨ Animations
- **Subtle Hover Effects**: Enhanced navigation and button interactions
- **Smooth Transitions**: Non-intrusive animations that don't break layout
- **Logo Hover Animation**: Subtle scaling on hover
- **Button Lift Effects**: Gentle transform and shadow effects
- **Smooth Scroll**: Enhanced scroll behavior

### 🎨 Modern Design
- Responsive design that works on all devices
- Smooth scroll behavior
- Professional color schemes
- Clean typography with custom fonts

### 🏢 NextMaze Branding
- **Company Focus**: Cloud Architecture, AI Services, Digital Transformation
- **Services**: Cloud Solutions, AI Services, Technology Consulting
- **Contact**: hello@nextmaze.io
- **Modern Tech Stack**: React, Vite, Tailwind CSS

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Custom CSS Animations** - Enhanced visual effects
- **Intersection Observer API** - Scroll-triggered animations

## 📦 Installation

```bash
npm install
```

## 🚀 Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Build

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── App.jsx           # Main application component
├── main.jsx          # React entry point
├── index.css         # Tailwind CSS imports
├── webflow.css       # Original Webflow styles
└── animations.css    # Custom animations

public/
├── images/           # All website images
├── fonts/            # Custom font files
└── js/               # External JavaScript libraries
```

## 🎭 Animation Classes

### Tailwind Custom Animations
- `animate-fade-in` - Fade in effect
- `animate-slide-up/down/left/right` - Slide transitions
- `animate-zoom-in` - Zoom effect
- `animate-bounce-in` - Bounce entrance
- `animate-float` - Floating effect
- `animate-glow` - Glowing effect
- `animate-pulse-slow` - Slow pulse
- `animate-spin-slow` - Slow rotation

### Custom CSS Classes
- `.reveal` - Scroll-triggered reveal animation
- `.logo-pulse` - Logo pulsing effect
- `.btn-animated` - Enhanced button animations
- `.hover-lift` - Hover lift effect
- `.gradient-text` - Animated gradient text
- `.card-hover` - Card hover effects

## 🌟 Key Features

1. **Modern Navigation** - Smooth hover effects on all navigation links
2. **Hero Section** - Animated text and floating elements
3. **Scroll Animations** - Elements reveal as you scroll down
4. **Interactive Buttons** - Glowing and scaling effects
5. **Client Testimonials** - Smooth animations and video integration
6. **Contact Form** - Calendly integration with animations
7. **Responsive Footer** - Animated social links

## 📱 Responsive Design

The application is fully responsive and works perfectly on:
- Desktop computers
- Tablets
- Mobile phones
- Various screen sizes and orientations

## 🎯 Performance

- Optimized build output
- Lazy loading for images
- Efficient animation triggers
- Minimal bundle size
- Fast loading times

## 🚀 Deployment

### Quick Deploy
The application is configured for automatic deployment to production using GitHub Actions when you push to the `main` branch.

### Manual Deployment
```bash
# Build for production
npm run build:prod

# Start with PM2
npm run start:pm2

# Check status
npm run status:pm2
```

### Available Scripts
```bash
# Development
npm run dev              # Start development server
npm run build           # Build for production
npm run preview         # Preview production build locally

# Production
npm run build:prod      # Build with production optimizations
npm run build:staging   # Build for staging environment
npm run serve          # Serve built files locally
npm run start          # Start production server

# PM2 Process Management
npm run start:pm2      # Start with PM2
npm run stop:pm2       # Stop PM2 process
npm run reload:pm2     # Reload without downtime
npm run restart:pm2    # Restart PM2 process
npm run logs:pm2       # View PM2 logs
npm run status:pm2     # Check PM2 status

# Deployment (using PM2)
npm run deploy:setup   # Initial deployment setup
npm run deploy:prod    # Deploy to production
npm run deploy:staging # Deploy to staging

# Maintenance
npm run health-check   # Test application health
npm run clean         # Clean build artifacts
npm run audit:check   # Security audit
```

## 🛠️ Production Setup

### Server Requirements
- **VPS**: Ubuntu 22.04 LTS
- **Node.js**: 18.x LTS
- **PM2**: Process manager for zero-downtime deployment
- **Nginx**: Reverse proxy and static file serving
- **SSL**: Let's Encrypt certificates

### Environment Configuration
1. Copy `.env.example` to `.env`
2. Update environment variables for your domain
3. Configure EmailJS credentials
4. Set up analytics and monitoring services

### VPS Setup
Follow the complete setup guide in `VPS_SETUP_GUIDE.md` for:
- Server configuration
- Nginx setup with SSL
- PM2 configuration
- GitHub Actions CI/CD
- Monitoring and backup strategies

## 📊 Performance Optimizations

### Build Optimizations
- **Code Splitting**: Automatic chunk splitting by route and vendor
- **Tree Shaking**: Remove unused code
- **Asset Optimization**: Image compression and inlining
- **Bundle Analysis**: Monitor bundle sizes
- **Gzip Compression**: Reduce transfer sizes

### Runtime Optimizations
- **Lazy Loading**: Components and images load on demand
- **Service Worker**: Cache static assets (optional)
- **CDN Ready**: Easy integration with CDN services
- **Performance Monitoring**: Built-in performance tracking

### SEO Features
- **Meta Tags**: Configurable title, description, keywords
- **Open Graph**: Social media preview optimization
- **Structured Data**: Enhanced search engine understanding
- **Fast Loading**: Optimized for Core Web Vitals

## 🔧 Configuration Files

- **`.github/workflows/deploy.yml`**: GitHub Actions deployment workflow
- **`ecosystem.config.js`**: PM2 configuration for zero-downtime deployment
- **`vite.config.js`**: Production-optimized Vite configuration
- **`.env.example`**: Environment variables template
- **`VPS_SETUP_GUIDE.md`**: Complete server setup instructions

## 🐛 Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear cache and reinstall
npm run clean:all

# Check for dependency issues
npm run audit:check
npm run audit:fix
```

#### Deployment Issues
```bash
# Check PM2 status
npm run status:pm2

# View logs
npm run logs:pm2

# Restart application
npm run restart:pm2
```

#### Performance Issues
```bash
# Analyze bundle size
npm run build:analyze

# Check health status
npm run health-check
```

## 🔒 Security Features

- **Content Security Policy**: Prevent XSS attacks
- **HTTPS Enforcement**: SSL/TLS encryption
- **Security Headers**: X-Frame-Options, X-Content-Type-Options
- **Input Sanitization**: Safe form handling
- **Environment Variable Protection**: Secure secrets management

## 📈 Monitoring

- **Application Logs**: PM2 log management with rotation
- **Health Checks**: Automated application health monitoring  
- **Performance Tracking**: Built-in performance monitoring
- **Error Tracking**: Optional Sentry integration
- **Analytics**: Google Analytics and other tracking services

## 🔄 Backup & Recovery

- **Automated Backups**: Daily backup of application and configuration
- **Zero-Downtime Deployment**: Blue-green deployment strategy
- **Rollback Capability**: Quick rollback to previous versions
- **Database-Free**: Static site with no database dependencies

## 📧 Contact & Support

For questions about NextMaze services:
- **Email**: hello@nextmaze.io
- **Website**: [www.nextmaze.in](https://www.nextmaze.in)
- **Repository Issues**: Use GitHub Issues for technical support

## 📄 License

This project is proprietary to NextMaze. All rights reserved.

---

**Built with ❤️ using React, Vite, and Tailwind CSS**  
**Deployed with GitHub Actions, PM2, and Nginx**
# NLV1
