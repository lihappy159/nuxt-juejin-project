const Router = require('koa-router')
const router = new Router()
const request = require('../request')
const config = require('../request/config')

router.get('/multiUser', async (ctx, next)=>{
  const options = {
    url: 'https://lccro-api-ms.juejin.im/v1/get_multi_user',
    method: "GET",
    params: {
      uid: config.uid,
      device_id: config.deviceId,
      token: config.token,
      src: 'web',
      ids: ctx.query.ids,
      cols: ''
    }
  };
  ctx.body = await request(options);
})

module.exports = router