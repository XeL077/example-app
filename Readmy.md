Koa - react app.
docker network create app-net

docker-compose up -d


apt-get update
apt-get install nano


sudo docker-compose up -d nginx-web-proxy-server

sudo docker build -t koa-backend .

sudo docker container run --name koa-backend --rm -p 4444:8888 -v /home/alexander/labs/koa-backend/backend/:/usr/bin/koa-backend/backend/ koa-backend

sudo docker container stop --name koa-backend


sudo docker exec -it  613dba64b21b sh


sudo docker exec -it 3ae61cf2fa75 sh


План:
1) Сделать моно-репозиторий для frontend и backend (api)
2) Проксировать статику через nginx



         - ./frontend/nginx/nginx.conf:/etc/nginx/nginx.conf:ro
         - ./frontend/nginx/nginx.conf:/etc/nginx/conf.d/default.conf
         - ./frontend/nginx/nginx.vh.default.conf:/etc/nginx/nginx.vh.default.conf:ro


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
