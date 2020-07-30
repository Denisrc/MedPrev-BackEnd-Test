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

router.post('/', async (ctx, next) => {
  const person = ctx.request.body;
  const newPerson = new Person(person);
  const savedPerson = await newPerson.save();

  ctx.body = savedPerson;
  next();
});

module.exports = router;
