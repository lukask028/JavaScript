function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}

const meuArray = [1, 3, 8, 11, 14, 17];

console.log(filtraPares(meuArray));
