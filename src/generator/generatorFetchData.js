import fetch  from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

async function fetchData(urlApi){
 const response = await fetch(urlApi);
 const data = await response.json();
 return data;
}

async function* anothetFunction (urlApi){
try{
  const productos = await fetchData(`${urlApi}/products`);
  const producto = await fetchData(`${urlApi}/products/${productos[0].id}`)
  const categoria = await fetchData(`${urlApi}/categories/${producto.category.id}`);
  //yield console.log(producto);
  yield console.log(producto.title) 
  yield console.log(categoria.name);
}catch(error){
console.error(error);
 }
finally{
    console.log('Termine')
}
}
const cuchara = anothetFunction(API);
if (cuchara.next().value != undefined){
console.log(cuchara.next().value);
}
else if (cuchara.next().value != undefined){
    console.log(cuchara.next().value);
    }
//anothetFunction(API).next().value;
//anothetFunction(API).next().value;