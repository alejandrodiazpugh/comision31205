import React from 'react'
import swal from 'sweetalert'

export const ItemListContainer = () => {
    // Esto en teoría debería ser configurado en el container y luego mostrado en otro componente layout, no? Lo dejo así por el desafío
    let saludos = ["Hola", "Buen día", "Buenas tardes", "Buenas noches"] //aqui solo estoy jugando con Date para entender como usarlo
    let horaActual = new Date().getHours();
    console.log(horaActual);
    const mensajePorHora = () => {
        console.log(horaActual)
        switch (true) { // con el switch, evalua el caso con el parametro, entonces debe ser true, y no horaActual
            case (horaActual <= 5):
                return saludos[0];
            case (horaActual <= 12):
                return saludos[1];
            case (horaActual <= 18):
                return saludos[2];
            case (horaActual <= 24):
                return saludos[3];
            default:
                return saludos[0];
        }
    }

    return (

    <div className='m-5'>
        <form action="">
            <label htmlFor="nombre">Nombre:</label>
            <input className='m-3' type="text" name="nombre" id="nombre" />
            <br />
            <input className='btn btn-secondary' type="button" value="Enviar" onClick={() => swal(mensajePorHora() + " " + document.querySelector("#nombre").value)} />
        </form>
    </div>
  )
 

}
