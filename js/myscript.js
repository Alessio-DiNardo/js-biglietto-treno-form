const userAge = parseInt(prompt("Insert your age"));

const currentYear = 2023;

let yearOfBirth = currentYear - userAge;

console.log(yearOfBirth);

const distance = parseInt(prompt("insert your kilometers"))

const priceForKm = 0.23;

let price = priceForKm * distance;

console.log(price);




if (userAge < 18) {
        let discount =(19,4 / 100) * price;
        let totale = price - discount;
        document.getElementById("ticket").innerHTML = totale.toFixed(2)
        console.log(discount.toFixed(2));

} else if (userAge > 65) {
        let discount =(37,7 / 100) * price;
        let totale = price - discount;
        document.getElementById("ticket").innerHTML = totale.toFixed(2)
        console.log(discount.toFixed(2))
} else {}

