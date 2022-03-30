import React, { Component } from 'react';
import { Button } from 'reactstrap';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <div class="datagrid"></div>
        <div class="buttons-container  d-flex justify-content-end">
          <Button id="">Подробнее</Button>
          <Button id="">Создать</Button>
        </div>
      </div>
    );
  }
}
