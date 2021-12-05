import React from "react";
import { useState } from "react";

function ItemCount ({stock, initial}){
    const [contador, setContador] = useState(0)

    const Titulo = 'Cuantas unidades quieres?'

    const handlerClickSuma=()=>{
        if (setContador <= stock){
            setContador(contador+1)
        } else console.log('Estas sobrepasando el Stock del producto')
    }

    const handlerClickResta=()=>{
        if (setContador>= initial){
            setContador(contador-1)
        }else console.log('Tenes que seleccionar al menos 1 producto')
        
    }

    const handlerClickCarrito=()=>{
        console.log('agregaste '+contador+' productos al carrito')
    }

    return(
        <div>
            <p>{Titulo}</p>
            <p>{contador}</p>
            <button onClick={handlerClickSuma}>Click +</button>
            <button onClick={handlerClickResta}>Click -</button>
            <button onClick={handlerClickCarrito}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;