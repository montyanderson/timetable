const _ = require("koa-route");
const redis = require("../lib/redis");

module.exports = _.get("/periods", async ctx => {
	const periods = await redis.smembers("tt:periods");

	periods.sort();

	ctx.body = periods;
});
