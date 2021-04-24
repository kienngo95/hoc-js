// ARRAY: LÀ MẢNG CÁC GIÁ TRỊ LIÊN TIẾP TRONG BỘ NHỚ

// CÁCH KHAI BÁO : ngoặc vuông, ngăn cách bằng dấu ,
var a = [5,'hello',true,'Kiên',5555555]; // bắt đầu từ 0 và đến n-1
console.log(a[0]) //cách truy cập 1 biến trong mảng array
console.log(a);
console.log(a.length); // độ dài mảng
for(var i = 0; i < a.length; ++i) { // truy cập tất cả phần tử theo thứ tự
    console.log(a[i]);
}

var i = 0
while(i < a.length) {
    console.log(a[i]);
    ++i
}


// var a = 51;
// var b = 9;
// var c = 9;
// if(b > a && b > c) {
//     console.log('số lớn nhất là  ' + b);
// }
// else if(a > c && a > b) {
//     console.log('số lớn nhất là  ' + a);
// }
// else {
//     console.log('số max là  ' + c);
// }


//CALLBACK
function x(a) {
    a()
}
x(function() {
    console.log('hello')
})

function x() {
    console.log('hello');
}
a.forEach(function (value,index) { //forEach bên trong phải là 1 function
    console.log(index,value * 2);
}
)

// let a = [5,'hello',true,'Kiên',5555555];

//SEARC: TÌM KIẾM TUYẾN TÍNH THEO CHIỀU TĂNG DẦN
for (var q = 0; q < a.length; ++q) {
    if('Kiên' == a[q]) 
    {
        console.log('tìm thấy kiên ở vị trí', q);
    }
}

//MIN && MAX
let num = [7,6,8,55,9,1,55,11];

//kĩ thuật cắm cờ
let max = num[0];
for(let i = 1; i < num.length; i++) {
    if(max < num[i]) {
        max = num[i];
    }
}

console.log(max);

//vd2: so sánh căp
let num1 = [7,6,8,55,9,1,55,11];
let num2 = [7,6,8,55,9,1,55,11];

//THÊM PHẦN TỬ MỚI CHO MẢNG
let mang = [];
mang[0] = 555;
console.log(mang);

let mang2 = [];
for (let k = 0; k < 10; k++) {
    mang2[k] = 5000
}
console.log(mang2);

//truyền giá trị mới vào cuối mảng
mang2.push(5);
console.log(mang2);

//xóa giá trị cuối mảng
mang2.pop()
console.log(mang2);

let cuoiMang = mang2.pop() //lấy biến ở cuối mảng ra và có thể sử dụng lại fan tử đó

//thêm giá trị vào đầu mảng
mang2.unshift('kiên');
console.log(mang2);

//xóa giá trị ở đầu mảng
mang2.unshift();
console.log(mang2);

//gôp 2 mảng: thứ tự mảng nào gán với concat sẽ đứng trước
let mangSort = [7,8,9,0,7,6,5];
let f = mang2.concat(mangSort);
console.log(f);