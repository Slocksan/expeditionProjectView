import React, { Component } from 'react';
import './Footer.css';

export class Footer extends Component {
    render () {
    return (
      <footer>
        <div className="footer-container">
          <span className='footer-text'><a href='https://www.figma.com/file/Ww9VK223LjhJarWMWTpe8z/ITRvB'>Disigned</a> and produced by <a href='mailto:977005@gmail.com'>Vladimir Ponomarev</a></span>
        </div>
      </footer>
    );
  }
}
