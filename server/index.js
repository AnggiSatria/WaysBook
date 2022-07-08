require("dotenv").config()
//instantiate express module
const express = require("express");
const bp = require("body-parser")
const cors = require("cors")
//Get routes to the variabel here
const router = require('./src/routes')

//use express in app variable
const app = express();

//define the server port
const port = 5000;
const http = require("http")
const server = http.createServer(app);

app.use(express.json())
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(cors());


//Create endpoint grouping and router here
app.use('/api/v1/', router)
app.use("/uploads", express.static("uploads"));
//when this nodejs app executed, it will listen to defined port
app.listen(port, () => console.log(`Final Task Pasti Bisa ${port}!`));