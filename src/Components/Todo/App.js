import React, { Component } from 'react';
import Todo from './Components/Todo/Todo';
import About from './Components/About/About'
import BottomNavbar from './Components/Navbar/BottomNavbar'
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route exact path="/" component={Todo} />
                    <Route path="/about" component={About} />
                    {/*<BottomNavbar />*/}
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
