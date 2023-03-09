import express from "express"; // import express web application framework
import mongoose from "mongoose";
import router from "./routes/UserRoutes";

const app = express(); // instanciando o express

app.use("/api/user", router);

mongoose
  .connect(
    "mongodb+srv://admin:CXdSsOXPaPrI2Vbp@cluster0.hp5eh9t.mongodb.net/Blog?retryWrites=true&w=majority"
  )
  .then(() => app.listen(4000))
  .then(() =>
    console.log("Connected to Database and listening at localhost 4000")
  )
  .catch((err) => console.log(err)); //promise w/ database request

app.use("/api", (req, res, next) => {
  // req - info do cli / res - resposta do server p/ o cliente
  res.send("Hello world!");
});

// senha user atlas: CXdSsOXPaPrI2Vbp
