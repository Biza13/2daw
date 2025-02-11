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