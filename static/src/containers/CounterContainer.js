import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import * as CounterActions from '../actions/index'

export class CounterContainer extends Component{
    
    componentDidMount(){
        const {counterActions} = this.props;
        counterActions.getCurrent();
    }    

    handleIncrement = () => {
        const {value, counterActions} = this.props
        counterActions.increment(value)
    }
    
    render(){ 
        const {value, counterActions} = this.props

        return <div className={"center-align"}>
                <h2>The counter is currently at:</h2>
                <h1>{value}</h1>
                <button type="button" className={"btn waves-effect waves-light"} onClick={this.handleIncrement}>increment</button> 
                </div>
    };
}

CounterContainer.propTypes = {
    value: PropTypes.number
}

function mapStateToProps(state){
    return{
        value: state.counter.value
    };
}

function mapDispatchToProps(dispatch){
    return{
        counterActions: bindActionCreators(CounterActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (CounterContainer);
