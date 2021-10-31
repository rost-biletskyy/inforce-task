import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './configure-store';

import App from './App';

const Home = () => (
	<Provider store={store}>
		<App/>
	</Provider>
);

ReactDOM.render(<Home />, document.getElementById('root'));
