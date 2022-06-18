import Koa from 'koa';
import Router from 'koa-router';
import logger from 'koa-morgan';
import env from 'dotenv';
import { createClient } from 'redis';

env.config();

const server = new Koa();
const router = new Router();

const redisClient = createClient({
    url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
    password: process.env.REDIS_PASSWORD,
});
await redisClient.connect();
redisClient.set('test', 'dsddfd');

router.get('/api/test', async (ctx) => {
    ctx.body = {data: 'ok'};
    console.log('ok');
})


server
    .use(logger('tiny'))
    .use(router.routes())
    .listen(process.env.PORT, () => {
        console.log(`server start listening on port ${process.env.PORT}`);
        redisClient.ping().then(status => console.log(status));
});
