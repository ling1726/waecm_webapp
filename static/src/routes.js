import React from 'react'
import { Route, IndexRoute } from 'react-router';
import CounterContainer from './containers/CounterContainer';
import App from './components/App';
export default (
	<Route path="/" component={App}>
		<IndexRoute components={{main:CounterContainer}} />
	</Route>
);
