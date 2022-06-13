




function CookieShop(min, max, avg) {
    this.hourlyMin = min;
    this.hourlyMax = max;
    this.avgCookies = avg;
    this.customersPerHour = function (min, max) {
        return Math.round(Math.random() * (max - min) + min)
    }
    let cph = this.customersPerHour;

    this.hourly = [
        this.customersPerHour,
        this.customersPerHour,
        this.customersPerHour,
        this.customersPerHour,
        this.customersPerHour,
        this.customersPerHour,
        this.customersPerHour,
        this.customersPerHour,
        this.customersPerHour,
        this.customersPerHour,
        this.customersPerHour,
        this.customersPerHour,
        this.customersPerHour,
        this.customersPerHour,
    ]
    let hourly = this.hourly;
    this.totalCustomers = function (hourly) {
        return hourly.reduce()
    }
}

const seatle = new CookieShop(23, 65, 6.3);
const tokyo = new CookieShop(3, 24, 1.2);
const dubai = new CookieShop(11, 38, 3.7);
const paris = new CookieShop(20, 38, 2.3);
const lima = new CookieShop(2, 16, 4.6);

console.log(seatle)
console.log(tokyo)
console.log(dubai)
console.log(paris)
console.log(lima)
