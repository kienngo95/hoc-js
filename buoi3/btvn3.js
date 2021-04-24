// bt1: bội chung nhỏ nhất
var x = Number(prompt('điền số thứ nhất'));
var y = Number(prompt('điền số thứ hai'));

for(var z = 1;z <= x*y; z++) {
    if(z % x == 0 && z % y == 0) {
        console.log(z);
        break;       
    }
}

// bt2: ước chung lớn nhất
var a = Number(prompt('điền số thứ nhất'));
var b = Number(prompt('điền số thứ hai'));


for(var c = a*b;c <= a*b && c > 1; c--) {
    if(a % c == 0 && b % c == 0) {
        console.log(c);
        break;
    }
}


