const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;

const taskRouter = require("./routes/task.router.js");

app.use(express.static("server/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/tasks", taskRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
