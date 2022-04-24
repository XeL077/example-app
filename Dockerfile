FROM node:14-alpine

ENV PORT 8888

EXPOSE 8888

RUN mkdir -p /usr/bin/koa-backend
WORKDIR /usr/bin/koa-backend

COPY package.json /usr/bin/koa-backend/
COPY backend /usr/bin/koa-backend/

VOLUME /usr/bin/koa-backend/backend/

RUN yarn

CMD ["yarn", "dev"]
