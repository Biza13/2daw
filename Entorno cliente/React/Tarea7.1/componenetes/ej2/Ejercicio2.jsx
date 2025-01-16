import styles from './Ejercicio2.module.css'
import Parrafo from '../Parrafo.jsx'
import Boton from '../Boton.jsx'
import A from '../A.jsx'
import H1 from '../H1.jsx'

export default function Ejercicio2 (){
    return (
        <section className={styles.contenedora}>
            <nav className={styles.barraNav}>
                <Parrafo codigo="404">ERRORS</Parrafo>
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>About Us</li>
                    <li>Pricing</li>
                    <li>Contact Us</li>
                </ul>
                <A>SignIn</A>
                <Boton className={styles.boton}>SignUp</Boton>
            </nav>

            <article className={styles.articulo}>
                <H1>OOOPS!!</H1>
                <Parrafo className={styles.subTit} codigo="">Page not found</Parrafo>
                <Parrafo className={styles.p} codigo="">Lo sentimos, porfavor visite nuestra pagina para ver el error</Parrafo>
                <Boton  className={styles.boton}>Volver</Boton>
            </article>
        </section>
    )
}