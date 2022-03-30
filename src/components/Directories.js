import React, { Component } from 'react';
import { Button } from 'reactstrap';

export class Directories extends Component {
  static displayName = Directories.name;

  render () {
    return (
      <div>
        <div className='d-flex justify-content-around buttons-container'>
            <Button id="">Локации</Button>
            <Button id="">Должности</Button>
        </div>
      </div>
    );
  }
}
