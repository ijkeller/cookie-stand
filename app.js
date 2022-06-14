
function hourlyCustomers(max, min, avg, open = 6, close = 19) {
    let hourlyAvg = [];
    let hoursOpen = close - open;
    let hour = open;
    let rand = 0;
    let total = 0;
    for (i = 0; i <= hoursOpen; i++) {
        rand = Math.round(Math.round(Math.random() * (max - min) + min) * avg);
        let salesPerHour = `${hour}: ${rand}`
        hourlyAvg.push({salesPerHour});
        hour++;
        total += rand;
    }
    return [hourlyAvg, total];
}

function CookieShop(name, min, max, avg, open = 6, close = 19) {
    this.name = `${name[0].toUpperCase()}${name.slice(1)}`;
    this.open = open;
    this.close = close;
    this.hourlyMin = min;
    this.hourlyMax = max;
    this.avgCookies = avg;
    this.hourlyArray = hourlyCustomers(max, min, avg)[0]
    this.total = hourlyCustomers(max, min, avg)[1]
}

const seatle = new CookieShop('seatle', 23, 65, 6.3);
const tokyo = new CookieShop('tokyo', 3, 24, 1.2);
const dubai = new CookieShop('dubai', 11, 38, 3.7);
const paris = new CookieShop('paris', 20, 38, 2.3);
const lima = new CookieShop('lima', 2, 16, 4.6);

console.log(seatle)
console.log(tokyo)
console.log(dubai)
console.log(paris)
console.log(lima)
// let headingE1 = document.createElement('h2');
// headingE1.textContent = name
// console.log(headingE1)

// document.getElementById();
// resultEl.appendChild(headingEl);

let textElement = document.getElementById('banana'); // returns a element if found
console.log(textElement);

// property or method?
textElement.textContent = 'I am a p tag'; // puts this wherever text should go on an "element" object.

// create new elements
let headingEl = document.createElement('h2');

let sectionEl = document.getElementById('results');
headingEl.textContent = 'Results go here!!';

// adding a new element to our existing section.
sectionEl.appendChild(headingEl);

function render() {
  let newEl = document.createElement();

  let resultEl = document.getElementById();
  newEl.textContent = '';

  // adding a new element to our existing section.
  resultEl.appendChild(headingEl);
}
