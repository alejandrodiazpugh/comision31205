import React from 'react'
import { TiSocialInstagram, TiSocialFacebook, TiSocialTwitter } from "react-icons/ti"

export function Footer() {

    const footerStyle = {
        width: '100vw',
        paddingBlockStart: '3rem',
        backgroundColor: '#495057',
        color: 'white',
        display: "flex",
        justifyContent: 'space-between',
        paddingInline: '3rem'
    }
  return (
    <>
    <footer style={footerStyle}>
    <section>
            <h6>CONTACTANOS:</h6>
            <address>Ave. Siempreviva 742, Springfield, MO.</address>
            <p>Tel. (55) 555 5555 5555</p>
            
        </section>
        <section>
            <h6>SÍGUENOS EN REDES:</h6>
                <ul style={{listStyleType: 'none', display: 'flex', justifyContent: 'space-around'}}>
                    <li><TiSocialInstagram /></li>
                    <li><TiSocialFacebook /></li>
                    <li><TiSocialTwitter /></li>
                </ul>

        </section>
    </footer>
    </>
  )
}
