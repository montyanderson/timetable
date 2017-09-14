const Koa = require("koa");
const json = require("koa-json");
const bodyParser = require("koa-bodyparser");
const redis = require("./lib/redis");

const app = new Koa();

app.use(json());
app.use(bodyParser());

app.use(require("./routes/periods"));
app.use(require("./routes/subjects"));
app.use(require("./routes/timetable"));
app.use(require("./routes/upload"));

app.listen(8080);

(async () => {

	if(!(await redis.exists("tt:subjects"))) {
		const subjects = [
			"English Language",
			"English Literature",
			"History",
			"Maths",
			"Chemistry",
			"Physics",
			"Biology",
			"Economics"
		];

		await redis.sadd("tt:subjects", ...subjects);
	}

	if(!(await redis.exists("tt:periods"))) {
		const periods = [
			"8:30",
			"10:15",
			"12:30",
			"2:15",
			"3:50"
		];

		await redis.sadd("tt:periods", ...periods);
	}

})().catch(e => console.log(e));
