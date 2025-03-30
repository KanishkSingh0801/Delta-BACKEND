const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
  console.log("App is listening on " + port);
});

// app.get("/", (req, res) => {
//     res.send("Hello i am root");
// });

// app.get("/apple", (req, res) => {
//     res.send("Hello i am apple");
// });

// app.get("/banana", (req, res) => {
//     res.send("You contacted banana page");
// });

// app.get("*",(req, res) => {
//     res.send("This path does not exist");
// } )

// // app.use((req, res) => {
// //     console.log("Reqeust Received");
// //     res.send("Hello World");
// // });

app.get("/", (req, res) => {
  res.send("Hello i am root");
}); 

// app.get("/:username", (req, res) => {
//     console.log(req.params);
//     let { username } = req.params;
//     res.send(`Welcome to the page of ${username}`);
//   }); 


app.get("/search", (req,res) => {
    console.log(req.query);
    let { q } = req.query;
    if(!q) {
        res.send(`<h1> Nothing Searched </h1>`);
    }
    res.send(`You are searching for ${q}`);
});
