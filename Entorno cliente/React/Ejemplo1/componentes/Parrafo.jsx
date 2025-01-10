export default function Parrafo ({codigo, children}){
    return(
        <p>{children + " " + codigo}</p>
    )
}