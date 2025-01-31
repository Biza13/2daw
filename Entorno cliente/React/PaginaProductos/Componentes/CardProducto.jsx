export default function CardProducto ({ obj }){

    return (
        <div>
            <img src={obj.image} alt="imgProducto" />
            <p>{obj.title}</p>
            <p>{obj.description}</p>
        </div>
    )
}