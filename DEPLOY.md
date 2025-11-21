# Deployment Guide

This guide explains how to deploy the Nautical North application using Docker and Caddy on a VPS.

## Prerequisites

- A VPS (Virtual Private Server) running Linux (Ubuntu/Debian recommended).
- Docker and Docker Compose installed on the VPS.
- A domain name pointing to your VPS IP address.
- Caddy Server installed on the VPS (or run via Docker).

## Steps

1.  **Prepare the Application**:
    Ensure you have the `Dockerfile` and `docker-compose.yml` files in your project root.
    (These have already been created for you).

2.  **Transfer Files to VPS**:
    Copy your project files to your VPS. You can use `git` or `scp`.
    ```bash
    # Example using git
    git clone <your-repo-url>
    cd next
    ```

3.  **Build and Run with Docker Compose**:
    Run the following command to build the image and start the container in detached mode.
    ```bash
    docker-compose up -d --build
    ```
    This will start the application on port 3000.

4.  **Configure Caddy**:
    If you have Caddy installed on the host machine:
    
    Edit your Caddyfile (usually located at `/etc/caddy/Caddyfile`):
    ```caddy
    yourdomain.com {
        reverse_proxy localhost:3000
    }
    ```
    
    Reload Caddy:
    ```bash
    sudo systemctl reload caddy
    ```

    *Note: Caddy will automatically provision an SSL certificate for your domain.*

5.  **Verify**:
    Visit `https://yourdomain.com` in your browser.

## Troubleshooting

-   **Check Container Status**: `docker-compose ps`
-   **View Logs**: `docker-compose logs -f`
-   **Rebuild**: `docker-compose up -d --build`

### Common Build Issues

#### 1. Out of Memory (Exit Code 137)
If the build fails with `exit code: 137` or hangs indefinitely, your VPS likely ran out of memory. Next.js builds can be memory-intensive.

**Solution: Add Swap Space**
Run these commands on your VPS to add 2GB of swap space:
```bash
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```
Then try building again.

#### 2. Architecture Mismatch
If you see errors related to `exec format error`, you might be trying to run an ARM64 (Mac M1/M2) image on an AMD64 (Intel/AMD) server.

**Solution:**
If you are building on the server (as recommended in this guide), this shouldn't happen.
If you are building locally and pushing the image, ensure you build for the correct platform:
```bash
docker build --platform linux/amd64 -t your-image-name .
```

#### 3. Sharp / Image Optimization
If you see errors related to image optimization, you may need to explicitly install `sharp` in your project.
```bash
npm install sharp
```
Then rebuild the container.

#### 4. Build Hangs Indefinitely
If the build process seems to freeze or takes forever, it is almost certainly a memory issue (thrashing).

**Immediate Fixes:**
1.  **Enable Swap**: Follow the "Out of Memory" instructions above to add 2GB of swap. This is the most effective fix.
2.  **Disable Checks**: The project has been configured to skip ESLint and TypeScript checks during the build (`next.config.ts`) to save memory. Ensure you have pulled these changes.

#### 5. Limit Build Parallelism
If adding swap isn't enough, you can force Next.js to use fewer CPU cores during the build, which reduces memory usage.

**Solution:**
Update your `Dockerfile` to include:
```dockerfile
ENV NEXT_CPU_COUNT=1
```
(This has already been applied to your Dockerfile).
