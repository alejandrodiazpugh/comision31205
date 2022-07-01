import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export function Error404() {
  return (
    <div style={{width: '100vw', height: '75vh', display:"flex", flexDirection: "column", justifyContent:"center", alignItems:"center", backgroundColor: "#dee0de"}}>
        <h1>Error 404</h1>
        <h2>La página que buscas no existe.</h2>
        <p>Aquí nos gusta romper con las reglas, pero te fuiste muy lejos.</p>
        <Link to={"/Inicio"}><Button size='lg' style={{backgroundColor: "#fcce80", border:"none", color: "#495057"}}>Vuelve a casa</Button></Link>
    </div>
  )
}
