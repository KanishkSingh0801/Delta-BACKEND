const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log("Connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

const user1 = new User({
  name: "Adam",
  email: "adam@gmail.com",
  age: 25,
});

const user2 = new User({
  name: "Eve",
  email: "eve@gmail.com",
  age: 25,
});

user1.save();
user2.save();

//User.find({}).then(res => {console.log(res)});

// User.updateOne({name : "Eve"}, {age : 49}).then((res) => {
//     console.log(res);
// });

User.findOneAndDelete({name : "Eve"}).then((res) => {
    console.log(res);
});
