import React, {Component} from 'react';
import './BottomNavbar.css';
import { NavLink } from 'react-router-dom'

class BottomNavbar extends Component {
    render() {
        return (
            <div className="navbar navbar-expand-lg flex-row-reverse">
                <ul className="navbar-nav">
                    <li><NavLink className="nav-link" exact to="/">Todo</NavLink></li>
                    <li><NavLink className="nav-link" to="/about">About</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default BottomNavbar;
