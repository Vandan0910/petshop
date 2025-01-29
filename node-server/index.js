const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/Employees");
const http = require('http');



const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(cors());



mongoose.connect("mongodb://127.0.0.1:27017/employee");
console.log("database running");

app.post("/", (req, res) => {
  const { username, password } = req.body;
  EmployeeModel.findOne({ password: password })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json("Success");
        } else {
          res.json("The password is incorrect");
        }
      } else {
        res.json("no record existed");
      }
    });
});


app.post('/register', (req, res) => {
  EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err));
});


server.listen(3001, () => {
  console.log("Server is running");
});
