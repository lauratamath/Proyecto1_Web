import React from 'react'
import '../css/Hydroco.css'
import grafica from '../imagenes/hydrocode-graph.svg'

const Hydro = () => (
  <div id="viewport">
    <div className="hydrocode hydrocode-active">
      <div className="numeros">00003</div>
      <div className="container">
        <div className="row">
          <div className="column-2">
            <h2>Hydrocode</h2>
            <p>
              In my group we use numerical models called hydrocodes
              to study the formation of impact craters and impact processes.
              Currently we are simulating the formation of large basins
              throughout the solar system.
            </p>
            <div className="impact">
              <div className="play">
                <br />
                <br />
                ‣
              </div>
              &nbsp; IMPACT DEMO
              <p> &nbsp; Play Video</p>
            </div>
          </div>
          <div className="column-2">
            <img src={grafica} alt="grafica" className="graph" />
            <div className="graph-line" />
            <div className="graph-line line-2" />
            <div className="graph-line line-3" />
            <div className="graph-line line-4" />
          </div>
        </div>
        <div className="alwayson">
          <div className="on">ON</div>
          <div className="span">|</div>
          <div className="off">OFF</div>
        </div>
      </div>
    </div>
  </div>
)

const Third = () => (
  <Hydro />
)

export default Third
