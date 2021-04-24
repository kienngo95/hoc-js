// Định nghĩa: là 1 đối tượng có các thuộc tính và phương thức, tồn tại bên ngoài cuộc sống
// KHai báo object: dùng {}
// Có 1 cặp key : value
let co = {
    mauSac : ['den', 'xanh', 'do'],
    tuoi : 5 ,
    isFly : false ,
    speak: function() {
        console.log('Quack quack');
        return "keu gi ma keu"
    },
    introduce : function() {
        console.log('toi co rat nhieu mau sac', this.mauSac.join(' + '))
        this.speak();
    }
}

console.log(co.introduce());

let arr = [5,6]; //array la 1 kiue object
console.log(typeof arr);

//this: la dai dien cho cac gia tri ma minh dang khai bao

//Ham for in
for (const keyCo in co) {
    if(typeof co[keyCo] == 'function') {
        console.log(keyCo, co[keyCo]());
    } else {
        console.log(keyCo, co[keyCo]);
    }
}

//vd: Dựng array = object
let abc = {
    value : [4,6,6,7,6],
    length : 5,
    indexOf: function(gt) {
        for (let i = 0; i < this.value.length; i++) {
            if(this.value[i] === gt) {
                return i;
            }           
        }
        return -1;
    },
    push: function(gt) {
        this.value[this.length] = gt;
        this.length++;
    }
}

console.log(abc.push(100));
console.log(abc.value);
console.log(abc.length);

//btvn: build 1 giỏ hàng: tên sp, giá sp, số lượng mua

//reference type vs primitive type
