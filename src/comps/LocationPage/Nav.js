import React, {useEffect}from 'react';
import { Navbar,Button } from 'react-bootstrap';

const Nav = ({currentY,setLocPageOpen,open}) => {
    useEffect(() => {
        console.log("open location changed", open)
      }, [open]);

    const togglePage =()=>{
        setLocPageOpen(!open)
    }

    return (
        <Navbar  className="justify-content-between h-10 border bg-dark p-1" fixed="bottom" >
            <p>Y: {currentY} </p>
            <p>{window.innerWidth}</p>
            <Button
                onClick={togglePage}
                aria-controls="page-collapse"
                aria-expanded={open}
                className="bg-transparent btn-dark"
            >
                Locations
            </Button>
        </Navbar>
    );
};

export default Nav;