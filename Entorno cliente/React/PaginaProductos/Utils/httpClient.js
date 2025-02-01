export function getFetch(url){
    fetch(url)
    .then(resp=>resp.json())
}