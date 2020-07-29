const Router = require('koa-router');

// Creating router
const router = new Router({
  prefix: '/person',
});

// Routes
router.get('/', (ctx, next) => {
  ctx.body = 'Get List';
  next();
});

module.exports = router;
