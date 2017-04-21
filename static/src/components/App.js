import React, { Component, PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import * as AuthActions from '../actions/auth'
import { connect } from 'react-redux';

export class App extends Component {

        render() {
        return <div>
                { this.props.nav }
                <div className={"container"}>{ this.props.main }</div></div>
    }
}

function mapDispatchToProps(dispatch){
    return{
    };
}

function mapStateToProps(state){
    return{
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
) (App);
