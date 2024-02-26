// Welcome Message
var user = "Iqbal"
var salutation = "Welcome, "
var greeting = salutation + user + "! Here is the latest product review.";
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

// Product Price
var price = 350,
    studentDiscount = .90,
    studentPrice = (price * studentDiscount),
    priceEl = document.getElementById('price'),
    studPriceEl = document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
studPriceEl.textContent = studentPrice.toFixed(2); 