import React from 'react'
import '../css/Grail.css'
import aros from '../imagenes/grail-steez-ring.svg'
import puntos from '../imagenes/grail-circle.svg'
import planeta from '../imagenes/grail-world.png'
import logo from '../imagenes/logo.svg'

const Grail = () => (
  <div id="viewport">
    <div className="grail">
      <div className="numeros">00006</div>
      <div className="container">
        <div className="onn">
          <div className="brand">BRAND-</div>
          ON
        </div>
        <div className="planet">
          <img src={aros} alt="world-steez-ring" className="world-steez-ring" />
          <img src={puntos} alt="points" className="world-steez" />
          <img src={planeta} alt="world" className="world" />
        </div>
        <div className="txt">
          <div className="grailtext">GRAIL</div>
          <div className="so">
            <br />
            I was lucky enough to see the launch of the NASA’s
            GRAIL mission and have presented at several team meetings.
            One of my driving goals is to be an investigator on a successful space mission.
          </div>
        </div>
        <div className="cv">
          <div className="down">Download Cv</div>
        </div>
        <div className="scrol">
          <div className="flecha">↓</div>
        </div>
        <div className="logo2">
          <img src={logo} alt="logo" className="logo" />
        </div>
      </div>
    </div>
  </div>
)

const Sixth = () => (
  <Grail />
)

export default Sixth
