function getUsers() {
    return new Promise((resolve, reject) => {
      fetch('https://656d3ffbbcc5618d3c22ee91.mockapi.io/product')
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
    const productTableBody = document.getElementById('card-container');
    data.forEach(product => {
        const row = 
        `
            <div class="card" id="product-${product.id}">
                <h2>${product.name}</h2>
                <img src="${product.image1}" alt="Product Image 1">
                <img src="${product.image2}" alt="Product Image 2">
                <img src="${product.image3}" alt="Product Image 3">
                <p class="price">${product.price}</p>
                <span class="tag">${product.tag}</span>
                <p>${product.id}</p>
            </div>
        `;
        productTableBody.innerHTML += row;
    });
  })
  .catch(error => {
    console.error('Đã xảy ra lỗi:', error);
  });
