import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header>
        <Navbar className="navbar-expand-sm" light>
          <Container>
            <NavbarBrand tag={Link} to="/"><div class="logo"></div></NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-inline-flex justify-content-around" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav">
                <NavItem>
                  <NavLink tag={Link} class="nav-item" className="text-dark" to="/">Экспедиции</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} class="nav-item"  className="text-dark" to="/employees">Сотрудники</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} class="nav-item"  className="text-dark" to="/reports">Отчеты</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} class="nav-item"  className="text-dark" to="/directories">Доп справочники</NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
