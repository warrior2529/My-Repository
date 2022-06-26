const dropDownListSelect = document.querySelector(".dropdown-list-convertedfrom--select");
const displayConvertion = document.querySelector(".display-convertion");



const generateHTML = function (value) {
    let markup;
    for (let currency of value.entries()){
        markup+=`<option value="${currency[0]}">${currency[0]}</option><label>`
    }
    dropDownListSelect.insertAdjacentHTML("beforeend",markup);
}

const currencies = {
    "base": "USD",
    "date": "2021-05-10",
    "timestamp": 1620652500,
    "exchange_rates": {
        "EUR": 0.82176,
        "JPY": 108.727093,
        "BGN": 1.607199,
        "CZK": 21.029666,
        "DKK": 6.110691,
        "GBP": 0.708316,
        "HUF": 293.582053,
        "PLN": 3.749774,
        "RON": 4.047005,
        "SEK": 8.319089,
        "CHF": 0.898923,
        "ISK": 124.003616,
        "NOK": 8.21826,
        "HRK": 6.197305,
        "RUB": 73.971074,
        "TRY": 8.258279,
        "AUD": 1.268223,
        "BRL": 5.246775,
        "CAD": 1.211521,
        "CNY": 6.413428,
        "HKD": 7.765963,
        "IDR": 14125.449914,
        "ILS": 3.248993,
        "INR": 73.349084,
        "KRW": 1111.956611,
        "MXN": 19.924727,
        "MYR": 4.107486,
        "NZD": 1.370121,
        "PHP": 47.865067,
        "SGD": 1.323856,
        "THB": 31.069932,
        "ZAR": 14.039198
    }
}

const currencyMap = new Map(Object.entries(currencies.exchange_rates));
generateHTML(currencyMap);
// console.log();

dropDownListSelect.addEventListener("input", function (e) {
    e.preventDefault();
    displayConvertion.textContent=currencies.exchange_rates[dropDownListSelect.value];
});