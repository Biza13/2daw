import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import Ejercicio1 from '../componenetes/ej1/Ejercicio1'
import Ejercicio2 from '../componenetes/ej2/Ejercicio2'
import Ejercicio3 from '../componenetes/ej3/Ejercicio3'
import Ejercicio4 from '../componenetes/ej4/Ejercicio4'
import Ejercicio5 from '../componenetes/ej5/Ejercicio5'
import Ejercicio6 from '../componenetes/ej6/Ejercicio6'
//import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <Ejercicio1 />
    <Ejercicio2 />
    <Ejercicio3 />
    <Ejercicio4 />
    <Ejercicio5 />
    <Ejercicio6 />
  </>
  ,
)
