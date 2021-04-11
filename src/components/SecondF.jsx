import React from 'react'
import aste from '../imagenes/second.png'
import aste1 from '../imagenes/second1.png'
import aste2 from '../imagenes/second2.png'
import aste3 from '../imagenes/second3.jpg'
import '../css/Second.css'

const About = () => (
  <div id="viewport">
    <div className="about about-active">
      <div className="numeros">00002</div>
      <div className="container">
        <img src={aste1} alt="aste1" className="asteroid" />
        <img src={aste2} alt="aste2" className="asteroid-2" />
        <img src={aste3} alt="aste3" className="asteroid-3" />
        <h3>
          ALWAYS ON
          <span>
            BRANDON JOHNSON
          </span>
        </h3>
        <div className="always">
          <div className="asteroid-main">
            <img src={aste} alt="aste" />
          </div>
          <div className="line-steez line-steez1" />
          <div className="line-steez steez-2" />
          <div className="box" />
        </div>
        <div className="texto">
          <p>
            I am an Associate Professor in the &nbsp;
            <b href="https://www.eaps.purdule.edu/" target="_blank" rel="noreferrer">
              Department of Earth, Atmospheric, and Planetary Sciences
            </b>
            &nbsp; at Purdue University.
            My research is focused mainly on impact cratering, which is arguably the
            most pervasive geologic process in the solar system.
          </p>
          <br />
          <br />
          <br />
          <div className="flecha">
            ↓
          </div>
          <br />
        </div>
      </div>
    </div>
  </div>
)

const Second = () => (
  <About />
)

export default Second
