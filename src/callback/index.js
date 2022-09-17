let saludo = (nombre)=>{
    return nombre  + ' ' + "soy de Ecuador y tengo ganas de aprender javascript";
}

let saludo2 = (saludo)=>{
    let nombre = "Me llamo Saul Mendoza y"
    return saludo(nombre);
}

console.log(saludo2(saludo));

saludo = (nombre)=>{
    setTimeout(()=>{
    if (nombre ==='Saul Mendoza'){
    return console.log(`Si soy ${nombre} y que pasa`);
    }
    else{
    return console.log('No conozco a ese man');
    }
    },5000);
    return ``;
}

saludo2 = (saludo)=>{
    let minombre = 'Saul Mendoza';
    return saludo(minombre);
}
console.log(saludo2);
console.log(saludo);
setTimeout(saludo,10000);