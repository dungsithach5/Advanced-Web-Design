// const mySet = new Set([1,2,3,4,5]);
// console.log(mySet)

// mySet.add(6); // thêm phần tử
// mySet.ge

// // kiểm tra tồn tại
// console.log("Has 4:", mySet.has(4));
// console.log("Has 10:", mySet.has(10));

// // Xóa phần tử
// mySet.delete(3);
// console.log("Object sau khi xóa", mySet);

// // kích thước của mảng
// console.log("Set size:", mySet.size); 

const mySet = new Set();
mySet.add(1);
mySet.add(2);

// Chuyển đổi Set sang Array để dễ dàng thực hiện các phép toán
const valuesArray = Array.from(mySet);

// Cộng các giá trị trong Set
const sum = valuesArray.reduce((acc, value) => acc + value, 0);

console.log(sum); // Kết quả: 3
