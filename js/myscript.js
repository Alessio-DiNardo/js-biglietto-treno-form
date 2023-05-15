const userAge = parseInt;
const distance = parseInt;

let price = distance * 0.23;

if ( age < 18){
    price = price - (price * (19.4 / 100));
} else if ( age >= 65) {
    price = price - (price * (37.7 / 100));
}

document.getElementById("output").innerHTML = price + "€";