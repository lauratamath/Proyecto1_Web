import React from 'react'
import logo from '../imagenes/logo.svg'
import '../css/Header.css'

const Head = () => (
  <div id="viwport">
    <div className="header">
      <div className="numeros">00001</div>
      <div className="linea" />
      <div className="container">
        <div className="sub">Planetary Scientist</div>
        <div className="logoo">
          <a href>
            <img src={logo} alt="logo" className="logo" />
          </a>
        </div>
        <h1>
          BRAND-
          <br />
          ON
          <br />
          JOHNS-
          <br />
          ON
        </h1>
      </div>
    </div>
  </div>
)

const Primer = () => (
  <Head />
)

export default Primer
