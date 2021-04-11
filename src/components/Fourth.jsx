import React from 'react'
import '../css/Interest.css'
import persona from '../imagenes/profile.jpg'

const Interest = () => (
  <div id="viewport">
    <div className="interests interests-active">
      <div className="numero">00004</div>
      <div className="container">
        <div className="line-steez" />
        <div className="profile">
          <div className="google">
            <img src={persona} alt="profileImg" className="profileImg" />
            <br />
            Google Scholar Profile
          </div>
        </div>
        <div className="desc">
          Other interest include the formation of distal impact ejecta; impact jetting; spallation
          the impact origin of chondrules; solar system dynamics; impacts in extra-solar systems;
          the reduction of friction during long run-out landslides and earthquakes; the breakup of
          comets; crater erasure; understanding the lunar gravity field; and other geophysical
          problems that pique my curiosity.
        </div>
        <div className="scrollI">
          ↓
        </div>
      </div>
    </div>
  </div>
)

const Fourth = () => (
  <Interest />
)

export default Fourth
