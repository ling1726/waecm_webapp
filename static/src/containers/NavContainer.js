import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import logo from '../../img/logo.png';
import Auth from '../components/Auth';

export class NavContainer extends Component{
    
    render(){ 
        const logoStyle = {maxHeight: '64px', padding: '15px'}
    
        return <nav className={"nav-extended"}>
                    <div className={"nav-wrapper"}>
                        <Link to="/" className="brand-logo">
                            <img src={logo} style={logoStyle}/>
                        </Link>
                    </div>
                                        
                </nav>
    }

}

function mapStateToProps(state){
    return{
    };
}

function mapDispatchToProps(dispatch){
    return{
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavContainer);
