import { useEffect, useState } from "react";
import ItemCarrito from "./ItemCarrito";
import carro from "../json/carro.json";

export default function GridCarrito() {
  const [carrito, setCarrito] = useState(carro);

  return (
    <>
      {carrito.map((i) => {
        return (
          <ItemCarrito
            key={i.id}
            obj={i}
            carrito={carrito}
            setCarrito={setCarrito}
          ></ItemCarrito>
        );
      })}
    </>
  );
}
