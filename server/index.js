const Koa = require("koa");
const json = require("koa-json");
const bodyParser = require("koa-bodyparser");

const app = new Koa();

app.use(json());
app.use(bodyParser());

app.use(require("./routes/upload"));

app.listen(8080);
