import React from 'react'
import { TiSocialInstagram, TiSocialFacebook, TiSocialTwitter } from "react-icons/ti"
import styles from './Footer.module.css'

export function Footer() {

  return (
    <>
    <footer className={styles.container}>
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
