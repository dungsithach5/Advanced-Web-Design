const mySet = new Set([1, 2, 3, 4, 5]);

mySet.add(6); // thêm phần tử

// kiểm tra tồn tại
console.log("Has 4:", mySet.has(4));
console.log("Has 10:", mySet.has(10));

// Xóa phần tử
mySet.delete(3);
console.log("Object sau khi xóa", mySet);

// kích thước của mảng
console.log("Set size:", mySet.size); 