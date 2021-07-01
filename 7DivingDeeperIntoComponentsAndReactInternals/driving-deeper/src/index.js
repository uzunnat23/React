import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import './index.module.css';

ReactDOM.render(<App appTitle="Person Manager" />, document.getElementById('root'));
registerServiceWorker();
