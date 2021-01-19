/* map 原理 */  
/*ctrl + alt +n 在輸出那可以看結果*/

let arr2 = [];
let arr = [1,2,3,4,5];

/*上面是map寫法 前面放陣列arr 後面放方法  a => callback func 呼叫arr所有元素*/
let arr3 = arr.map(a => Math.pow(a,2))
console.log(arr3)


/*這裡是map的原理*/
// function mymap(arr, fn) {
//   for (i = 0; i < arr.length; i++) {
//     // arr2[i] = arr[i]*2;
//     fn();
//     console.log(arr2);
//   }
// }

// function power() {
//   arr2[i] = arr[i] * arr[i];
// }

// mymap(arr,power);




// console.log(Array.prototype)

const a3 =[]

const a =[1,2,3,4,5]

// const a2 = a.map(a=>Math.pow(a,2)) 

// console.log(a2)

function double(){
    for (i=0;i<a.length;i++){
        a3[i] = a[i]*2
    }
    return a3;

}

double()
console.log(a3)

Array.prototype.hello = function(){
    console.log('hello world')
}

const hello  =  [1,2,3]

hello.hello()



