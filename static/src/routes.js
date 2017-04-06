import React from 'react'
import { Route, IndexRoute } from 'react-router';
import AuthContainer from './containers/AuthContainer';
import NavContainer from './containers/NavContainer';
import App from './components/App';



export default (
	<Route path="/" component={App}>
		<IndexRoute components={{main:AuthContainer, nav:NavContainer}} />
	</Route>
);
