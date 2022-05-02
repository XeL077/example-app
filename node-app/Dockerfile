FROM node:14-alpine

ENV PORT ${PORT}

EXPOSE ${PORT}

RUN mkdir -p /usr/bin/node-app
WORKDIR /usr/bin/node-app

COPY ./package.json /usr/bin/node-app/
COPY ./ /usr/bin/node-app/

VOLUME /usr/bin/node-app/

RUN yarn

CMD ["yarn", "dev"]
