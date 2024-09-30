import express from "express";
import hbsConfig from "./config/hbsConfig.js";
import expressCfg from "./config/expressConfig.js";
import { mongoDbConnect } from "./config/mongooseCfg.js";


const app = express();
const port = 5000;

hbsConfig(app);
expressCfg(app);
mongoDbConnect();

app.listen(port, () =>
  console.log(`Server is listening on local host ${port} ... `)
);