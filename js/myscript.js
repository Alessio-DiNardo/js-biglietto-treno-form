const userAge = parseInt;
const distance = parseInt;

let price = distance * 0.23;

if ( userAge < 18){
    price = price - (price * (19.4 / 100));
    console.log(price.toFixed(2));
} else if ( userAge >= 65) {
    price = price - (price * (37.7 / 100));
    console.log(price.toFixed(2));
}

const button =document.querySelector("button");
console.log(button);

button.addEventListener("click", function() {
    price = price - (price * (37.7 / 100));
}
)

console.log("price");
console.log("userAge");