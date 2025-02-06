import { Routes, Route } from "react-router";
import Login from './Paginas/Login.jsx'

export default function MyApp (){
    return (
        <Routes>
            <Route path="/" element={<Login></Login>}></Route>
            <Route></Route>
        </Routes>
    )
}