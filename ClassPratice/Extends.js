class House {
    constructor(address = 'Canada') {
        this.address = address;
    }

}
class Mansion extends House {
    constructor(address,floors) {
        super(address);
        this.floors = floors;
    }
}

const mansion1 = new Mansion('Florida',6);
// console.log(mansion1)

class Country {
    getClassName() {
        return "Country";
    }
}
class AsiaCountry extends Country {
    getClassName() {
        return "Asia";
    }
    classClassName() {
        return super.getClassName();
    }
}

var country = new AsiaCountry();
console.log(country.getClassName());
console.log(country.classClassName());