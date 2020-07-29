const Koa = require('koa');

const koaBody = require('koa-body');

const app = new Koa();

app.use(koaBody());

// Importing Routes
const person = require('./routes/person');

app.use(person.routes());

app.listen(3000);
