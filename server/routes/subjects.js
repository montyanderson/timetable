const _ = require("koa-route");
const redis = require("../lib/redis");

module.exports = _.get("/subjects", async ctx => {
	const subjects = await redis.smembers("tt:subjects");

	subjects.sort();

	ctx.body = subjects;
});
