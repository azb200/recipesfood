

import React, { Component } from 'react';

 class Foooter extends Component {
  
 render () {
     return (

<footer className="footer">
  <div className="Container-wrapper">
    <div className="mb-5 flex-center">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"  className="social">
        <i className="fa fa-facebook"></i>
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"  className="social">
        <i className="fa fa-twitter"></i>
      </a>
      <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"  className="social">
        <i className="fa fa-google-plus"></i>
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"  className="social">
        <i className="fa fa-linkedin"></i>
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"  className="social">
        <i className="fa fa-instagram"></i>
      </a>
    </div>
  </div>

  <div className="footer-copyright text-center py-3">
    <div className="Container-article">
      &copy; {new Date().getFullYear()} Copyright:{" "} HC WEBD All Right Reserved
    </div>
  </div>
</footer>
 
    )
  }
}

export default  Foooter;
