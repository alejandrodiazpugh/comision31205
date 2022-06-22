import React from 'react'
import { BarLoader } from "react-spinners"
import { css } from "@emotion/react"

export function Loading() {
    const styles = {
        width: "100vw",
        marginBlock:"35vh",
        textAlign: "center"
    }
    const override = css`
        display: block;
        margin: 0 auto;
        width: 20vw;
    `

  return (
    <div style={ styles }>
        <h3>Cargando...</h3>
        <BarLoader color= "#fcce80" css = { override } size = { 150 } />
    </div>
  )
}
