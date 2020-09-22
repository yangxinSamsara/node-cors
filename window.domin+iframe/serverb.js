const Koa = require('koa')
const fs = require('fs')
const path = require('path')
const app = new Koa()

app.use(async (ctx, next) => {
  if (ctx.method === 'GET' && ctx.path === '/b') {
    ctx.body = fs.readFileSync(path.join(__dirname, './b.html')).toString()
  }
})

app.listen(8882, () => {
  console.log('8882......')
})