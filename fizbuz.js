num=3

// if(num%15==0){
//     console.log("fizzbuzz");
// }
// else if(num%5==0){
//     console.log("buzz");
// }
// else if(num%3==0){
//     console.log("fizz");
// }
// else{
//     console.log("invlid");
// }

var str=""
if(num%3==0){
    str+="fizz"
}
if(num%5==0){
    str+="buzz"
}
console.log(str);