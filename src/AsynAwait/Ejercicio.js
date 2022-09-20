export async function runCode(url) {
    //const url = 'https://api.escuelajs.co/api/v1/categories';
      const respuesta = await fetch(url);
      const datos = respuesta.json();
      return datos;
    
  }
  (async () => {
    try {
      const datos = await runCode(`https://api.escuelajs.co/api/v1/categories`)
      console.log(datos);
      return datos;
    } catch (error) {
      console.log(error);
    }
  })();