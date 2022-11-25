// class Parent{
//     ml(){
//         console.log("inside");
//     }
// }class Child extends Parent{

// }
// var c=new Child()
// c.ml()
class Operations{
    add(...args){
        return args.reduce((n1,n2)=>n1+n2)
    }
}
var ad=new Operations()
console.log(ad.add(23,67,34));
//54.00