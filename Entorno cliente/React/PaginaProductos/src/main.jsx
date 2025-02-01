//import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
/* import './index.css' */
//import App from "./App.jsx";
//import MyApp from "./MyApp.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Principal from '../Paginas/Principal'
import MyApp from "./MyApp";

createRoot(document.getElementById("root")).render(
  //para navegar entre paginas
  <BrowserRouter>
    <MyApp></MyApp>
  </BrowserRouter>
);
