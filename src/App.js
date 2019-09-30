import React, { Component } from 'react';
import Todo from './Components/Todo/Components/Todo/Todo';
import About from './Components/Todo/Components/About/About'
import BottomNavbar from './Components/Todo/Components/Navbar/BottomNavbar'
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <BottomNavbar />
                    <div className="m_body">
                        <Route exact path="/" component={Todo} />
                        <Route path="/about" component={About} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
