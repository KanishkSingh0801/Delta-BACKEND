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

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});
const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const addCustomer = async() => {
    let customer1 = new Customer({
        name : "Rahul Kumar",
    })

    let order1 = await Order.findOne({item : "Chips"});
    let order2 = await Order.findOne({item : "Burger"});

    customer1.orders.push(order1);
    customer1.orders.push(order2);

    let res = await customer1.save();
    console.log(res);
}
// const addOrder = async () => {
//   let res = await Order.insertMany([
//     {
//       item: "Samosa",
//       price: 12,
//     },
//     {
//       item: "Chips",
//       price: 15,
//     },
//     {
//       item: "Burger",
//       price: 20,
//     }
//   ]);
//   console.log(res);
// };

// addOrder();
addCustomer();