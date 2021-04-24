//1 SỐ HÀM ARRAY HAY DÙNG
    let a = [1,3,9,5,6,2,-3];
        //A. hàm map: Tạo 1 mảng mới từ mảng có sẵn theo 1 công thức nào đó
        let newA = a.map(function(value) {
            return value + 10
        })
        console.log(a);
        console.log(newA);

        //B. hàm filter: lọc mảng của ta thành 1 mảng mới với 1 điều kiện ta mong muốn
        let newB = a.filter(function(value) {
            if(value % 2 == 0) {
                return 5 //chỉ là 1 số hoặc 1 string ==> vẫn là true
            }
        })
        console.log(newB);

        //C. hàm reduce: tổng hợp mảng của ta thành 1 giá trị nào đó mà ta muốn
        let newC = a.reduce(function(pre, cur) {  //thường dùng: tính tiền, cộng tổng, giảm giá, trừ đi gì đó
            pre += cur;                     //pre: giá trị trước
            return pre;                     //cur: giá trị sau ( liền trức)
        }, 0) //số 0 là giá trị lúc đầu mặc định cho, có thể khai báo biến bên ngoài và gán vào
        console.log(newC);

 let tienLai = [1000, 1500, 2300, 5000];  // +0.05 mỗi thằng
    
//cách 1: dùng for
let newTienlai = [];
        for (let i = 0; i < tienLai.length; i++) {
        newTienlai.push(tienLai[i] + tienLai[i]*0.05)    
    }
    console.log(newTienlai);

//cách 2: dùng foreach
    tienLai.forEach(function(value) {
        newTienlai.push(value + value * 0.05);
    })
    console.log(newTienlai);

//cách 3: dùng map    

    tienLai.map(function(value) {
        return value + value * 0.05;
    })
    console.log(newTienlai);

    //D. hàm for Of
    for (let value of newTienlai) {
        console.log(newTienlai);
    }

    
    //BASIC
    // 1. KHAI BÁO BIẾN + DATATYPE ( NUMBER, STRING, ARRAY, FUNTCION)
    // 2. ĐIỀU KIỆN: if, else  HOẶC switch case
    // 3. VÒNG LẶP: FOR , WHITLE , MAP, forEach,REDUCE, filter
    // 4. ARRAY: []; PushManager, POP, SHIFT, UNSHIFT, FIND, INDEXOF

    //MIDDLE
    // - Object TRONG JS
    // - ES6
    // - HTML , CSS