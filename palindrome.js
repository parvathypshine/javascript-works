var num=121;
var n=num
res=""
while(num !=0){
    let lastDigit=num%10;
    res+=lastDigit
    num=Math.floor(num/10)
}
console.log(n==res?"palindrome":"not palindrome");
