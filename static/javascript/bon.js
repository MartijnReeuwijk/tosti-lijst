if (document.getElementById("bonHolder")) {
  console.log("doe");
  function printPlace() {
    console.log("bon");
    var bonHolder = document.getElementById("bonHolder");
    bonHolder.innerHTML += `
    <input type="button" class="printing" id="printing" name="Print uw bon" value="Print uw bon">
      `;
  }
  printPlace();
}

function printPage() {
  window.print();
}

function value() {
  let price = 1.45;
  var amount = 0;

  for (let i = 0; i < checkboxArray.length; i++) {
    amount += Number(document.getElementsByClassName("number")[i].value);
  }
  let currentValue = amount * price;
  document.getElementById("currPrice").innerHTML = currentValue;
}

let checkbox = document.getElementsByClassName("number");
let checkboxArray = Array.from(checkbox);
for (let i = 0; i < checkboxArray.length; i++) {
  document
    .getElementsByClassName("number")
    [i].addEventListener("change", value);
}

document.getElementById("printing").addEventListener("click", printPage);
