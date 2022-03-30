import React, { Component } from 'react';
import { Collapse, Container} from 'reactstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

export class Footer extends Component {
  static displayName = Footer.name;

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
