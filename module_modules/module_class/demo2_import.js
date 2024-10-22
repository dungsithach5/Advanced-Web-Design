var myModule = require('./demo2');
myModule.hello();
console.log('Continent: ' + myModule.country);

var country = new myModule.Country('Vietnam', 97.34, 331.2);
// country.showInfo();
// country.showDensity();

// Sử dụng Map methods
country.getPopulationFromMap('Japan');  // Lấy dân số của Nhật Bản từ Map
country.getPopulationFromMap('USA');    // Lấy dân số của quốc gia không tồn tại trong Map
country.showAllCountriesInMap();        // Hiển thị tất cả các nước trong Map
