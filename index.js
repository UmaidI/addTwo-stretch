const numbers = [5,10,15,20,25];
const addTwo = (numbers) =>{
  const numbersPlusTwo = numbers.map((num)=>{
  return num + 2;
})
return numbersPlusTwo
}
console.log(addTwo(numbers));
