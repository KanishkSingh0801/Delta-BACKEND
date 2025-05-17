const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log("Connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = mongoose.Schema( {
    title : {   //This format is used when we have more than one constraints for a data field.
        type : String, //constraint 1
        required : true, //constraint 2 - means NOT NULL
        maxLength : 20,
    },
    author : {
        type : String,
        required : true,
    },
    price : {
        type : Number,
        required : true,
    },
    discount : {
        type : Number,
        default : 0,
    },
});

const book = new mongoose.model("book", bookSchema);

let book1 = new book({
    title : "Game of thrones",
    author : "Bran the Broken",
    price : 20.99,
});

book1.save().then((res) => {
    console.log(res);
}).catch(err => {
    console.log(err);
})
