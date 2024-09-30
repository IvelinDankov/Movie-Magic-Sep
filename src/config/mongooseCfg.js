import { connect } from "mongoose";

export function mongoDbConnect() {
   try {
    connect("mongodb://localhost:27017/magic-movies");
    console.log("successfully connected to db");
  } catch (error) {
    console.log("Cannot connect to DB");
    console.log(error.message);
  }
}
