import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
     <div className="horizontal-container">
        <div className="footer-fill"/>
        <div className="footer-content-container">
          <div className="vertical-container">
          <h5 id="footer-title" className="footer-item">Open Sound Lib</h5>
          <div>
            <div className="horizontal-container">
              <div>Find sounds</div>
              <div>Upload</div>
              <div>About</div>
              <div>Source code</div>
            </div>
          </div> 
          </div>  
      </div>
    <div className="footer-fill"/>
    <div className="footer-fill"/>
    <div className="footer-fill"/>
    </div>
    </div>
  )
}

export default Footer;