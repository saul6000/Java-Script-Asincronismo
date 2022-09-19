function* generator (){
    yield "hola bb";
    yield 2;
    yield 3;
}
const g = generator();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

function* arraygenerator(array){
  for(let value of array){
    yield value
  }
}
const array = [1,2,3,4,5,4,3,4,2,3,3]
const generatorArray = arraygenerator(array);
console.log(generatorArray.next().value);
console.log(generatorArray.next().value);
console.log(generatorArray.next().value);
console.log(generatorArray.next().value);
console.log(generatorArray.next().value);
console.log(generatorArray.next().value);

