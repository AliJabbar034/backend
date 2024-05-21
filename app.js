const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./routes/user.routes");

const app = express();

app.use(bodyParser.json());
app.use("/api/v1", userRouter);

app.listen(5000, () => {
  console.log("app listenting on", 5000);
});
