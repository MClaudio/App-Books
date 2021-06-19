const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv');
const routes = require('./routes/routes');
const database = require('./config/db')

const app = express();

database.sync().then(() => {
    console.log("Database conected");
}).catch((err) => {
    console.log(err)
});

dotenv.config();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', routes)

app.set("port", process.env.PORT || 5000);
const host = process.env.HOST || '0.0.0.0';

app.listen(app.get("port"), () => {
  console.log("listening on "+ app.get("port"));
});
