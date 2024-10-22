var hello = function() {
    console.log("hello world!");
}

const country = 'Asia';

var countriesMap = new Map();
countriesMap.set('Vietnam', 97.34);
countriesMap.set('Japan', 125.8);
countriesMap.set('Korea', 51.78);

class Country {
    constructor(name, population, area) {
        this.name = name;
        this.population = population;
        this.area = area;
    }

    showInfo() {
        console.log("Country: " + this.name + " | Population: " + this.population + " | Area: " + this.area + " km²");
    }

    showDensity() {
        const density = this.population / this.area;
        console.log("Population Density: " + density.toFixed(3) + " people per km²");
    }

    getPopulationFromMap(countryName) {
        if (countriesMap.has(countryName)) {
            console.log("Population of " + countryName + " is " + countriesMap.get(countryName) + " million");
        } else {
            console.log(countryName + " not found in the map.");
        }
    }

    showAllCountriesInMap() {
        console.log("All countries in the map:");
        countriesMap.forEach((population, name) => {
            console.log(name + " has a population of " + population + " million");
        });
    }
}

var objectExport = {
    hello: hello,
    country: country,
    Country: Country,
    countriesMap: countriesMap
};

module.exports = objectExport;
