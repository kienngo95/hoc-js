// Hoisting: Tất cả các biến ta khai báo ở đâu ( trừ function ), thì nó đều bị đẩy lên trên đầu
var x;
var y;

if(true) {
    var x = 8;
}

y = 10;
console.log(x);