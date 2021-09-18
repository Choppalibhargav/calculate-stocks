var initialPrice = document.querySelector('.initial-price');
var stocksQuantity = document.querySelector('.stocks-quantity');
var currentPrice = document.querySelector('.current-price');
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(stocksQuantity.value);
  var curr = Number(currentPrice.value);

  calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;

    showOutput(
      `Sorry,but the loss is ${loss} and the percent is ${lossPercentage}%😟😟`
    );
  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;

    showOutput(
      `Yay!, the profit is ${profit} and the percent is ${profitPercentage}% 🥳🥳`
    );
  } else {
    showOutput(`😐😐 neither profit nor loss the price is same as usual`);
  }
   if (initialPrice.value=""||stocksQuantity.value==""||currentPrice.value==""||isNaN(initialPrice.value)||isNaN(stocksQuantity.value)||isNaN(currentPrice.value))
  showOutput(`please enter some valid input to know more😑😑`);

  else if(initialPrice.value<0||stocksQuantity.value<0||currentPrice.value<0)
  showOutput(`please enter values greater than zero😐😐`);

}



function showOutput(message) {
  outputBox.innerHTML = message;
}