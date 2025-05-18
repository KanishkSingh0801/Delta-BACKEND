const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("Connection is successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "neha",
    to: "priya",
    message: "hello priya",
    created_At: new Date(),
  },
  {
    from: "rohit",
    to: "mohit",
    message: "teach me coding",
    created_At: new Date(),
  },
  {
    from: "amit",
    to: "sumit",
    message: "all the best",
    created_At: new Date(),
  },
];

Chat.insertMany(allChats)
