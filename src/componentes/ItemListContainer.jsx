import React from 'react'
import swal from 'sweetalert'

export default function ItemListContainer(prop) {
    // Esto en teoría debería ser configurado en el container y luego mostrado en otro componente layout, no? Lo dejo así por el desafío
    let saludos = ["Hola", "Buen día", "Buenas tardes", "Buenas noches"]

    return (

    <div className='m-5'>
        <form action="">
            <label htmlFor="nombre">Nombre:</label>
            <input className='m-3' type="text" name="nombre" id="nombre" />
            <br />
            <input className='btn btn-secondary' type="button" value="Enviar" onClick={() => swal(saludos[1] + " " + document.querySelector("#nombre").value)} />
        </form>
    </div>
  )
 

}
