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
            <div class="bg-black w-2/4 min-h-[800px] rounded-2xl">
                <img src="img/${product.img}" alt="" class="object-fill rounded-2xl">
            </div>
            <span class="w-2/4 p-10">
                <div class="flex justify-between items-center">
                    <h1 class="text-3xl font-medium">${product.name}</h1>
                    <button class="bg-[#E0F3CA] p-3 px-6 rounded-md font-medium text-lg">${product.price.toFixed(3)} VNĐ</button>
                </div>
                <p class="mt-4">USA</p>
                <p class="text-lg font-medium mt-16">Summary</p>
                <p>${product.description}</p>
                <p class="text-lg font-medium mt-16">Details</p>
            </span>
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