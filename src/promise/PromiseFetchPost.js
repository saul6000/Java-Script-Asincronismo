import fetch  from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

const FecthPostData = (urlApi,data)=>{
    const response = fetch(urlApi,{
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    });
    return response;
}

const data = {
    "title": "HolaBbb",
    "price": 123123,
    "description": "A description",
    "categoryId": 1,
    "images": [
      "https://placeimg.com/640/480/any"
    ]
  }

  const FecthPutData = (urlApi,data)=>{
    const response = fetch(urlApi,{
        method: 'PUT',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    });
    return response;
}




const FecthDeleteData = (urlApi,data)=>{
    const response = fetch(urlApi,{
        method: 'DELETE',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type':'application/json'
        },
    });
    return response;
}

const id = '232'
/*FecthDeleteData(`${API}/products/${id}?` )
.then(response => response.json())
.then(data=>console.log(data));*/
/*FecthPutData(`${API}/products/`,data)
.then(response => response.json())
.then(data=>console.log(data));*/
 /* FecthPostData(`${API}/products`,data)
  .then(response => response.json())
  .then(data=>console.log(data));*/
