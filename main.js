let minusBtnOne = document.querySelector(".minus-one");
let minusBtnTwo = document.querySelector(".minus-two");
let plusBtnOne = document.querySelector(".plus-one");
let plusBtnTwo = document.querySelector(".plus-two");
let counterOne = document.querySelector(".counter-1");
let counterTwo = document.querySelector(".counter-2");
let countOne = 1;
let countTwo = 1;

// to select country
let list = document.querySelector(".list-group");
let listItems = document.querySelectorAll(".list-group-item");
let toggleBtn = document.querySelector(".toggle");
let selectText = document.getElementById("select-country");

toggleBtn.addEventListener("click", () => {
  list.classList.toggle("d-none");
});

listItems.forEach((listItem) => {
  listItem.addEventListener("click", (e) => {
    selectText.value = e.target.innerText;
  });
});

// card one item selection quantity
minusBtnOne.addEventListener("click", () => {
  if (countOne < 2) {
    counterOne.innertext = 1;
  } else {
    countOne--;
    counterOne.innerText = countOne;
  }
});
plusBtnOne.addEventListener("click", () => {
  countOne++;
  counterOne.innerText = countOne;
  let sum = 54.99 * countOne;
  let total = sum.toFixed(2);
  console.log(total);
  document.getElementById("total-price").innerText = `$${total}`;
});

//   card two item selection quantity
minusBtnTwo.addEventListener("click", () => {
  if (countTwo < 2) {
    counterTwo.innertext = 1;
  } else {
    countTwo--;
    counterTwo.innerText = countTwo;
    let sum = 74.99 * countTwo + 19;
    let total = sum.toFixed(2);
    console.log(total);
    document.getElementById("total-price").innerText = `$${total}`;
  }
});
plusBtnTwo.addEventListener("click", () => {
  countTwo++;
  counterTwo.innerText = countTwo;
  let sum = 74.99 * countTwo + 19;
  let total = sum.toFixed(2);
  console.log(total);
  document.getElementById("total-price").innerText = `$${total}`;
});


let submitBtn = document.querySelector(".submit");
let alertMssg = document.querySelector(".alert");
let form = document.querySelector(".user-info");

// get input values
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const addressInput = document.querySelector("#address");
const cityInput = document.querySelector("#city");
const phoneInput = document.querySelector("#phone");
const countryInput = document.querySelector("#select-country");
const postalCodeInput = document.querySelector("#postal-code");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent form submission

  // Check if all input fields are filled
  if (
    nameInput.value.trim() !== "" &&
    emailInput.value.trim() !== "" &&
    addressInput.value.trim() !== "" &&
    cityInput.value.trim() !== "" &&
    phoneInput.value.trim() !== "" &&
    countryInput.value.trim() !== "" &&
    postalCodeInput.value.trim() !== ""
  ) {
    // All input fields are filled, submit form
    alertMssg.textContent = "form is submitted successfully";
    alertMssg.classList.remove("hide");
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
                alertMssg.classList.add('hide')
            }, 3000)

  } else {
    // Some input fields are empty, show error message
    alertMssg.textContent = "Please fill in all required fields.";
    alertMssg.classList.remove("hide");
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      alertMssg.classList.add("hide");
    }, 3000);

  }
  
});


nameInput.addEventListener('keyup', function(event) {
    if (event.code === 'Enter' && form.checkValidity()) {
      // Enter key is pressed and form is valid, submit form
      form.submit();
    }
  });
  
  emailInput.addEventListener('keyup', function(event) {
    if (event.code === 'Enter' && form.checkValidity()) {
      // Enter key is pressed and form is valid, submit form
      form.submit();
    }
  });
