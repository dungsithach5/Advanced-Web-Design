var hotel = [
    {
        id:"R01",
        name:"The Ritz-Carlton",
        roomtype:"Đơn",
        img : "hotel1.webp",
        price:122000,
    },
    {
        id:"R02",
        name:"Marriott Marquis",
        roomtype:"Đơn",
        img : "hotel2.webp",
        price:400000,
    },
    {
        id:"R03",
        name:"Hilton Garden Inn",
        roomtype:"Đôi",
        img : "hotel3.webp",
        price:350000,
    },
    {
        id:"R04",
        name:"Four Seasons",
        roomtype:"Đôi",
        img : "hotel1.webp",
        price:564000,
    },
    {
        id:"R05",
        name:"Hyatt Regency",
        roomtype:"Đơn",
        img : "hotel1.webp",
        price:654000,
    },
    {
        id:"R06",
        name:"InterContinental",
        roomtype:"Đơn",
        img : "hotel1.webp",
        price:123000,
    },
    {
        id:"R07",
        name:"Waldorf Astoria",
        roomtype:"Đơn",
        img : "hotel1.webp",
        price:345000,
    },
    {
        id:"R08",
        name:"Mandarin Oriental",
        roomtype:"Đơn",
        img : "hotel1.webp",
        price:258000,
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
        listhotel += `
        <div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">
            <div class="card product p-2" style="width:auto">
                <img class="card-img-top" src="img/${data.img}" alt="...">
                <div class="card-title product-title text-center h5">${data.name}</div>
                <div class="price text-center h6">${data.price}₫</div>
                <span class="text-center add-to-cart btn btn-outline-warning add-cart" 
                      data-id="${data.id}" data-name="${data.name}" 
                      data-img="${data.img}" data-price="${data.price}" 
                      onclick="tks()">
                    <a><i class="fas fa-cart-plus"></i></a>
                </span>
            </div>
        </div>`;

    }
    document.getElementById("banchay").innerHTML += listhotel;
    Save();
   
}

listLocal();


