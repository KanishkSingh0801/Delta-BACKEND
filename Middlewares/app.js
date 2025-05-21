const express = require("express");
const app = express();

app.use((req, res, next) => { //MiddleWare always run even if the requested path is wrong
    // let {query} = req.query;
    // console.log(query)
    console.log("Hi, i am 1 middleware");
    next();
    //console.log("This is after next()"); //But we should not write code after next()
});

app.use((req, res, next) => {
    console.log("Hi, i am 2 middleware");

    next();
});

app.get("/", (req, res) => {
    res.send("Hi i am root");
});

app.get("/random", (req, res) => {
    res.send("THis is a random page")
})

app.listen(8080, () => {
    console.log("Servr is listening to port 8080")
})