const express = require("express"); // for building rest api
const cors = require("cors"); // provides Express middleware to enable CORS with various options
const db = require("./models");

const app = express();

app.use(cors());

db.sequelize.sync();

// parse requests of content-type - application/json
app.use(express.json());
app.use(express.static(process.cwd()+"/hanbeop/dist/hanbeop"));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// add Access Control Allow Origin headers
app.use((request, response, next) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

// simple route
app.get("/", (request, response) => {
    response.sendFile(process.cwd()+"/hanbeop/dist/hanbeop/index.html")
});

require("./routes/letter.routes")(app);
require("./routes/category.routes")(app);
require("./routes/grammar.routes")(app);

// set port, listen for resquests 
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});