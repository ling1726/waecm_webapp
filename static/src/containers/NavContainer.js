import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Auth from '../components/Auth';
import * as AuthActions from '../actions/index';

export class NavContainer extends Component{
    
    render(){ 
        const {isLogged, authActions} = this.props;
    
        return <nav className={"nav-extended"}>
                    <div className={"nav-wrapper"}>
                    
                    </div>
                    <div className={"nav-content"}>
                        <Auth 
                        getAuthToken={authActions.getAuthToken}
                        isLogged={isLogged}
                        />
                    </div> 
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
