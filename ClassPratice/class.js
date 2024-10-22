class House {
    constructor(address,floors) {
        this.address = address
        this.floors = floors
        this.garage = false
    }
}

let myHouse1 = new House()
let add = myHouse1.address
let fl = myHouse1.floors
let gar = myHouse1.garage

add = "Dien Bien Phu"
console.log(add)

let myHouse2 = new House('1100 Fake St., San Francisco CA, USA', 2,false)
console.log(myHouse2)
