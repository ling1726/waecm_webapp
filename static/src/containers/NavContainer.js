import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Auth from '../components/Auth';
import * as AuthActions from '../actions/index';

export class NavContainer extends Component{
    
    render(){ debugger
        const {isLogged, authActions} = this.props;
    
        return <nav>
                  <Auth 
                    getAuthToken={authActions.getAuthToken}
                    isLogged={isLogged}
                    /> 
                </nav>
    }

}

function mapStateToProps(state){
    return{
        isLogged: state.auth.isLogged
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
)(NavContainer);
