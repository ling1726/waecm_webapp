import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import Auth from '../components/Auth'
import * as AuthActions from '../actions/auth';

export class AuthContainer extends Component{

    render(){ 
        const {authActions} = this.props

        return  <div>
                <h2>Welcome.</h2>
                <h5>Please log in to access online banking services</h5><br/>
                <Auth 
                    getAuthToken={authActions.getAuthToken}
                />
                </div>
    };
}

function mapStateToProps(state){
    return{
    };
}

function mapDispatchToProps(dispatch){
    return{
        authActions: bindActionCreators(AuthActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (AuthContainer);
