import React from 'react'
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Menu inverted>
            <Container>
                <Link to="/"> 
                    <Menu.Item name='Home' />
                </Link>
                <Link to="/products">
                    <Menu.Item name='Products' />
                </Link>

            </Container>
        </Menu>
    )
}

export default Navbar
