# NextMaze Landing CI/CD

Complete GitHub Actions workflows for automated building, testing, and deployment.

## 🚀 Workflows Overview

### 1. `ci.yml` - Continuous Integration
- **Triggers**: Pull requests to master/main branch
- **Purpose**: Validate code quality before merging
- **Jobs**: 
  - ✅ ESLint code linting
  - ✅ Build validation
  - ✅ Test execution
  - ✅ Security audit

### 2. `deploy-production.yml` - Production Deployment
- **Triggers**: Push to master/main branch (any code changes)
- **Purpose**: Automatic deployment to production VPS
- **Process**: Build → Test → Docker Build → Deploy → Health Check → Rollback (if needed)
- **Features**:
  - ✅ Zero-downtime deployment
  - ✅ Automatic rollback on failure
  - ✅ Health checks with retries
  - ✅ Container registry integration
  - ✅ Deployment logging

## 🔧 Required Secrets

Add these secrets in your GitHub repository settings (`Settings` → `Secrets and variables` → `Actions`):

### Production VPS Deployment
```
HOST: Your production VPS IP address (e.g., 69.62.81.61)
USERNAME: SSH username (e.g., root)
SSH_KEY: Private SSH key content (PEM format)
PORT: SSH port (usually 22)
```

### Docker Registry
```
GITHUB_TOKEN: Automatically provided by GitHub Actions
```

**Note**: The `GITHUB_TOKEN` is automatically provided and has permissions to push to GitHub Container Registry (ghcr.io).

## 🔑 SSH Key Setup

### 1. Generate SSH key pair on your local machine:
```bash
ssh-keygen -t rsa -b 4096 -C "github-actions@nextmaze.in" -f ~/.ssh/nextmaze_deploy -N ""
```

### 2. Copy public key to your VPS:
```bash
ssh-copy-id -i ~/.ssh/nextmaze_deploy.pub root@your-server-ip
```

### 3. Add private key to GitHub Secrets:
```bash
cat ~/.ssh/nextmaze_deploy
# Copy this entire output to GitHub Secret named: SSH_KEY
```

## 🚀 How It Works

### Automatic Deployment Process:

1. **Developer pushes code** to master/main branch
2. **GitHub Actions detects changes** in relevant files:
   - `src/**` (source code)
   - `public/**` (static assets)
   - `package.json` (dependencies)
   - Configuration files
3. **CI Pipeline runs**:
   - Install dependencies
   - Run linting
   - Build application
   - Run tests
   - Health check
4. **Docker image creation**:
   - Build production Docker image
   - Push to GitHub Container Registry
5. **VPS Deployment**:
   - SSH into production server
   - Pull latest Docker image
   - Deploy with zero downtime
   - Run health checks
   - Automatic rollback if deployment fails
6. **Website automatically updates** 🎉

### Development Workflow:
```bash
# Make your changes
git add .
git commit -m "Add new feature"
git push origin master

# ✨ Your changes will be LIVE in ~10-15 minutes automatically!
```

## 🏥 Health Checks & Rollback

The deployment includes robust health checks:

- **Container Health**: Verifies Docker container is running
- **HTTP Response**: Tests website responds correctly
- **Retry Logic**: 10 attempts with 10-second intervals
- **Automatic Rollback**: Restores previous version if deployment fails
- **Logging**: All deployments logged to `/var/log/nextmaze-deployments.log`

## 📊 Monitoring

### Check Deployment Status:
1. **GitHub Actions**: Visit your repository → Actions tab
2. **VPS Logs**: SSH to server and check logs
   ```bash
   # View deployment logs
   tail -f /var/log/nextmaze-deployments.log
   
   # Check container status
   docker ps | grep nextmaze-landing
   
   # View application logs
   docker logs nextmaze-landing --tail 50
   ```

### Manual Deployment:
You can trigger deployment manually:
1. Go to GitHub repository → Actions tab
2. Select "Deploy to Production" workflow
3. Click "Run workflow" → "Run workflow"

## 🔧 VPS Server Requirements

### Prerequisites:
- **Ubuntu 20.04+** or similar Linux distribution
- **Docker & Docker Compose** installed
- **SSH access** configured
- **Firewall** allowing ports 22, 80, 443
- **Domain** pointed to server (optional)

### Setup Commands:
```bash
# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh && sh get-docker.sh

# Install Docker Compose
curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

# Setup deployment directory
mkdir -p /var/www/nextmaze-landing

# Configure firewall
ufw allow 22 && ufw allow 80 && ufw allow 443 && ufw --force enable
```

## ⚡ Quick Setup Checklist

**Repository Setup:**
- [ ] Repository secrets configured (HOST, USERNAME, SSH_KEY, PORT)
- [ ] Workflows are present in `.github/workflows/`
- [ ] Dockerfile exists in repository root

**VPS Setup:**
- [ ] Docker & Docker Compose installed
- [ ] SSH key access configured
- [ ] Firewall configured (ports 22, 80, 443)
- [ ] Deployment directory created

**Testing:**
- [ ] Push a small change to test automatic deployment
- [ ] Verify website updates after deployment completes
- [ ] Check GitHub Actions shows successful deployment

## 🎯 Success!

Once configured, your development workflow becomes:

```bash
# Any code change you make:
git add .
git commit -m "Your updates"
git push origin master

# ✨ Automatically becomes LIVE on your website!
# No manual deployment steps needed!
```

**Your application now has enterprise-grade CI/CD automation!** 🚀

## 📞 Troubleshooting

### Common Issues:

1. **Deployment fails**: Check GitHub Actions logs and VPS Docker logs
2. **SSH connection issues**: Verify SSH key is correctly configured
3. **Health check fails**: Ensure application starts correctly and responds on port 80
4. **Docker issues**: Check if Docker service is running on VPS
5. **Firewall blocks**: Ensure ports 22, 80, 443 are open

### Debug Commands:
```bash
# Check GitHub Actions logs in repository → Actions tab
# SSH to VPS and run:
docker ps -a                              # Check containers
docker logs nextmaze-landing              # Check app logs
curl -I http://localhost                   # Test local response
systemctl status docker                   # Check Docker service
```

---

**Happy Deploying!** 🚀 Your code changes will now automatically reflect on your live website!