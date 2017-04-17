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

    componentDidMount(){
        $(".button-collapse").sideNav();
    }

    render(){ 
        const logoStyle = {maxHeight: '64px', padding: '15px'}
        let loginLogoutButton = null;
        if(this.props.loggedIn){
            loginLogoutButton = <a onClick={ e => this.handleLogout(e)}>Logout</a>
        }else{
            loginLogoutButton = <a href="/"> Login</a>
        }

        return <nav className={"nav-extended"}>
                    <div className={"nav-wrapper"}>
                        <Link to="/overview" className="brand-logo">
                            <img src={logo} style={logoStyle}/>
                        </Link>
                        <a href="#" data-activates="mobile-nav" className="button-collapse"><i className="fa fa-bars"></i></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to="/overview">Overview</Link></li>
                            <li><Link to="/activity">Activity</Link></li>
                            <li><Link to="/transfer">New transfer</Link></li>
                            <li>{loginLogoutButton}</li>
                        </ul>
                        <ul className="side-nav" id="mobile-nav">
                            <li><Link to="/overview">Overview</Link></li>
                            <li><Link to="/activity">Activity</Link></li>
                            <li><Link to="/transfer">New transfer</Link></li>
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
