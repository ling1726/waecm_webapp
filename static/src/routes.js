import React from 'react'
import { Route, IndexRoute } from 'react-router';
import AuthContainer from './containers/AuthContainer';
import NavContainer from './containers/NavContainer';
import OverviewContainer from './containers/OverviewContainer';
import ActivityContainer from './containers/ActivityContainer';
import SettingsContainer from './containers/SettingsContainer'
import App from './components/App';



export default (
	<Route path="/" component={App}>
		<IndexRoute components={{main:AuthContainer, nav:NavContainer}} />
		<Route path="/overview" components={{main:OverviewContainer, nav:NavContainer}}/>
        <Route path="/activity" components={{main:ActivityContainer, nav:NavContainer}}/>
		<Route path="/Settings" component={{main:SettingsContainer, nav:NavContainer}}/>
	</Route>
);
