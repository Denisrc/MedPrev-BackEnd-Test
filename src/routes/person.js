const Router = require('koa-router');
const { ObjectId } = require('mongoose').Types;
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

router.delete('/:personId', async (ctx, next) => {
  const { personId } = ctx.params;

  const deletedPerson = await Person.deleteOne({ _id: new ObjectId(personId) });

  if (deletedPerson.deletedCount === 0) {
    ctx.body = { error: 'Not found Person with given id' };
    ctx.response.status = 404;
  } else {
    ctx.body = { message: 'Person deleted sucessfuly!' };
  }
  next();
});

module.exports = router;
