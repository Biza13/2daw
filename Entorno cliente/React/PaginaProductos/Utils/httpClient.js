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

  export function modUnidades (obj, sumRest){
    let objMod = obj;
    let unidadesMod = obj.unidades + sumRest;
    objMod.unidades = unidadesMod
    return objMod
  }