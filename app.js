
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

// console.log(dubai)
// let name = `${seatle.name[0].toUpperCase()}${seatle.name.slice(1)}`
// console.log(name)
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
