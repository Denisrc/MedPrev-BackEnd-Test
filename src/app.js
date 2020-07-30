const Koa = require('koa');
const mongoose = require('mongoose');
const koaBody = require('koa-body');

const app = new Koa();

const config = require('./config').development;

mongoose.connect(config.DBHost, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(koaBody());

// Importing Routes
const person = require('./routes/person');

app.use(person.routes());

app.listen(3000);
