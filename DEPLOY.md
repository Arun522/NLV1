# NextMaze Deployment Guide

## Quick Deploy to VPS (69.62.81.61)

### Prerequisites on VPS
```bash
# SSH into your VPS
ssh root@69.62.81.61

# Install Node.js (if not installed)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Nginx
sudo apt-get install -y nginx

# Install PM2 for process management
sudo npm install -g pm2
```

### Option 1: Simple Static Hosting with Nginx

1. **Upload the `dist` folder to your VPS:**
```bash
# From your local machine
scp -r dist/* root@69.62.81.61:/var/www/nextmaze/
```

2. **Configure Nginx on VPS:**
```bash
sudo nano /etc/nginx/sites-available/nextmaze
```

Paste this configuration:
```nginx
server {
    listen 80;
    server_name nextmaze.in www.nextmaze.in;
    root /var/www/nextmaze;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

3. **Enable the site:**
```bash
sudo ln -s /etc/nginx/sites-available/nextmaze /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

4. **Install SSL (HTTPS):**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d nextmaze.in -d www.nextmaze.in
```

### Option 2: Node.js Server with PM2

1. **Upload entire project to VPS:**
```bash
scp -r . root@69.62.81.61:/var/www/nextmaze/
```

2. **On VPS, install and start:**
```bash
cd /var/www/nextmaze
npm install --production
npm run build
pm2 start server.js --name nextmaze
pm2 save
pm2 startup
```

## Your DNS is Ready ✓
Your DNS records are correctly configured:
- `nextmaze.in` → 69.62.81.61
- `www.nextmaze.in` → 69.62.81.61
- `learnx.nextmaze.in` → 69.62.81.61

## Files Ready for Deployment
- `dist/` - Production build (upload this)
- `nginx.conf` - Nginx configuration template
- `server.js` - Optional Node.js server
- `ecosystem.config.js` - PM2 configuration
