import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Avatar} from 'material-ui';
import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.user = props.user;
    }

    render() {
        return (
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">wtf</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem><Avatar src={this.user.avatarUrl} size={30}/></NavItem>
                        <NavItem>{this.user.name}</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;
