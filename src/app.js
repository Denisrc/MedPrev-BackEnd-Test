const Koa = require('koa');

const koaBody = require('koa-body');

const app = new Koa();

app.use(koaBody());

app.use(async (ctx) => {
  ctx.body = 'Hello World';
});

app.listen(3000);
