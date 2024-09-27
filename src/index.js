import express from "express";
import hbsConfig from "./config/hbsConfig.js";
import expressCfg from "./config/expressConfig.js";

const app = express();
const port = 5000;

hbsConfig(app);
expressCfg(app);

app.listen(port, () =>
  console.log(`Server is listening on local host ${port} ... `)
);