import React from 'react';
import {NavLink } from 'react-router-dom';
const Navbar = ()=>{
    return (
        <>
        <div className="main_style">
        <NavLink exact activeClassName="active_class " to="/">About us</NavLink>
        <br/>
        <NavLink exact activeClassName="active_class" to="/contact">Contact</NavLink>
        <br/>
        <NavLink exact activeClassName="active_class" to ="/search">Search</NavLink>
        <br/>
        <NavLink  exact activeClassName="active_class" to ="/contact/Services">Services</NavLink>
        <br/>
        <NavLink  exact activeClassName="active_class" to ="/user/">Users</NavLink>
        </div>
        </>
    )

}

export default Navbar;
