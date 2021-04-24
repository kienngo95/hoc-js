let x = [4,9,8,21,865,11]
let y;
for (let a = 0; a < x.length;++a) {
    for (let b = x.length - 1; a < b; --b) {
        if (x[b] < x[b-1]) {
            y = x[b];
            x[b] = x[b-1];
            x[b-1] = y
        }
    }
}

console.log(x);