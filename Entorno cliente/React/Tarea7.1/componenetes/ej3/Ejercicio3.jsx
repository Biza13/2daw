import styles from './Ejercicio3.module.css'
import H1 from '../H1'
import H2 from '../H2'
import Parrafo from '../Parrafo'
import Boton from '../Boton'

export default function Ejercicio3(){
    return(
        <section className={styles.contenedora}>
            <article className={styles.articulo}>
                <div className={styles.circulo}></div>
                <H1>Title</H1>
                <H2>Subtitle</H2>
                <Parrafo codigo="1">Feature</Parrafo>
                <Parrafo codigo="2">Feature</Parrafo>
                <Parrafo codigo="3">Feature</Parrafo>
                <Boton className={styles.boton}>Start now</Boton>
            </article>
        </section>
    )
}