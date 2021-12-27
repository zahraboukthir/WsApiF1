import React from 'react'
import {  Navbar } from "react-bootstrap";
const Navbarr = () => {
    return (
        <div>
         <Navbar bg="light" variant="light">
       
       <Navbar.Brand href="#home">
           {/* <Link to="/">HOME</Link> */}
           Home
            </Navbar.Brand>   
            </Navbar>
        </div>
    )
}

export default Navbarr
