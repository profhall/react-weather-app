import React from 'react';
import { Navbar } from 'react-bootstrap';

const Nav = ({currentY}) => {
    return (
        <Navbar  className="justify-content-between h-10 border bg-dark p-1" fixed="bottom" >
            <p>Y: {currentY} </p>
            <p>{window.innerWidth}</p>
        </Navbar>
    );
};

export default Nav;