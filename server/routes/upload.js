const route = require("koa-route");

module.exports = route.post("/upload", async ctx => {

	ctx.body = {};

	ctx.body.hello = "world";

});
