//npm install XMLHTTPresquest
const XMLHttpRequest = require('xmlhttprequest');
const API = 'https://api.escuelajs.co/api/v1';
 
let datos = (urlApi,callback)=>{
 let http = new XMLHttpRequest();
 http.open('GET',urlApi,true);
 http.onreadystatechange = (event)=>{
    if(http.readyState ==4){
        if(xhtpp.status===200){
            callback(null,JSON.parse(http.responseText));
        }
    }
    else{
        const error=new Error(`Error en el ${urlApi}`);
        return callback(error,null);
    }
 }
 http.send();
}
