import Koa from 'koa';
import logger from 'koa-morgan';
import env from 'dotenv';
import { createClient } from 'redis';

env.config();
const server = new Koa();

const redisClient = createClient({
    url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
    password: process.env.REDIS_PASSWORD,
});
await redisClient.connect();
redisClient.set('test', 'dsd');

server
    .use(logger('tiny'))
    .use(async (ctx) => {
        ctx.body =  await redisClient.get('test');
    })
    .listen(process.env.PORT, () => {
        console.log(`server start listening on port ${process.env.PORT}`);
        redisClient.ping().then(status => console.log(status));
});
