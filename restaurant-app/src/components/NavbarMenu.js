import React, { Component } from 'react';

import { Navbar,Nav} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faList,faPlus,faUser,faSearch } from '@fortawesome/free-solid-svg-icons'

class NavbarMenu extends Component {
    render() {
        return (
            <div>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/"><FontAwesomeIcon icon={faHome} /> Home</Nav.Link>
                    <Nav.Link href="/create"><FontAwesomeIcon icon={faPlus} /> Create</Nav.Link>
                    <Nav.Link href="/list"><FontAwesomeIcon icon={faList} /> List</Nav.Link>
                    <Nav.Link href="/search"><FontAwesomeIcon icon={faSearch} /> Search</Nav.Link>
                    {
                        localStorage.getItem('login')?
                        <Nav.Link href="/logout"><FontAwesomeIcon icon={faUser} /> Logout</Nav.Link>
                        :
                        <Nav.Link href="/login"><FontAwesomeIcon icon={faUser} /> Login</Nav.Link>
                    }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        );
    }
}

export default NavbarMenu;