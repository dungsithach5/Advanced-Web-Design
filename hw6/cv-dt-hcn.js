const perimeter = (length, width) => 2 * (length + width);
const area = (length, width) => length * width;

const length = 5;
const width = 3;

const rectPerimeter = perimeter(length, width);
const rectArea = area(length, width);

console.log("Chu vi hình chữ nhật: " + rectPerimeter);
console.log("Diện tích hình chữ nhật: " + rectArea); 