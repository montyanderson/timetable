const _ = require("koa-route");
const redis = require("../lib/redis");

module.exports = _.post("/upload", async ctx => {
	const id = await redis.incr("tt:counter");
	await redis.set(`tt:id:${id}`, JSON.stringify(ctx.request.body));

	ctx.body = id;
});
