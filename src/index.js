const epxress = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = epxress();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   res.status(503).send(`Site is under maintainence`)
// })

app.use(epxress.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

const jwt = require("jsonwebtoken");

const myFunction = async () => {
  const token = jwt.sign({ _id: "abc123" }, "mynewcourse",{expiresIn: '7 days'});
  console.log(token);

  const data = jwt.verify(token, "mynewcourse");
  console.log(data);
};

myFunction();
