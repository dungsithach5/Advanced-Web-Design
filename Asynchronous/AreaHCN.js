var AreaHCN = (chieudai,chieurong,callback) => {
    const result = chieudai * chieurong;
    callback(result);
}

var display = result => console.log("Result: " + result);

AreaHCN(5,6,display);
