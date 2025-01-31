import styles from '../Paginas/Principal.module.css'

export default function Navegacion (){

    return (
        <nav className={styles.nav}>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Ofertas</a></li>
            </ul>
        </nav>
    )
}