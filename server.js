const bodyParser = require("body-parser");
const express = require("express");
// const methodOverride = require("method-override");


const app = express();

app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controllers");

app.use("/", routes);

const port = process.env.PORT || 3000;
app.listen(port, function()
{
  console.log('The app is listening on port ' + port);
});