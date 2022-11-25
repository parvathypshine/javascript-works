// function add(n1,n2){
//     return n1+n2;
// }
// console.log(add(10,20));


// function add(...args){
//     let res=0;
//     for(let n of args){
//         res+=n
//     }
//     return res
// }
// add(10,20)
// add(2,3,4)
// console.log(add(2,3));

// function cube(num){
//     c=num*num*num
//     return c
// }
// console.log(cube(3));

//arrow fn

// var add=(n1,n2)=>n1+n2

// var sub=(n1,n2)=>n1-n2

// var cube=(n)=>n**3
// var maxTwo=(n1,n2)=>n1>n2?n1:n2

// var numChk=(num)=>num>0?"+ve":num<0?"-ve":"zero"

// console.log(numChk(-1));

var smartSub=(n1,n2)=>n1<n2?n1-n2:n2-n1

console.log(smartSub(4,3));