import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './Components/Test';
// import App from './App';
// import App from './Components/Calculator/Calculator'
// import App from './Components/Search/FilterableProductTable';
import App from './Components/Todo/App'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App date={new Date()} />, document.getElementById('root'));

serviceWorker.unregister();
