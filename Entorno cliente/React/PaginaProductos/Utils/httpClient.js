export function getFetch(url){
    return fetch(url)
            .then(resp=>resp.json())
}

export function buscar (array, filtro){
    let matches = [];
    
    array.forEach(element => {
      if (element.title.toLowerCase().trim().includes(filtro.toLowerCase().trim())){
        matches.push(element)
      }
    });
  
    return matches;
}

export function modUnidades(array, obj, operacion) {

  //hacemos es return del array modificado que nos devolvera el filter
  return array.map(item => {
    // Modificamos el objeto del que el cliente quiera aumentar o quitar unidades
    if (item.id === obj.id) {
      //devolvemos el item modificado, si la operacion es suma, pues simara uno a las unidades, si no es suma restara uno
      //return { ...item, unidades: operacion === 'suma' ? item.unidades + 1 : item.unidades - 1};
      let itemUnidades = operacion === 'suma' ? item.unidades + 1 : item.unidades - 1
      if (itemUnidades == 0){
        return null
      }
      return { ...item, unidades: itemUnidades };
    }
    // Si el objeto no es el que buscamos lo devolvemos sin tocar
    return item; 
  })
  // Al resultado del map le hacemos un filter el cual devolvera un array con solo los items que no sean null
  .filter(item => item !== null);
}

export function validar (array, obj){
  return array.find((usu) => usu.username == obj.username && usu.password == obj.password)
}