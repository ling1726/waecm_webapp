import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import OverviewCard from '../components/OverviewCard'
import { bindActionCreators } from 'redux';
import * as UserActions from '../actions/user'
import * as AccountActions from '../actions/account'

export class OverviewContainer extends Component{

    componentDidMount(){
        const {userActions, accountActions} = this.props;
        userActions.getUserData();
        accountActions.getAccountData();
    }

    willReceiveProps(nextProps){

    }

    render(){

        return  <div>
                <h2>Overview</h2>

                <OverviewCard {...this.props}></OverviewCard>

        </div>
    };
}

OverviewContainer.propTypes = {
    email: PropTypes.string,
    iban: PropTypes.string,
    bic: PropTypes.string,
    balance: PropTypes.number,
    limit: PropTypes.number
};

function mapStateToProps(state){
    return{
        email: state.user.email,
        iban: state.account.iban,
        bic: state.account.bic,
        balance: state.user.balance,
        limit: state.user.limit,

    };
}

function mapDispatchToProps(dispatch){
    return{
        userActions: bindActionCreators(UserActions, dispatch),
        accountActions: bindActionCreators(AccountActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (OverviewContainer);
