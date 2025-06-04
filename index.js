const express = require("express");

const { connectDB } = require("./utils/connectDB");
const { middlewareConfig } = require("./middleware/middlewareConfig");
const { configEnv } = require("./configs/configEnv");
const { configRoutes } = require("./routes/configRoutes");
const { initRedis } = require("./utils/redisClient");

const app = express();
 const port=process.env.PORT ||8000 

// config env (dotenv)
configEnv();    

// cors, express.json
middlewareConfig(app);




// connect to db
connectDB();
initRedis();

// routes
configRoutes(app);



app.listen(port, ()=>{
    console.log("Backend server is running");
});