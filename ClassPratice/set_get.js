class Circle {
    constructor(radius) {
      this._radius = radius; // Sử dụng dấu gạch dưới để đặt tên thuộc tính là privat
    }
  
    // Getter để lấy giá trị bán kính
    get radius() {
      return this._radius;
    }
  
    // Setter để thiết lập giá trị bán kính, kiểm tra giá trị âm
    set radius(newRadius) {
      if (newRadius > 0) {
        this._radius = newRadius;
      } else {
        console.log("Bán kính phải là một số dương.");
      }
    }
  
    // Phương thức tính diện tích hình tròn
    calculateArea() {
      return Math.PI * this._radius * this._radius;
    }
  }
  
  // sử dụng class Circle
  let circle = new Circle(5);
  console.log("Bán kính ban đầu: " + circle.radius); // Output: Bán kính ban đầu: 5
  
  circle._radius = 10; // Sử dụng setter để thiết lập giá trị bán kính mới
  console.log("Bán kính mới: " + circle._radius); // Output: Bán kính mới: 10
  
  circle.radius = -3; // sử dụng setter để thiết lập giá trị bán kính âm
