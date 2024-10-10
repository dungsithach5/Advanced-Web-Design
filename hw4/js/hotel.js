var hotel = [
    {
        id:"R01",
        name:"The Ritz-Carlton",
        roomtype:"Đơn",
        img : "hotel1.webp",
        price:122.000,
        description:"The Ritz-Carlton is a luxury hotel renowned for its elegance, exceptional service, and refined sophistication. Located in major cities and exotic destinations worldwide, The Ritz-Carlton brand is synonymous with opulence, offering lavish accommodations with meticulously designed interiors, state-of-the-art amenities, and stunning views. Each hotel is characterized by its blend of classic and contemporary styles, creating a warm, inviting atmosphere. Guests can enjoy world-class dining, rejuvenating spa treatments, and personalized services. The attention to detail, commitment to excellence, and unforgettable guest experiences set The Ritz-Carlton apart as a premier destination for discerning travelers."
    },
    {
        id:"R02",
        name:"Marriott Marquis",
        roomtype:"Đơn",
        img : "hotel2.webp",
        price:400.000,
        description:"The Ritz-Carlton is a luxury hotel renowned for its elegance, exceptional service, and refined sophistication. Located in major cities and exotic destinations worldwide, The Ritz-Carlton brand is synonymous with opulence, offering lavish accommodations with meticulously designed interiors, state-of-the-art amenities, and stunning views. Each hotel is characterized by its blend of classic and contemporary styles, creating a warm, inviting atmosphere. Guests can enjoy world-class dining, rejuvenating spa treatments, and personalized services. The attention to detail, commitment to excellence, and unforgettable guest experiences set The Ritz-Carlton apart as a premier destination for discerning travelers."
    },
    {
        id:"R03",
        name:"Hilton Garden Inn",
        roomtype:"Đôi",
        img : "hotel3.webp",
        price:350.000,
        description:"The Ritz-Carlton is a luxury hotel renowned for its elegance, exceptional service, and refined sophistication. Located in major cities and exotic destinations worldwide, The Ritz-Carlton brand is synonymous with opulence, offering lavish accommodations with meticulously designed interiors, state-of-the-art amenities, and stunning views. Each hotel is characterized by its blend of classic and contemporary styles, creating a warm, inviting atmosphere. Guests can enjoy world-class dining, rejuvenating spa treatments, and personalized services. The attention to detail, commitment to excellence, and unforgettable guest experiences set The Ritz-Carlton apart as a premier destination for discerning travelers."
    },
];
// đẩy mảng product vào local
function Save(){
    localStorage.setItem('listHotel',JSON.stringify(hotel))
}
//lấy sản phẩm 
function load(){
   hotel = JSON.parse(localStorage.getItem('listHotel'));
} 
//xuất sản phẩm ra html
if (localStorage.getItem("listHotel") != null) {
load();
}
Save();
var listLocal = function(){
   var listhotel ="";
   for (var i in hotel){
        var data = JSON.parse(JSON.stringify(hotel[i]))
        // listhotel += `
        // <div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">
        //     <div class="card product p-2" style="width:auto">
        //         <img class="card-img-top" src="img/${data.img}" alt="...">
        //         <div class="card-title product-title text-center h5">${data.name}</div>
        //         <div class="price text-center h6">${data.price}₫</div>
        //         <span class="text-center add-to-cart btn btn-outline-warning add-cart" 
        //               data-id="${data.id}" data-name="${data.name}" 
        //               data-img="${data.img}" data-price="${data.price}" 
        //               onclick="tks()">
        //             <a href="product-detail.html?code=${data.id}"><i class="fas fa-cart-plus"></i></a>
        //         </span>
        //     </div>
        // </div>`;

        listhotel += `
            <div id="room__card">
                    <div id="room__card__image">
                    <img src="img/${data.img}" alt="room" />
                    <div id="room__card__icons">
                    <span><i class="ri-heart-fill"></i></span>
                    <span><i class="ri-paint-fill"></i></span>
                    <span><i class="ri-shield-star-line"></i></span>
                    </div>
                </div>
                <div id="room__card__details">
                    <h4>${data.name}</h4>
                    <h5>Starting from <span>${data.price}/night</span></h5>
                    <a href="product-detail.html?code=${data.id}" class="btn">Details</a>
                </div>
            </div>`;

    }
    document.getElementById("room__grid").innerHTML += listhotel;
    Save();
   
}

listLocal();


