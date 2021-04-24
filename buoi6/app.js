//giỏ hàng
// let products = [{
//     id : 1,
//     ten : 'Banh mi nho',
//     gia : 20000,
// }, {
//     id : 2,
//     ten : 'Trung',
//     gia : 10000,
// }, {
//     id : 3,
//     ten : 'xuc xich',
//     gia : 15000,
// }, {
//     id : 4,
//     ten : 'kem',
//     gia : 10000,
// }]

// let carts = [{
//     soLuongmua : 2,
//     id : 3,
// }, {
//     soLuongmua : 5,
//     id : 1, 
// }];

// let total = 0;
// carts.forEach(function(cart) {
//     let findedProduct =  products.find(function(value) {
//         return value.id==products.id;
//     })
//     total += cart.soLuongmua * findedProduct.gia
// })

// let tong = cart.reduce(function(total, cart) {
//     let findedProduct =  product.find(function(value) {
//         return value.id==cart.id;
//     })
//         return total + cart.soLuongmua * findedProduct.gia
// // })

// console.log(tong);


// //vd2:
// let num = [2,3,5,7,8];
// let tich =  num.reduce(function(a, b) {
//     return a * b;
// },1)
// console.log(tich);

//Hàm cần return: 
// filter => function => return true/false
// map => function => return giá trị mong muốn
// find ( return điều kiện đầu tiên khi true xong dừng luôn)
//reduce => function (điểm mặc định, từng giá trị trong mảng) => return ra giá trị mới của (điểmmặcđịnh)
//forEach ( chỉ để duyệt chứ không để return) == for  (foreach k dùng được break và continue)


// primitive type(kiểu dữ liệu nguyên thủy)                 references type
// ( lưu giá trị thường)                                    (chỉ lưu địa chỉ bộ nhớ)
// String                                                   Array
// Number                                                   Object
// Boolean


// let x = {
//     id : 100
// }

// let y = x;
// let k = y;
// y.id = 1000;
// console.log(x);  // k và y cùng trỏ vào x => thay đổi 1 cái sẽ làm thay đổi tất cả

//cách fix
//c1: dùng hàm map để thay đổi mà k đổi hàm cũ
//c2: dùng object.assign
let x = {
    id : 100
}
//hàm tạo ra bộ nhớ mới để k làm đổi hàm cũ
let y = Object.assign({name : 'kiên'}, x); //phần {name:'kien} có thể để trống, nếu muốn thêm key mới cho vào
y.id = 1000;
console.log(x);
console.log(y);

//c3: dùng array.from :
let a = [1,2,3,4];
console.log(a);
let b = Array.from(a);
let c = [10,2000,...a]; // nghĩa là rải mảng mới: phần tử mới trước dấu ... sẽ thêm vào đầu mảng cũ
b[0] = 10;
console.log(a);
console.log(b);