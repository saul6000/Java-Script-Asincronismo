const fnAsync = ()=>{
    return new Promise ((resolve,reject)=>{
    (resolve)?setTimeout(()=> resolve('Se cumplio'),2000):reject('No se cumplio');
});
}
const fnAsyncAwait=async()=>{
    const something = await fnAsync();
    console.log(something);
    console.log('hello')
}
fnAsyncAwait();
console.log('Before');
console.log('After');