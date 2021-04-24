//Hàm function: là 1 nhóm các câu lệnh để xủ lí cùng 1 chức năng
//cach khai bao
function tenFunction() {
    if(b > a && b > c) {
        console.log('số lớn nhất là  ' + b);
    }
    else if(a > c && a > b) {
        console.log('số lớn nhất là  ' + a);
    }
    else {
        console.log('số max là  ' + c);
    }
}

//GỌI HÀM
tenFunction(); //đã gói gọn function lại và gói gọn

//vd:
var a = 51;
var b = 966;
var c = 998;
tenFunction();

//vd2
function hello() {
    console.log('xin chào kiên')
}
hello()

//PARAM: LÀ 1 THAM SỐ TRUYỀN VÀO KHI CHÚNG TA CHẠY HÀM

function hello(name) {
    console.log('xin chào', name);
}

//truyền 1 tham số
hello('ngô');
hello('sỹ');
hello('kiên');

//truyền nhiều tham số

info('kien', 'hà nội', 29);
info('sỹ', 'thái nguyên', 20);
info('kiên', 'tây hồ', 30);

function info(name, diachi, sobien) {
    console.log(name, diachi, sobien);
}
console.log(name) 

//FUNCTION SCOPES: CÁC BIẾN BÊN TRONG THÌ SẼ KHÔNG DÙNG ĐC BÊN NGOÀI
//FUNCTION SCOPES CLOSURE: NGHĨA LÀ HÀM MÀ VIẾT LỒNG Ở BÊN TRONG FUNCTION SẼ DÙNG ĐƯỢC KHI XỬ LÝ BÊN NGOÀI

//dùng LET
// LET chỉ dùng được ở trong scope của nó và ở dưới nó thôi

//RETURN: câu lệnh dùng để tái sử dụng để làm những việc khác
function add(a,b) {
    let c = a + b;
    return c; // khi return ở đâu, thì chương trình sẽ dừng lại ở đó
}
let toTal = add(5,6) / 2
console.log(toTal);

//vd2:
function light(x) {
    if(x == 'HONG') {
        console.log('bóng đèn hỏng')
        return 'hihi'; //dừng chương trình ở đây
    }
    if(x) {
        console.log('bóng đèn bật');
        return; //khi không viết string thì sẽ là return undifined
    } else {
        console.log('bóng đèn tắt');
    }
        return;
    console.log('hello');
    //return undefined
}
light('HONG') //==> biến đang là return = 5

//KHAI BÁO THAM SỐ MẶC ĐỊNH
//NÊN KHAI BÁO THAM SỐ MẶC ĐỊNH Ở CUỐI THÌ THAM SỐ MẶC ĐỊNH KHI ĐÓ MỚI CÓ GIÁ TRỊ
function add(a,b = 9) {
    let c = a + b;
}
let toTal = add(5) / 2
console.log(toTal);

//tên function có thể để ra ngoài cùng với let
let sum = function(m, n) {
    return m + n;
}

console.log(sum(5, 6));