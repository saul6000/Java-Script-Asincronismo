/*const promesa = new Promise(resolve,reject)(
   /* (resolve,reject)=>{
    resolve('hey');
    });
-*/
    const cows =11;

    const countcows = new Promise(
        (resolve,reject)=>{
            (cows>10)?resolve(`El valor de las vacas es: ${cows} por lo que cumple la condicion`):
            reject(`Las vacas no cumple con la cantidad de ser mayores a 10 el numero total de vacas que tiene es ${cows}`);
        });
        
        countcows.then(resolve => resolve + "ya no te quiero")
        .then(resolve => console.log(resolve))
        .catch(reject =>{
            console.log(reject)
        }).finally(()=>{
            console.log('termine')
        })


   /*    const delay = new Promise(
            setImmediate(()=>{

            },2000),(resolve,reject)=>{
                resolve('hello after 2 s')
            })*/