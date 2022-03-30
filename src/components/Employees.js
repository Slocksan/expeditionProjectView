import React, { Component } from 'react';
import { Button } from 'reactstrap';

export class Employees extends Component {
  static displayName = Employees.name;

  render () {
    return (
      <div>
        <div class="datagrid"></div>
        <div className="buttons-container d-flex justify-content-end">
          <Button id="">Подробнее</Button>
          <Button id="">Добавить</Button>
        </div>
      </div>
    );
  }
}
