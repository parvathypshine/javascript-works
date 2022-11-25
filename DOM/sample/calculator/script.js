function displayValue(e){
   result.value+=e.target.value;
}
function clearBox(){
   result.value=""

}
function performOperation(){
   let val=result.value;
   let res=eval(val)
   result.value=res
}
function backSpace(){
   let res=result.value.slice(0,-1)
   result.value=res
}