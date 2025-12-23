# NextMaze Landing Page VPS Setup Guide

This guide will help you set up your VPS server for deploying the NextMaze landing page with zero-downtime deployment using PM2 and GitHub Actions.

## Server Information
- **VPS IP**: 69.62.81.61
- **OS**: Ubuntu 22.04 LTS
- **User**: root
- **Deploy Path**: /var/www/nextmaze-landing
- **Domain**: www.nextmaze.in
- **Port**: 3001
- **PM2 App Name**: nextmaze-landing

## Prerequisites

Before starting, ensure you have:
- SSH access to your VPS (`ssh root@69.62.81.61`)
- Domain DNS pointed to your VPS IP
- GitHub repository with your landing page code

## Step 1: Initial Server Setup

### 1.1 Connect to VPS
```bash
ssh root@69.62.81.61
```

### 1.2 Update System
```bash
# Update package lists and upgrade system
apt update && apt upgrade -y

# Install essential packages
apt install -y curl wget git unzip software-properties-common apt-transport-https ca-certificates gnupg lsb-release
```

### 1.3 Configure Firewall
```bash
# Enable UFW firewall
ufw --force enable

# Allow SSH (port 22)
ufw allow ssh

# Allow HTTP (port 80)
ufw allow http

# Allow HTTPS (port 443)
ufw allow https

# Allow custom application port
ufw allow 3001

# Check firewall status
ufw status verbose
```

## Step 2: Install Node.js and npm

### 2.1 Install Node.js 18.x LTS
```bash
# Add NodeSource repository
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -

# Install Node.js
apt install -y nodejs

# Verify installation
node --version  # Should show v18.x.x
npm --version   # Should show npm version
```

### 2.2 Install Global npm Packages
```bash
# Install PM2 for process management
npm install -g pm2

# Install serve for static file serving
npm install -g serve

# Verify PM2 installation
pm2 --version
```

## Step 3: Install and Configure Nginx

### 3.1 Install Nginx
```bash
# Install Nginx
apt install -y nginx

# Start and enable Nginx
systemctl start nginx
systemctl enable nginx

# Check Nginx status
systemctl status nginx
```

### 3.2 Configure Nginx for NextMaze Landing Page
```bash
# Create Nginx configuration for the site
cat > /etc/nginx/sites-available/nextmaze-landing << 'EOF'
# NextMaze Landing Page Nginx Configuration
server {
    listen 80;
    server_name www.nextmaze.in nextmaze.in;
    
    # Redirect HTTP to HTTPS (will be configured later with SSL)
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name www.nextmaze.in nextmaze.in;
    
    # SSL configuration (to be added after obtaining certificates)
    # ssl_certificate /etc/ssl/certs/nextmaze.crt;
    # ssl_certificate_key /etc/ssl/private/nextmaze.key;
    
    # Root directory for static files
    root /var/www/nextmaze-landing/current;
    index index.html;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private must-revalidate auth;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/javascript
        application/xml+rss
        application/json
        image/svg+xml;
    
    # Cache static assets
    location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }
    
    # Main application
    location / {
        try_files $uri $uri/ @backend;
    }
    
    # Fallback to Node.js application
    location @backend {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        
        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }
    
    # Health check endpoint
    location /health {
        proxy_pass http://localhost:3001/health;
        access_log off;
    }
    
    # Security: Deny access to sensitive files
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }
    
    location ~ ~$ {
        deny all;
        access_log off;
        log_not_found off;
    }
}
EOF

# Enable the site
ln -sf /etc/nginx/sites-available/nextmaze-landing /etc/nginx/sites-enabled/

# Remove default site
rm -f /etc/nginx/sites-enabled/default

# Test Nginx configuration
nginx -t

# If test passes, reload Nginx
systemctl reload nginx
```

## Step 4: Set up SSL with Let's Encrypt

### 4.1 Install Certbot
```bash
# Install snapd
apt install -y snapd

# Install certbot via snap
snap install core; snap refresh core
snap install --classic certbot

# Create symlink
ln -sf /snap/bin/certbot /usr/bin/certbot
```

### 4.2 Obtain SSL Certificate
```bash
# Stop Nginx temporarily
systemctl stop nginx

# Obtain certificate
certbot certonly --standalone -d www.nextmaze.in -d nextmaze.in

# Start Nginx
systemctl start nginx

# Set up automatic renewal
echo "0 12 * * * /usr/bin/certbot renew --quiet" | crontab -
```

### 4.3 Update Nginx Configuration with SSL
```bash
# Update Nginx config with SSL
sed -i 's|# ssl_certificate|ssl_certificate|g' /etc/nginx/sites-available/nextmaze-landing
sed -i 's|/etc/ssl/certs/nextmaze.crt|/etc/letsencrypt/live/www.nextmaze.in/fullchain.pem|g' /etc/nginx/sites-available/nextmaze-landing
sed -i 's|/etc/ssl/private/nextmaze.key|/etc/letsencrypt/live/www.nextmaze.in/privkey.pem|g' /etc/nginx/sites-available/nextmaze-landing

# Test and reload Nginx
nginx -t && systemctl reload nginx
```

## Step 5: Create Deployment Directory Structure

### 5.1 Set up Directory Structure
```bash
# Create main deployment directory
mkdir -p /var/www/nextmaze-landing/{releases,shared/logs,source}

# Set proper permissions
chown -R root:root /var/www/nextmaze-landing
chmod -R 755 /var/www/nextmaze-landing

# Create log files
touch /var/www/nextmaze-landing/shared/logs/{combined.log,out.log,error.log}
```

### 5.2 Clone Repository (Initial Setup)
```bash
# Navigate to source directory
cd /var/www/nextmaze-landing

# Clone your repository (replace with your actual repository URL)
git clone https://github.com/YourUsername/nextmaze-landing.git source

# Set up initial build
cd source
npm install
npm run build

# Copy build to initial release
mkdir -p /var/www/nextmaze-landing/releases/initial
cp -r dist/* /var/www/nextmaze-landing/releases/initial/

# Create current symlink
ln -sf /var/www/nextmaze-landing/releases/initial /var/www/nextmaze-landing/current
```

## Step 6: Configure PM2

### 6.1 Copy PM2 Configuration
```bash
# Copy ecosystem configuration to deployment directory
cp /var/www/nextmaze-landing/source/ecosystem.config.js /var/www/nextmaze-landing/current/

# Start the application with PM2
cd /var/www/nextmaze-landing/current
pm2 start ecosystem.config.js --env production

# Save PM2 configuration
pm2 save

# Set up PM2 to start on boot
pm2 startup

# Follow the instructions provided by the startup command
```

### 6.2 Verify Application
```bash
# Check PM2 status
pm2 status

# Check application logs
pm2 logs nextmaze-landing

# Test HTTP response
curl -I http://localhost:3001

# Test full domain response
curl -I https://www.nextmaze.in
```

## Step 7: Configure GitHub Actions

### 7.1 Set up SSH Key for GitHub Actions
```bash
# Generate SSH key for deployment (if not already existing)
ssh-keygen -t rsa -b 4096 -C "github-actions-deployment" -f ~/.ssh/github_actions_key -N ""

# Add the key to authorized_keys
cat ~/.ssh/github_actions_key.pub >> ~/.ssh/authorized_keys

# Display private key (to add to GitHub secrets)
cat ~/.ssh/github_actions_key
```

### 7.2 GitHub Repository Secrets
Add the following secrets to your GitHub repository (`Settings > Secrets and variables > Actions`):

1. **VPS_SSH_KEY**: Content of the private key (`~/.ssh/github_actions_key`)
2. **VPS_HOST**: 69.62.81.61
3. **VPS_USER**: root

## Step 8: Environment Configuration

### 8.1 Create Production Environment File
```bash
# Create production .env file
cat > /var/www/nextmaze-landing/source/.env << 'EOF'
NODE_ENV=production
PORT=3001
REACT_APP_DOMAIN=www.nextmaze.in
REACT_APP_API_URL=https://api.nextmaze.in
REACT_APP_EMAILJS_SERVICE_ID=your_actual_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_actual_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_actual_public_key
EOF

# Set proper permissions
chmod 600 /var/www/nextmaze-landing/source/.env
```

## Step 9: Monitoring and Maintenance

### 9.1 Set up Log Rotation
```bash
# Create logrotate configuration
cat > /etc/logrotate.d/nextmaze-landing << 'EOF'
/var/www/nextmaze-landing/shared/logs/*.log {
    daily
    missingok
    rotate 52
    compress
    notifempty
    create 644 root root
    postrotate
        pm2 reload nextmaze-landing
    endscript
}
EOF
```

### 9.2 Create Health Check Script
```bash
# Create health check script
cat > /usr/local/bin/nextmaze-health-check.sh << 'EOF'
#!/bin/bash

# NextMaze Landing Page Health Check Script
URL="http://localhost:3001"
MAX_RETRIES=3
RETRY_DELAY=5

for i in $(seq 1 $MAX_RETRIES); do
    if curl -f -s $URL > /dev/null; then
        echo "$(date): Health check passed"
        exit 0
    else
        echo "$(date): Health check failed (attempt $i/$MAX_RETRIES)"
        if [ $i -lt $MAX_RETRIES ]; then
            sleep $RETRY_DELAY
        fi
    fi
done

echo "$(date): All health checks failed, restarting application"
pm2 restart nextmaze-landing
EOF

chmod +x /usr/local/bin/nextmaze-health-check.sh

# Add to crontab (check every 5 minutes)
echo "*/5 * * * * /usr/local/bin/nextmaze-health-check.sh >> /var/log/nextmaze-health.log 2>&1" | crontab -
```

### 9.3 Performance Monitoring
```bash
# Install system monitoring tools
apt install -y htop iotop netstat-nat

# Create performance monitoring script
cat > /usr/local/bin/nextmaze-monitor.sh << 'EOF'
#!/bin/bash

echo "=== NextMaze Landing Page System Status ==="
echo "Date: $(date)"
echo

echo "=== PM2 Status ==="
pm2 status

echo
echo "=== Memory Usage ==="
free -h

echo
echo "=== Disk Usage ==="
df -h /var/www/nextmaze-landing

echo
echo "=== Network Connections ==="
netstat -an | grep :3001

echo
echo "=== Recent Logs (Last 10 lines) ==="
tail -n 10 /var/www/nextmaze-landing/shared/logs/combined.log
EOF

chmod +x /usr/local/bin/nextmaze-monitor.sh
```

## Step 10: Backup Strategy

### 10.1 Create Backup Script
```bash
# Create backup script
cat > /usr/local/bin/nextmaze-backup.sh << 'EOF'
#!/bin/bash

BACKUP_DIR="/var/backups/nextmaze-landing"
DATE=$(date +%Y%m%d_%H%M%S)
APP_DIR="/var/www/nextmaze-landing"

# Create backup directory
mkdir -p $BACKUP_DIR

# Create backup archive
tar -czf $BACKUP_DIR/nextmaze-landing-$DATE.tar.gz \
    -C $APP_DIR \
    current \
    shared \
    ecosystem.config.js

# Keep only last 7 days of backups
find $BACKUP_DIR -name "nextmaze-landing-*.tar.gz" -mtime +7 -delete

echo "Backup completed: nextmaze-landing-$DATE.tar.gz"
EOF

chmod +x /usr/local/bin/nextmaze-backup.sh

# Schedule daily backups at 2 AM
echo "0 2 * * * /usr/local/bin/nextmaze-backup.sh" | crontab -
```

## Verification Checklist

After completing the setup, verify the following:

- [ ] **DNS**: www.nextmaze.in resolves to 69.62.81.61
- [ ] **SSL**: https://www.nextmaze.in shows valid certificate
- [ ] **Application**: Landing page loads correctly
- [ ] **PM2**: `pm2 status` shows app as "online"
- [ ] **Nginx**: `systemctl status nginx` shows "active (running)"
- [ ] **Firewall**: `ufw status` shows required ports open
- [ ] **Logs**: Application logs are being written to `/var/www/nextmaze-landing/shared/logs/`
- [ ] **Health Check**: `curl -f http://localhost:3001` returns success
- [ ] **GitHub Actions**: Test deployment triggers correctly

## Troubleshooting

### Common Issues and Solutions

#### 1. Application Not Starting
```bash
# Check PM2 logs
pm2 logs nextmaze-landing

# Check if port is in use
netstat -tlnp | grep :3001

# Restart PM2
pm2 restart nextmaze-landing
```

#### 2. Nginx Configuration Issues
```bash
# Test Nginx configuration
nginx -t

# Check Nginx error logs
tail -f /var/log/nginx/error.log

# Reload Nginx configuration
systemctl reload nginx
```

#### 3. SSL Certificate Issues
```bash
# Check certificate status
certbot certificates

# Renew certificates manually
certbot renew --dry-run

# Check certificate expiry
openssl x509 -in /etc/letsencrypt/live/www.nextmaze.in/cert.pem -text -noout | grep "Not After"
```

#### 4. Deployment Issues
```bash
# Check GitHub Actions logs in repository
# Verify SSH access from local machine
ssh -i ~/.ssh/github_actions_key root@69.62.81.61

# Test deployment manually
cd /var/www/nextmaze-landing/source
git pull origin main
npm install
npm run build
```

## Security Recommendations

1. **Regular Updates**: Keep the system updated
   ```bash
   apt update && apt upgrade -y
   ```

2. **SSH Security**: 
   - Change SSH port if desired
   - Disable root password login
   - Use SSH keys only

3. **Firewall Rules**: Only allow necessary ports
   ```bash
   ufw status verbose
   ```

4. **Backup Encryption**: Consider encrypting backups for sensitive data

5. **Log Monitoring**: Set up alerts for errors in application logs

## Support and Maintenance

- **Logs Location**: `/var/www/nextmaze-landing/shared/logs/`
- **Configuration**: `/var/www/nextmaze-landing/current/ecosystem.config.js`
- **Nginx Config**: `/etc/nginx/sites-available/nextmaze-landing`
- **SSL Certificates**: `/etc/letsencrypt/live/www.nextmaze.in/`

For ongoing maintenance, regularly:
- Monitor application performance
- Check log files for errors
- Update Node.js and dependencies
- Review and rotate SSL certificates
- Test backup and restore procedures

---

**VPS Setup Complete!** 🎉

Your NextMaze landing page is now ready for zero-downtime deployments with GitHub Actions.