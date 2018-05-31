import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'mobx-react';
import store from './store';


ReactDOM.render(<Provider {...store}><App /></Provider>
    ,
    document.getElementById('root'));
registerServiceWorker();
