const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const {v4 : uuidv4} = require('uuid');
uuidv4();

app.use(express.urlencoded({extended : true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));


let posts = [
    {
        id : uuidv4(),
        username : "apnacollege",
        content : "I love conding"
    },
    {   
        id : uuidv4(),
        username : "kanishk",
        content : "I hate conding"
    },
    {   
        id : uuidv4(),
        username : "sydney",
        content : "kacchi ghani"
    }
]
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({id, username, content});
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id);
    
    if (!post) {
        return res.status(404).send("<h1>Post not found</h1>");
    }

    res.render("show.ejs", {post});
});

app.patch("/posts/:id", (req,res) => {
    let {id} = req.params;
    console.log(id);
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    if (!post) {
        return res.status(404).send("<h1>Post not found</h1>");
    }
    post.content = newContent;
    res.send("Patch request sent");
});

app.get("/posts/:id/edit", (req,res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post});
});

app.set(express.static(path.join(__dirname, "public")));
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});