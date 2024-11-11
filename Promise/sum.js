function sumNumbers(a,b) {
    return new Promise((resolve, reject) => {
        if(typeof a !== 'number' || typeof b !== 'number') {
            reject('Hai số phải là kiểu number');
        } else {
            const sum = a + b;
            resolve(sum);
        }
    })
}

sumNumbers(5,6)
    .then((result) => {
        console.log('Result: ', result);
    }).catch((error) => {
        console.log('Error: ', error);
    });