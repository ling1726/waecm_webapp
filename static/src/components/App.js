import React, { Component, PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import * as AuthActions from '../actions/auth'
import { connect } from 'react-redux';

export class App extends Component {

        componentDidMount(){
            this.props.authActions.checkAuthToken();
        }

        render() {
        return <div>
                { this.props.nav }
                <div className={"container"}>{ this.props.main }</div></div>
    }
}

function mapDispatchToProps(dispatch){
    return{
        authActions: bindActionCreators(AuthActions, dispatch)
    };
}

function mapStateToProps(state){
    return{
        isLogged: state.auth.isLogged
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
) (App);
