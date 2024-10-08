// Function to get query parameters from URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Function to display product details
function displayProductDetail() {
    const code = getQueryParam('code');
    
    const products = getProductsFromLocalStorage();
    const product = products.find(p => p.id === code);

    if (product) {
        const productDetail = document.getElementById('productDetail');
        productDetail.innerHTML = `
            <div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">
                <div class="card product p-2" style="width:auto">
                    <img class="card-img-top" src="img/${product.img}" alt="...">
                    <div class="card-title product-title text-center h5">${product.name}</div>
                    <div class="price text-center h6">${product.price}₫</div>
                    <span class="text-center add-to-cart btn btn-outline-warning add-cart" 
                        data-id="${product.id}" data-name="${product.name}" 
                        data-img="${product.img}" data-price="${product.price}" 
                        onclick="tks()">
                    </span>
                </div>
            </div>
            `;
    } else {
        console.error('Sản phẩm không tồn tại');
    }
}

// Function to get products from Local Storage
function getProductsFromLocalStorage() {
    const products = JSON.parse(localStorage.getItem('listHotel'));
    return products ? products : [];
}

// Display product details when the page is loaded
document.addEventListener('DOMContentLoaded', displayProductDetail);