const inputAge = document.getElementById("user-age");
console.log(inputAge)
const inputNumber = document.getElementById("distance");
console.log(inputNumber)
let price = 0.23;




const button =document.querySelector("button");
console.log(button);

button.addEventListener("click", function() {
    let price = 0.23 * distance;
    console.log(distance)
    if ( inputAge < 18){
        price = price - (price * (19.4 / 100));
        console.log(price.toFixed(2));
    } else if ( inputAge >= 65) {
        price = price - (price * (37.7 / 100));
        console.log(price.toFixed(2));
    }
}
)

