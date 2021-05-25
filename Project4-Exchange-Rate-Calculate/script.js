// Get DOM Elements
const currencyOne = document.getElementById("currency-one");
const amountcurrencyOne = document.getElementById("amount-one");
const currencyTwo = document.getElementById("currency-two");
const amountcurrencyTwo = document.getElementById("amount-two");
const rate = document.getElementById("rate");
const swap = document.getElementById("swap");

// Fetch Exchange Rates & Update the DOM
function calculate() {
  // Get the Currency Code for currency 1 & 2
  const currencyOneCode = currencyOne.value;
  const currencyTwoCode = currencyTwo.value;
  //console.log(currencyOneCode, currencyTwoCode);

  // Send Request to ExchangeRate-Api for conversion rates of currency 1
  fetch(
    "https://v6.exchangerate-api.com/v6/c86a76229a7313e75966c71e/pair/" +
      currencyOneCode +
      "/" +
      currencyTwoCode
  )
    .then(res => res.json())
    .then(data => {
      // Get the conversion rate from currency one to currency two
      const conversionRate = data.conversion_rate;
      // Update the DOM to display the conversion rate
      rate.innerText =
        "1 " + currencyOneCode + " = " + conversionRate + " " + currencyTwoCode;
      // Update the currency two amount
      //   amountcurrencyTwo.value = (
      //     amountcurrencyOne.value * conversionRate
      //   ).toFixed(2);

      // Formatting currency two amount
      amountcurrencyTwo.value = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currencyTwoCode,
      }).format((amountcurrencyOne.value * conversionRate).toFixed(2));
    });
}

// Event Listeners
// 1. Recalculate exchange rates when currency 1 changes
currencyOne.addEventListener("change", calculate);
// 2. Recalculate exchange amount when currency 1 amount changes
amountcurrencyOne.addEventListener("input", calculate);
// 3. Recalculate exchange rates when currency 2 changes
currencyTwo.addEventListener("change", calculate);
// 4. Recalculate exchange amount when currency 2 amount changes
amountcurrencyTwo.addEventListener("input", calculate);
// 5. Swap currency 1 to currency 2
swap.addEventListener("click", () => {
  // Save currency one value to temp
  const temp = currencyOne.value;
  // Copy currency two value to currency one value
  currencyOne.value = currencyTwo.value;
  // Copy currency one from temp variable to currency two
  currencyTwo.value = temp;
  // Recalculate exchange rate after swap
  calculate();
});

// Execute calculate function on page load
calculate();
