export default function Parrafo ({className, codigo, children=""}){
    return(
        <p className={className}>{codigo + " " + children}</p>
    )
}