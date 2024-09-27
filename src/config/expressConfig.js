import express from "express";
import routes from "../routes.js";

function expressCfg(app) {
  app.use(express.static("public"));

  app.use(routes);
}

export default expressCfg;
