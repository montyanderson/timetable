const _ = require("koa-route");
const redis = require("../lib/redis");

module.exports = _.get("/timetable", async ctx => {
	ctx.body = JSON.parse(await redis.get(`tt:id:${ctx.query.id}`));
});
