const inputAge = document.getElementById("user-age");
console.log(inputAge)
const inputNumber = document.getElementById("distance");
console.log(inputNumber)
let priceforchilometer = 0.23;




const button =document.querySelector("button");
console.log(button);

button.addEventListener("click", function() {
    let distance = inputNumber.value;
    let price = priceforchilometer * distance;
    console.log(price)
    if ( inputAge.value < 18){
        price = price - (price * (19.4 / 100));
        console.log(price.toFixed(2));
    } else if ( inputAge.value >= 65) {
        price = price - (price * (37.7 / 100));
        console.log(price.toFixed(2));
    }
    document.getElementById().innerHTML = price.toFixed(2);
}
)

