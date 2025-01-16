import styles from './Ejercicio6.module.css'
import Parrafo from '../Parrafo'
import H1 from '../H1'
import H2 from '../H2'

export default function Ejercicio6(){
    return (
        <section className={styles.contenedora}>
            <div className={styles.cabecera}>
                <div className={styles.vacio}></div>
                <div className={styles.titulo}>
                    <Parrafo codigo="" className={styles.p}>Begoña</Parrafo>
                    <H1 className={styles.h1}>The best way to wireframe a website</H1>
                    <Parrafo codigo="" className={styles.p}>Read more</Parrafo>
                </div>
            </div>
            <div className={styles.articulos}>
                <article className={styles.article}>
                    <H2>Keys to writing copy that actually converts and sells users</H2>
                    <Parrafo codigo="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cumque natus velit enim at, perferendis, molestias possimus, voluptatem odit veritatis quia? Quo natus itaque dignissimos minus laborum eius excepturi beatae!</Parrafo>
                    <Parrafo codigo="">Read more</Parrafo>
                </article>
                <article className={styles.article}>
                    <H2>Keys to writing copi that actually converts and sells users</H2>
                    <Parrafo codigo="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci incidunt, perferendis unde tempore nesciunt in vero? Accusantium qui quod, possimus sint obcaecati commodi, illo minima in iste, fugiat porro id.</Parrafo>
                    <Parrafo codigo="">Read more</Parrafo>
                </article>
            </div>
        </section>
    )
}