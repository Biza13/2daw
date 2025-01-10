import styles from './Ejercicio1.module.css'
import Parrafo from './Parrafo'
import H1 from './H1'
import Boton from './Boton'

export default function Ejercicio1 (){
    return(
        <div className={styles.todo}>
            <H1>USERNAME</H1>
            <hr className={styles.hr} />
            <ul>
                <li><Parrafo codigo="1">Lowecase character</Parrafo></li>
                <li><Parrafo codigo="1">Uppercase character</Parrafo></li>
                <li><Parrafo codigo="6">Minimum characters</Parrafo></li>
            </ul>
            <Boton>Submit</Boton>
        </div>
    )
}