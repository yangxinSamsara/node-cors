const Koa = require('koa')
const fs = require('fs')
const path = require('path')
const app = new Koa()

app.use(async (ctx, next) => {
  if (ctx.method === 'GET' && ctx.path === '/a') {
    ctx.body = fs.readFileSync(path.join(__dirname, './a.html')).toString()
  }
})

app.listen(8881, () => {
  console.log('8881......')
})
