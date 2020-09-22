const Koa = require('koa');
const router = require('koa-router')();
const cors = require('koa-cors');
const app = new Koa();
app.use(cors());
// app.use(async (ctx, next) => {
//     ctx.set('Access-Control-Max-Age', 600);//该字段可选，用来指定本次预检请求的有效期，单位为秒。
//     ctx.set('Access-Control-Allow-Origin', ctx.headers.origin);//可接受的域，是一个具体域名或者*
//     ctx.set('Access-Control-Allow-Credentials', true)//是否允许携带cookie，默认情况下，cors不会携带cookie，除非这个值是true
//     ctx.set('Access-Control-Request-Method', 'PUT,POST,GET,DELETE,OPTIONS') //允许访问的方式
//     ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept') //逗号分隔的字符串，表明服务器支持的所有头信息字段
//     await next();
// });



router.get('/api/corslist', async (ctx) => {
    ctx.body = {
      data: [{name: 'tom'}]
    }
})

app.use(router.routes());

app.listen(7777,() => {
  console.log('cors server 7777......')
});