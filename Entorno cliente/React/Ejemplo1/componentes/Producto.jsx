export default function Producto ({obj}){
    return(
        <div>
            <img src={obj.image} style={{width: 200 + 'px'}}></img>
            <p>{obj.title}</p>
            <p>{obj.description}</p>
        </div>
    )
}