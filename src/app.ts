import express from "express";
import path from "path";

// Controllers (route handlers)
import * as homeController from "./controllers/home";

// Create Express server
const app = express();

app.set("port", 3000);

/**
 * Primary app routes.
 */
app.get("/", homeController.index);
 
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

app.use(
  express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);


export default app;