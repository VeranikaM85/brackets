module.exports = function check(str, bracketsConfig) {
  open = bracketsConfig.map( number => number[0]);
  close = bracketsConfig.map( number => number[1]);
  pair = Object.fromEntries(bracketsConfig);
 let stack=[]
 if (str.length%2!==0){
  return false;
 }
   for(let i=0; i<str.length;i++){
  let bracket=str[i]
  if(open.includes(bracket)){
  stack.push(bracket)}
  else if (close.includes(bracket)){
  top = stack.pop(); 
  if(pair[top]!==bracket){ 
      return false
  }
}
}
return stack.length===0}