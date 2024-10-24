function greet(name,callback) {
    console.log('Hello ' + name + '!');
    callback();
}

function sayGoodbye() {
    console.log('Goodbye!');
}

greet('Alice',sayGoodbye);

// function A(callback) {
//     const kq = 5+6;
//     callback(kq);
// }

// function B(kq) {
//     console.log('Hello kq: ' + kq);
// }

// A(B);