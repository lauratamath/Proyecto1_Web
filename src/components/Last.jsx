import React from 'react'
import '../css/Footer.css'

const Last = () => (
  <div id="viewport">
    <div className="footer">
      <div className="containerr">
        <div className="other">
          <div className="bra">Brandon C. Johnson</div>
          Associate Professor
        </div>
        <br />
        <div className="other">
          Department of Earth, Atmospheric, and Planetary Sciences
          <br />
          Purdue University
          <br />
          550 Stadium Mall Drive
          <br />
          West Lafayette, IN 47907
        </div>
        <br />
        <div className="lastt">bcjohnson@purdue.edu</div>
        <br />
        <div className="other">
          Site by &nbsp;
          <div className="lsa"> Elegant Segulls</div>
        </div>
        <br />
      </div>
    </div>
  </div>
)

const Footer = () => (
  <Last />
)

export default Footer
