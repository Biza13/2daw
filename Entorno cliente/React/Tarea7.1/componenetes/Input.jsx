export default function Input({type, placeholder, id, className}){
    return(
        <input type={type} id={id} className={className} placeholder={placeholder} />
    )
}