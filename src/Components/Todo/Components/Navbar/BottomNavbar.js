import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import BottomNavigation from '@material-ui/core/BottomNavigation';
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import Icon from '@material-ui/core/Icon';
import './BottomNavbar.css';
import { NavLink } from 'react-router-dom'

// const useStyles = makeStyles({
//     root: {
//         width: 200
//     },
// });

const style = {
    borderTop: '1px solid black'
}

export default function BottomNavbar() {
    // const classes = useStyles();
    // const [value, setValue] = React.useState('recents');

    // function handleChange(event, newValue) {
    //     setValue(newValue);
    // }

    return (
        <div className="navbar fixed-bottom navbar-expand-lg" style={style}>
            <ul className="right navbar-nav">
                <li><NavLink className="nav-link" exact to="/">Todo</NavLink></li>
                <li><NavLink className="nav-link" to="/about">About</NavLink></li>
            </ul>
        </div>
        // <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        // <BottomNavigationAction to='/todo' label="todo" value="todo" icon={<Icon>alarm_on</Icon>} />
        // <BottomNavigationAction label="About" value="about" icon={<Icon>person</Icon>} />
        // </BottomNavigation>
    );
}
