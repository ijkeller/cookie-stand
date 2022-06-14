
function hourlyCustomers(max, min, avg) {
    let hourlyArray = [];
    for (i = 0; i <= 12; i++) {
        hourlyArray.push(Math.round((Math.round(Math.random() * (max - min) + min) * avg)))
    }
    return hourlyArray;
}

function CookieShop(name, min, max, avg) {
    this.name = name;
    this.hourlyMin = min;
    this.hourlyMax = max;
    this.avgCookies = avg;
    this.hourlyArray = hourlyCustomers(max, min, avg)
}

const seatle = new CookieShop('seatle', 23, 65, 6.3);
const tokyo = new CookieShop('tokyo', 3, 24, 1.2);
const dubai = new CookieShop('dubai', 11, 38, 3.7);
const paris = new CookieShop('paris', 20, 38, 2.3);
const lima = new CookieShop('lima', 2, 16, 4.6);

const seatleArray = seatle.hourlyArray

// console.log(seatle)
// console.log(tokyo)
// console.log(dubai)
// console.log(paris)
// console.log(lima)
