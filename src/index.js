module.exports = function check(str, bracketsConfig) {
  let pair = Object.fromEntries(bracketsConfig);
  let stack=[]
  if (str.length%2!==0){
   return false;
  }
   for(let i=0; i<str.length;i++){
   let top = stack[stack.length-1] 
   let bracket=str[i]
   if(pair[top]!==bracket){
   stack.push(bracket)}
   else {
   top=stack.pop();}
 }
 return stack.length===0}