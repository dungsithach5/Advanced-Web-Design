var female = [
    {
        id:"KO0002",
        prdname:"Quần Jean nữ",
        sell:269.000,
        orgprice:370.000,
        url:"img/QuanJeansNu.jpg",
    },
    {
        id:"VN0002",
        prdname:"Áo khoác nữ",
        sell:249.000,
        orgprice:369.000,
        url:"img/AoKhoacNu.jpg",
    },
    {
        id:"UK0002",
        prdname:"Áo Hoodie nữ",
        sell:159.000,
        orgprice:390.000,
        url:"img/AoHoodieNu.jpg",
    },
    {
        id:"US0002",
        prdname:"Áo phông nữ",
        sell:159.000,
        orgprice:390.000,
        url:"img/AoPhongNu.jpg",
    },
    
];

html = '';
for(var i in female) {
    html+=
    `   
        <div class="w-full h-[36rem] rounded-lg border-2 bg-white">
            <div class="w-auto h-[25rem] rounded-lg">
                <img src="${female[i].url}" alt="" class="w-full h-full object-cover rounded-t-md">
            </div>
            <div class="flex flex-col p-4 space-y-5">
                <span class="text-xl font-semibold">${female[i].prdname} - ${female[i].id}</span>
                <span class="text-lg">${female[i].sell.toFixed(3)} vnđ - <s>${female[i].orgprice.toFixed(3)} vnđ</s></span>
                <button class="mr-auto text-lg text-white bg-red-600 rounded p-1 px-4 hover:opacity-80">Đặt Mua</button>
            </div>
        </div>
    `
}
document.querySelector('#cardfemale').innerHTML = html;