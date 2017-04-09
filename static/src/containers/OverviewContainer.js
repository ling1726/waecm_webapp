import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import OverviewCard from '../components/OverviewCard'
import { bindActionCreators } from 'redux';
import * as UserActions from '../actions/user'

export class OverviewContainer extends Component{

    componentDidMount(){
        const {userActions} = this.props;
        userActions.getUserData();
    }

    render(){

        return  <div>
                <h2>Overview</h2>

                <OverviewCard></OverviewCard>

        </div>
    };
}

OverviewContainer.propTypes = {
    email: PropTypes.string,
    iban: PropTypes.string,
    bic: PropTypes.string,
    balance: PropTypes.number,
    limit: PropTypes.number
}

function mapStateToProps(state){
    return{
        email: state.user.email,
        iban: state.user.iban,
        bic: state.user.bic,
        balance: state.user.balance,
        limit: state.user.limit,

    };
}

function mapDispatchToProps(dispatch){
    return{
        userActions: bindActionCreators(UserActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (OverviewContainer);
