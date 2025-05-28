const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

// app.use((req, res, next) => { //MiddleWare always run even if the requested path is wrong
//     // let {query} = req.query;
//     // console.log(query)
//     console.log("Hi, i am 1 middleware");
//     next();
//     //console.log("This is after next()"); //But we should not write code after next()
// });

// app.use((req, res, next) => {
//     console.log("Hi, i am 2 middleware");

//     next();
// });

// //logger
// app.use((req, res, next) => { //A middleware to log method, hostname, path and time of a request
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname, req.path, req.time); //learn more attributes from expressjs.com/request
//     next();
// });

//Authentication middleware
app.use("/api", (req, res, next) => {
    let {token} = req.query; //LINK = localhost:8080/api?token=giveaccess
    if(token === "giveaccess") { //if token matches "giveaccess" then access is granted otherwise denied
        next();
    }
    else {
        // throw new Error("ACCESS DENIED !!");
        throw new ExpressError(401, "ACCESS DENIED"); //Throwing custom errors using ExpressError class made by us
    }
})
app.get("/api", (req,res) => {
    res.send("data");
})

app.get("/", (req, res) => {
  res.send("Hi i am root");
});

app.get("/random", (req, res) => {
  res.send("THis is a random page");
});

app.get("/err", (req, res) => {
  abcd = abcd;
});

app.get("/admin", (req, res) => {
  throw new ExpressError(403, "Unauthorized!"); //sending our own error
})

app.use((err, req, res, next) => { //custom error handler
console.log("--------- ERROR --------");
// next();
//next(err); //to trigger the error handler of express
//res.send(err); //to throw actual error on client side

let {status = 500, message = "Some Error Occurred"} = err;
res.status(status).send(message);
});

app.listen(8080, () => {
  console.log("Server is listening to port 8080");
});

app.use((req, res) => {
    res.status(404).send("Page not found - 404"); //yeh middleware tab active hoga jab upar koi sa bhi path match ni hoga
});
