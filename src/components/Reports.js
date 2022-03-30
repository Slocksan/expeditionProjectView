import React, { Component } from 'react';
import { Button } from 'reactstrap';

export class Reports extends Component {
  static displayName = Reports.name;

  render () {
    return (
      <div className='reports-container'>
        <div className="buttons-container d-flex justify-content-around">
            <Button id="">Добыча</Button>
            <Button id="">Локации</Button>
        </div>
        <div className="buttons-container d-flex justify-content-around">
            <Button id="">Сотрудники</Button>
            <Button id="">Затраты</Button>
        </div>
      </div>
    );
  }
}
