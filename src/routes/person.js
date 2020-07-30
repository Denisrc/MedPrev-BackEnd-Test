const Router = require('koa-router');
const Person = require('../models/PersonSchema');

// Creating router
const router = new Router({
  prefix: '/person',
});

// Routes
router.get('/', async (ctx, next) => {
  const person = await Person.find({});

  ctx.body = person;
  next();
});

module.exports = router;
