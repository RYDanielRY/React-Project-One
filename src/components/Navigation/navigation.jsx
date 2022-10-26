import React from "react";
import './navigation.css'
import {NavLink} from "react-router-dom";
import classes from './navigationTwo.module.css'

const Navigation = () => {

    const isActive = (navData) => {
        return navData.isActive ? classes.activeLink : classes.items;
    }

    return (
        <nav className="test">
            <div className="a">
                <NavLink to="/home" className={isActive}>Home</NavLink>
            </div>
            <div className="a">
                <NavLink to="/otchetOne" className={isActive}>Create Otchet</NavLink>
            </div>
            <div className="a">
                <NavLink to="/createPeople" className={isActive}>Create People</NavLink>
            </div>
        </nav>
    )
}

export default Navigation;