/* If, else if, else */
let temperature = 30;

if (temperature > 25) {
  console.log("It's hot outside. Please wear proper summer clothes.");
} else if (temperature >= 15 && temperature <= 25) {
  console.log("It's comfortable. You can wear something light.");
} else {
  console.log("It's cold outside. Please wear warm clothes.");
}

/* For loop */
const food = ["pizza", "pasta", "watermelon"];

/* For loop: Print items with index */
for (let i = 0; i < food.length; i++) {
  const item = food[i];
  console.log(`${i + 1}. ${item}`); // String interpolation
}

/* For of loop: Print items in list */
for (const value of food) {
  console.log(value);
}

/* While loop */
// A practical example of a while loop in JavaScript

let balance = 1000;
let target = 5000;
let monthlyDeposit = 500;

// John wants to save $5000 for a trip around Europe.
// He currently has $1000 saved and plans to deposit $500 into his savings account every month.
// He wants to track his progress and see how many months it will take him to reach his target savings of $5000.

console.log("Starting savings: $" + balance);

let months = 0;
while (balance < target) {
  months++;
  balance += monthlyDeposit;
  console.log(`$${balance} saved after ${months} months`);
}

console.log(`It will take John ${months} months to save $${target}.`);

// Switch statement
// Bob is building an e-commerce website and
// wants to display a message to the user based on the status of their order.
// The possible statuses values are: success, pending, shipped, and failed.

let orderStatus = "success";
switch (orderStatus) {
  case "success":
    console.log("Your order was successful. Thank you for shopping with us!");
    break;
  case "pending":
    console.log(
      "Your order is still pending. We will update you as soon as we have more information."
    );
    break;
  case "shipped":
    console.log("Your order has been shipped. You will receive it soon.");
    break;
  case "failed":
    console.log(
      "Your order has failed. Please try again later or contact us for assistance."
    );
    break;
  default:
    console.log("Invalid status. Please contact us for more information.");
}
