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
