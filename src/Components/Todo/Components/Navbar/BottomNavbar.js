import React, {Component} from 'react';
import './BottomNavbar.css';
import { NavLink } from 'react-router-dom'

const style = {
    borderTop: '1px solid black'
};

class BottomNavbar extends Component {
    render() {
        return (
            <div className="navbar fixed-bottom navbar-expand-lg" style={style}>
                <ul className="right navbar-nav">
                    <li><NavLink className="nav-link" exact to="/">Todo</NavLink></li>
                    <li><NavLink className="nav-link" to="/about">About</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default BottomNavbar;

// export default function BottomNavbar() {
//     return (
//         <div className="navbar fixed-bottom navbar-expand-lg" style={style}>
//             <ul className="right navbar-nav">
//                 <li><NavLink className="nav-link" exact to="/">Todo</NavLink></li>
//                 <li><NavLink className="nav-link" to="/about">About</NavLink></li>
//             </ul>
//         </div>
//     );
// }
