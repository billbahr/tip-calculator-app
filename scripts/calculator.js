const billAmount = document.querySelector("#bill-amount");
const numPeople = document.querySelector("#num-people");
const customTip = document.querySelector("#tip-custom");
const tipButtons = document.querySelectorAll(".tip-selection>button");

billAmount.addEventListener('change', (e) => {
    console.log(e.target.value);
});

numPeople.addEventListener('change', (e) => {
    console.log(e.target.value);
});

customTip.addEventListener('change', (e) => {
    console.log(e.target.value);
});

tipButtons.forEach(button => console.log(button.innerText));
