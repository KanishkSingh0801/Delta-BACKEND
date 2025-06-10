const mongoose = require("mongoose");
const { Schema } = mongoose;
main()
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
  username: String,
  email : String,
});


const postSchema = new Schema({
    content : String,
    likes : Number,
    user : {
        type : Schema.Types.ObjectId,
        ref : "User"
    }
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async () => {
    let user1 = new User ({
        usernae : "Rahul Kumar",
        email : "rahul@gmail.com",
    });

    let post1 = new Post({
        content : "Hello world",
        likes: 7,
    });

    post1.user = user1;

    let userResult = await user1.save();
    console.log(`This is userResult ${userResult}`);
    let postResult = await post1.save();
    console.log(`This is postResult ${postResult}`);
}

addData();