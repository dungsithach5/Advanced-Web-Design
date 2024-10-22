// var intro = ["Hello","I","am","Tien"];
// var [...intro] = intro;

// console.log(intro[3]);

// const person = {
//     name: "Bob",
//     age: 30
// }

// const {
//     name: fname,
//     age: Aname
// } = person;

// console.log(fname);

const users = [
    {
      name: 'Alex',
      address: '15th Park Avenue',
      age: 43
    },
    {
      name: 'Bob',
      address: 'Canada',
      age: 53
    },
    {
      name: 'Carl',
      address: 'Bangalore',
      age: 26
    }
  ];
  
  // for(x in users) {
  //   console.log(users[x]);
  // }
  
// for (let { name, age, address } of users) {
//     console.log(`${name} is ${age} years old! and live ${address}`);
// }

var info = function(){
    var html = '';
    for (let { name, age, address } of users) {
        html+=
        `
          <div id="card">
            <img src="avt.jpg" alt="Avatar">
            <h3>${name}</h3>
            <p>${age}</p>
            <p>${address}</p>
          </div>
        `
    }
    document.getElementById("bd").innerHTML = html;
}
info();

