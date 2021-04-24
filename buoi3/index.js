// // VÒNG LẶP FOR : giúp tịch tiến hoặc lùi theo quy luật;
// // công thức: for (khai báo biến; điều kiện dừng; biểu thức thay đổi giá trị); 
// for (var i = 0; i < 5; i = i + 1) {
//      console.log(i); //state
// }
// //cách hoạt động:Lần 1: i = 0 ==> i < 10 ==> true ==> state
// //               Lần 2: i + 1 = 1 ==> i < 10 ==> true ==> state ....

// //bài tập tính tổng 100
// var tong = 0;
// for (var i = 0; i <= 100; i = i +1) {
//      if (i % 2 == 0) {
//           tong = tong + i
//      };
// }
// console.log(tong);

// //vd
// var tongTien = 1;
// for (var i = 1; i < 6; i = i +1) {
//      tongTien = tongTien * i;
// }
// console.log(tongTien);


// VÒNG LẶP WHITE (điều kiện)
// công thức:
// var sum = 0; 
// while (i <= 100) {
//           sum = sum + 1 // trong ngoặc, tính từ biểu thức từ trên xuống
//           i = i + 1
//      }
//      console.log(sum);


var num = 1235;
while(num != 0) {
     console.log(num % 10);
     num = parseInt(num / 10)
}
console.log(num);

// var tinh = 1;
//  while(tinh < 1000) {
//      if(tinh * 2 > 1000) {
//           break; // break là câu lệnh dừng vòng lặp
//      }              
//      tinh *= 2
// }
// console.log(tinh);

// // 1-1000;
// for(var i = 1; i <= 1000; i++) {
//      if(i % 14 == 0 && i != 14) {
//           console.log(i);
//           break;
//      }
// }

// for(var i = 1; i <= 10; i++) {
//      if(i % 2 == 0) {
//           continue; // contunue là câu lệnh tiếp tục vòng lặp
//      }
//      console.log(i);

// vòng for lặp ( for trong chạy liên tục, for ngoài giữ nguyên)
for(var a = 1; a <= 5; a++) {
     for(var b = 1; b <= 4; b++) {
          for(var c = 1; c <= 3; c++)
               console.log('a = ',a + ' b = ',b + ' c = ',c);
     }
}

//tìm bội chung nhỏ nhất của 2 số
//ước chung lớn nhất của 2 số
// IN RA DÃY SỐ FILBO VÀ TỈ LỆ VÀNG

//MẢNG: 
//ĐỊNH NGĨA: MẢNG CÓ THỂ LƯU ĐƯỢC TẤT CẢ CÁC GIÁ TRỊ VÀ MẢNG LƯU CÁC GIÁ TRỊ TỪ 0 ĐẾN N-1