// EXERCISE 4
// Create a car object with some properties
// model, color, year, fuel, fuelConsumption and a method that calculate how much fuel you will need to pass some distance.

let car = new Object()
let distance 

car.model = "avensis"
car.color = "silver"
car.year = 2006
car.fuel = 75
car.fuelConsimption = 12

car.consumption = function (distance){
    return distance * (this.fuelConsimption/100)
                 
}

console.log(car.consumption(150))



