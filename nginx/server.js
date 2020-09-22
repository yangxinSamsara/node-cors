const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();
router.get('/api/list', async (ctx) => {
    ctx.body = {
      data: [{name: 'tom'}]
    }
})

app.use(router.routes());

app.listen(9999,() => {
  console.log('cors server 9999......')
});