function getUsers() {
    return new Promise((resolve, reject) => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          if (!response.ok) {
            throw new Error('Không thể lấy dữ liệu từ API');
          }
          return response.json();
        })
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
}

getUsers()
  .then(data => {
    console.log('Danh sách người dùng:', data);
    console.log('Tổng số người dùng:', data.length);
  })
  .catch(error => {
    console.error('Đã xảy ra lỗi:', error);
});