const express = require("express");
const path = require("path");
const app = express();


const port = 8080;

app.use(express.static(path.join(__dirname, "/public/js")));
app.use(express.static(path.join(__dirname, "/public/css")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home.ejs")
});

app.get("/hello", (req,res) => {
    res.send("Hello");
});

app.get("/rolldice", (req,res) => {
    let dice = Math.floor(Math.random()*6) + 1;
    res.render("rolldice.ejs", {num : dice})
})

//Instagram EJS activity
app.get("/ig/:username", (req,res) => {
    // const followers = ["Adam", "Bob", "KJ"];
    // let {username} = req.params;
    // console.log(username);
    // res.render("instagram.ejs", {username, followers});

    let {username} = req.params;
    const instaData = require("./data.json"); //For instagram EJS
    const data = instaData[username];
    if (data) {
        console.log(data);
        res.render("instagram.ejs", {data});
    }
    else {
        res.render("error.ejs");
    }
    
})
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// const bcrypt = require("bcryptjs"); // Import bcrypt library

// const newPassword = "kanishka1234"; // Replace with your new password
// const saltRounds = 10; // Number of hashing rounds

// bcrypt.hash(newPassword, saltRounds, (err, hash) => {
//     if (err) throw err;
//     console.log("New Hashed Password:", hash);
// });
