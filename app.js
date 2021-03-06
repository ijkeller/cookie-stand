'use strict';

let dailyTotalArray = [];
let storeLocationArray = [];

let submitForm = document.getElementById('newStoreForm');
let tableEl = document.getElementById('sales-data');

function hourlyCustomers(max, min, avg, open = 6, close = 19) {
    let hourlyAvg = [];
    let hoursOpen = close - open;
    let hour = open;
    let rand = 0;
    let total = 0;
    for (let i = 0; i <= hoursOpen; i++) {
        rand = Math.round(Math.round(Math.random() * (max - min) + min) * avg);
        hourlyAvg.push(rand);
        hour++;
        if (dailyTotalArray[i] == undefined) {
            dailyTotalArray.push(rand);
        } else {
            dailyTotalArray[i] += rand;
        }
        total += rand;
    }
    return [hourlyAvg, total];
}

let hoursOpenArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

function CookieShop(location, min, max, avg, open = 6, close = 19) {
    this.location = `${location[0].toUpperCase()}${location.slice(1)}`;
    this.open = open;
    this.close = close;
    this.hoursOpen = close - open;
    this.hourlyMin = min;
    this.hourlyMax = max;
    this.avgCookies = avg;
    this.salesMin = Math.floor(min * avg);
    this.salesMax = Math.floor(max * avg);
    this.hourlyArray = hourlyCustomers(max, min, avg)[0]
    this.total = hourlyCustomers(max, min, avg)[1]
    storeLocationArray.push(this)
}

const seattle = new CookieShop('seattle', 23, 65, 6.3);
const tokyo = new CookieShop('tokyo', 3, 24, 1.2);
const dubai = new CookieShop('dubai', 11, 38, 3.7);
const paris = new CookieShop('paris', 20, 38, 2.3);
const lima = new CookieShop('lima', 2, 16, 4.6);

function renderHeader() {
    let tableRowEl = document.createElement('tr');
    let startEl = document.createElement('td');
    let endEl = document.createElement('td');
    startEl.classList.add('empty');
    endEl.classList.add('total')

    tableEl.appendChild(tableRowEl);
    tableRowEl.appendChild(startEl);
    startEl.textContent = ''

    for (let i = 0; i < hoursOpenArray.length; i++) {
        let newDataCell = document.createElement('td');
        newDataCell.classList.add('heading')
        tableRowEl.appendChild(newDataCell);
        newDataCell.textContent = hoursOpenArray[i];
    }

    tableEl.appendChild(tableRowEl);
    tableRowEl.appendChild(endEl);
    endEl.textContent = 'Total:'
}

function render(storeLocation) {
    let tableRowEl = document.createElement('tr');
    let storeEl = document.createElement('td');
    storeEl.classList.add('store-location')
    let totalEl = document.createElement('td');
    totalEl.classList.add('totals')

    tableEl.appendChild(tableRowEl);
    tableRowEl.appendChild(storeEl);
    storeEl.textContent = storeLocation.location

    for (let i = 0; i < storeLocation.hourlyArray.length; i++) {
        let newDataCell = document.createElement('td');
        tableRowEl.appendChild(newDataCell);
        newDataCell.textContent = storeLocation.hourlyArray[i];
    }

    tableRowEl.appendChild(totalEl);
    totalEl.textContent = storeLocation.total
}

function renderStoreLocationArray() {
    for (let i = 0; i < storeLocationArray.length; i++) {
        render(storeLocationArray[i]);
    }
}

function renderFooter() {
    let tableRowEl = document.createElement('tr');
    let startEl = document.createElement('td');
    let endEl = document.createElement('td');
    startEl.classList.add('total', 'total-title');
    endEl.classList.add('total', 'total-total')

    tableEl.appendChild(tableRowEl);
    tableRowEl.appendChild(startEl);
    startEl.textContent = 'Total:'

    let totalTotal = 0;

    for (let i = 0; i < hoursOpenArray.length; i++) {
        let newDataCell = document.createElement('td');
        newDataCell.classList.add('total')
        tableRowEl.appendChild(newDataCell);
        newDataCell.textContent = dailyTotalArray[i];
        totalTotal += dailyTotalArray[i]
    }

    tableEl.appendChild(tableRowEl);
    tableRowEl.appendChild(endEl);
    endEl.textContent = totalTotal
}

renderHeader()
renderStoreLocationArray()
renderFooter()



function logStore(e) {

    e.preventDefault();
    let userInput = e.target;
    let store = userInput.store.value
    let close = parseInt(userInput.close.value);
    close += 12;
    console.log(typeof (close))
    let open = parseInt(userInput.open.value);
    let avg = parseInt(userInput.avg.value);
    let max = parseInt(userInput.max.value);
    let min = parseInt(userInput.min.value);

    new CookieShop(store, min, max, avg, open, close);
    console.log(storeLocationArray)

    let tableRows = document.querySelectorAll('tr')


    for (let i = 0; i < (storeLocationArray.length + 1); i++) {
        if (tableRows.length > 0) {
            tableEl.deleteRow(0);
        }
    }

    renderHeader()
    renderStoreLocationArray()
    renderFooter()
}

submitForm.addEventListener("submit", logStore);
