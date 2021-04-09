import React from 'react'
import '../css/base.css'

const MainHeader = () => {
  return (
    <div className="main-header horizontal-container">
      <div className="centered-item">
      <i className="fas fa-compact-disc header-icon"></i>
      </div>
      <div className="centered-item">
        <h3>Open Sound Lib</h3>
      </div>
      <div className="centered-item">
      <i className="far fa-user header-icon"></i>
      </div>
    </div>
  )
}

export default MainHeader
