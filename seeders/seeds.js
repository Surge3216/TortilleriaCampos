let mongoose = require("mongoose");
let db = require("../models");
 

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/tortilleria_campos", {
    useNewUrlParser: true
});
var customerSeed = [
    {
        companyName: "Tacos and More",
        contactName: "billy",
        phoneNumber: "123456789",
        emailAddress: "blank@me.com",
        streetAddress: "456 telegraph st",
        streetAddressL2: "43",
        city: "Salt Lake City",
        state: "Utah",
        zipCode: "84770",
        relationshipStatus: "Strong",
        customerNotes: "I love Tacos",

    },
    {
        companyName: "burritos and beer",
        contactName: "jose",
        phoneNumber: "3325561928",
        emailAddress: "tacos4ever@gmail.com",
        streetAddress: "35 main st",
        streetAddressL2: "22",
        city: "St. George",
        state: "Utah",
        zipCode: "84790",
        relationshipStatus: "weak",
        customerNotes: "Thanks",

    }
]
// var productSeed = [
//     {
//         item: "10' flour",
//         price: 6.99,
//         item: "6' flour",
//         price: 3.99,
//         item: "8' flour",
//         price: 4.99,
//         item: "Mesa",
//         price: 3.99,
//         item: "3' Taco",
//         price: 3.99
//     },
//     {
//         item: "7' flour",
//         price: 12.99,
//         item: "9' flour",
//         price: 11.99,
//         item: "6' flour",
//         price: 3.99,
//         item: "Verda",
//         price: 5.99,
//         item: "5' Taco",
//         price: 5.99,
//     },
// ],

var employeeSeed = [
    {
        employeeType: "driver",
        employeeName: "Bob",
        password: "password123",
        phoneNumber: "123456789",
        emailAddress: "blank@me.com",
        employeeStatus: "Driving",
        employeeNotes: "Tacos are awesome"
    },
    {
        employeeType: "ownder",
        employeeName: "frank",
        password: "passtheword22",
        phoneNumber: "4358988292",
        emailAddress: "meandtacos@gmail.com",
        employeeStatus: "looking",
        employeeNotes: "yessir"
    },
]

var ordersSeed = [
    {
        userID: "445533",
        orderStatus: "next",
        dateCreated: "06/05/2021",
        deliveryDate: "06/05/2021",
        dateClosed: "06/05/2021",
        orderNotes: "Bring me my tacos",
        cornQuantity: "tons",
        flourQuantity: "tons",
        dueDate: "06/05/2021",
        rate: "60000"
    },
    {
        userID: "7878787",
        orderStatus: "order up",
        dateCreated: "06/06/2021",
        deliveryDate: "06/06/2021",
        dateClosed: "06/06/2021",
        orderNotes: "I love tacos",
        cornQuantity: "a little",
        flourQuantity: "a little",
        dueDate: "06/06/2021",
        rate: "30000"
    }
]

var newClientSeed = [
    {
        clientType: "driver",
        clientName: "bob",
        clientNumber: "123456789",
        clientEmailAddress: "blank@me.com",
        clientStreetAddress: "234 w telegraph",
        clientCity: "Salt Lake City",
        clientState: "Utah",
        clientZip: "87777",
        clientStatis: "on point",
        clientNotes: "I love Tacos"
    },
    {
        clientType: "Owner",
        clientName: "lilly",
        clientNumber: "4432218843",
        clientEmailAddress: "hitmeupfortacos@gmail.com",
        clientStreetAddress: "55 W s st ",
        clientCity: "orem",
        clientState: "Utah",
        clientZip: "81521",
        clientStatis: "LOVE",
        clientNotes: "Yall are great "
    },

]

db.Orders
  .remove({})
  .then(() => db.Orders.collection.insertMany(ordersSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Customer
  .remove({})
  .then(() => db.Customer.collection.insertMany(customerSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Employee
  .remove({})
  .then(() => db.Employee.collection.insertMany(employeeSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.NewClient
  .remove({})
  .then(() => db.NewClient.collection.insertMany(newClientSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

