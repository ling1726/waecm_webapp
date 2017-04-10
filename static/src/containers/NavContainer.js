import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import logo from '../../img/logo.png';
import * as AuthActions from '../actions/auth';

export class NavContainer extends Component{


    handleLogout(){
        console.log('logging user out');
        this.props.authActions.logout();
    }

    render(){ 
        const logoStyle = {maxHeight: '64px', padding: '15px'}
        let loginLogoutButton = null;
        if(this.props.loggedIn){
            loginLogoutButton = <a onClick={ e => this.handleLogout(e)}>Logout</a>
        }else{
            loginLogoutButton = <a href="/">Login</a>
        }

        return <nav className={"nav-extended"}>
                    <div className={"nav-wrapper"}>
                        <Link to="/" className="brand-logo">
                            <img src={logo} style={logoStyle}/>
                        </Link>
                        <ul id="nav-mobile" className="right">
                            <li><a href="/overview">Overview</a></li>
                            <li><a href="#">Transactions</a></li>
                            <li><a href="#">New transfer</a></li>
                            <li>{loginLogoutButton}</li>
                        </ul>
                    </div>
                                        
                </nav>
    }

}

NavContainer.propTypes = {
    loggedIn: PropTypes.bool
}

function mapStateToProps(state){
    return{
        loggedIn: state.auth.isLogged
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
