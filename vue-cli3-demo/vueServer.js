const Koa = require('koa')
const router = require('koa-router')()
const app = new Koa()
router.get('/api/list', async (ctx) => {
  console.log(1234567);
  ctx.body = {
    data: [{ name: 'tom' }],
  }
})

app.use(router.routes())

app.listen(9527, () => {
  console.log('server 9527......')
})
