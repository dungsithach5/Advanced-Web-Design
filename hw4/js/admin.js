var productAdmin = function(){
    var listhotel1 ="";
    for (var i in hotel) {
        var data = JSON.parse(JSON.stringify(hotel[i]))
        listhotel1 += `
        <tr>
            <td>${data.id}</td>
            <td>${data.name}</td>
            <td>${data.roomtype}</td>
            <td><img src="../img/${data.img}" alt="" style="width: 50px;"></td>
            <td>${data.price}</td>
            <td>
                <button onclick="updateProduct(${i})" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct">
                    <i class="fas fa-cogs"></i>
                </button>
                <button onclick="deleteProduct(${i})" class="btn ml-1 btn-outline-warning">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `;

    }   
    document.getElementById("product-admin").innerHTML += listhotel1;
    // Save();
}
var addProduct = function(){
    var Product = {
        id :"R"+parseInt( hotel.length+1),
        name : document.getElementById("name").value,
        roomtype:document.getElementById("roomtype").value,
        img : document.getElementById("img").value,
        price : document.getElementById("price").value
    }
    hotel.push(Product);
        localStorage.setItem('listHotel',JSON.stringify(hotel));
        // Save();
     window.location.reload();
}

    // Xóa sản phẩm 
    var deleteProduct= function (i){
        hotel.splice(i, 1);
        localStorage.setItem('listHotel',JSON.stringify(hotel));
        window.location.reload();
    }

    // Sửa sản phẩm 
    var updateProduct = function(i){
        var k = hotel[i];
        document.getElementById("idd").value = k.id;
        document.getElementById("named").value = k.name;
        document.getElementById("roomtyped").value = k.roomtype;
        document.getElementById("imgd").value = k.img;
        document.getElementById("priced").value = k.price;
        document.getElementById("idd").setAttribute("disabled","disabled");
        document.getElementById("submitUpdate").innerHTML = '<button class="btn btn-outline-danger mt-3" onclick="submitUpdate('+i+')"> Đồng ý</button>'
    }
    var submitUpdate = function(i){
        var k = hotel[i];
        k.id= document.getElementById("idd").value;
        k.name= document.getElementById("named").value;
        k.roomtype= document.getElementById("roomtyped").value;
        k.img= document.getElementById("imgd").value;
        k.price= document.getElementById("priced").value;
        localStorage.setItem('listHotel',JSON.stringify(hotel));
        window.location.reload();
    }

    var userAdmin = function(){
        var listproduct ="";
        for (var i in user){
            var data = JSON.parse(JSON.stringify(user[i]))
         var listproduct = '<tr>';
          listproduct+='<td>'+data.id+'</td>';
          listproduct+='<td>'+data.username+'</td>';
        //   listproduct+='<td><img src="../img/'+data.img+'" alt="" style="width: 50px;"></td>';
          listproduct+='<td>'+data.email+'</td>';
         //  listproduct1+='';
          listproduct+='<td><button onclick="updateProduct('
          +i+')" class="btn btn-outline-danger"  data-toggle="modal" data-target="#updateProduct"><i class="fas fa-cogs"></i></button>';
          listproduct+='<button onclick="deleteProduct('
          +i+')" class="btn ml-1 btn-outline-warning"><i class="fas fa-trash"></i></button></td>';
          listproduct+='</tr>';  
    
         document.getElementById("user-admin").innerHTML += listproduct;
        }
        // Save();
        }
    productAdmin();
    userAdmin();
