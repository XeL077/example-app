Koa - react app.
docker network create app-net



nginx -s reload

apt-get update
apt-get install nano


sudo docker-compose up -d nginx-web-proxy-server

sudo docker exec -it 5b96f3690b8e sh

sudo docker build -t koa-backend .

sudo docker container run --name koa-backend --rm -p 4444:8888 -v /home/alexander/labs/koa-backend/backend/:/usr/bin/koa-backend/backend/ koa-backend

sudo docker container stop --name koa-backend


План:
1) Сделать моно-репозиторий для frontend и backend (api)
2) Проксировать статику через nginx


    nginx-web-proxy-server:
      image: nginx
      volumes:
       - ./frontend/static:/usr/share/nginx/html
       - ./frontend/nginx/nginx.conf:/etc/nginx/nginx.conf:ro
      ports:
       - "8080:80"
      environment:
       - NGINX_HOST=localhost
       - NGINX_PORT=8080
      command: [nginx-debug, '-g', 'daemon off;']




worker_processes 4;

events { worker_connections 1024; }

http {
server {
listen 80;
server_name webapp.docker.localhost;
access_log /var/log/nginx/access.log;
error_log /var/log/nginx/error.log;
root /usr/share/nginx/html;

        location / {
            index index.html;
            try_files $uri /index.html;
        }

        location /api/ {
                   proxy_set_header Host $host;
                    proxy_set_header X-Real-IP $remote_addr;
                    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                    proxy_set_header X-Forwarded-Proto $scheme;
                    proxy_pass http://localhost:8080;
        }

        location /static/ {
            try_files $uri $uri/;
        }

        location /static/img/ {
            try_files $uri /static/img/404.jpg;
        }
    }
}
