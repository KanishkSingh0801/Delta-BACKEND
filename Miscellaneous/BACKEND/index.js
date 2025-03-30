const express = require("express");
const app = express();
const port = 8080;

// app.use(express.urlencoded({extended : true}));
// app.get("/register", (req, res) => {
//   let { user, pwd} = req.query;
//   res.send(`Standard get response - Welcome ${user}`);
// });

// app.post("/register", (req, res) => {
//   let { user, pwd} = req.body;
//   console.log(req.body);
//   res.send(`Standard post response - Welcome ${user}`);
// });

// app.listen(port, () => {
//   console.log("Listening on port " + port);
// });

//FACTORY FUNCTION
// function personMaker(name, age) {
//   const person = {
//     name: name,
//     age: age,
//     talk() {
//       console.log(`Hi , my name is ${this.name} and I am ${this.age} years old.`);
//     }
//   };

//   return pers on;
// }

//Constructors - doenst return anything & starts with Capital letter
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let p1 = new Person("name", 25); // this is an instance 
