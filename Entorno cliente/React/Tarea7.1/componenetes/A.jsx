export default function A({className, children, href="#"}){
    return(
        <a href={href} className={className}>{children}</a>
    )
}