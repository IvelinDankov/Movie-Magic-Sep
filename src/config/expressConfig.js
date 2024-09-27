import express from "express";
import homeController from "../controllers/homeController.js";

function expressCfg(app) {
  app.use(express.static("public"));

  app.use(homeController)
}

export default expressCfg;
