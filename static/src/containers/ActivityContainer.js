import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import OverviewCard from '../components/OverviewCard'
import ActivityList from '../components/ActivityList';
import { bindActionCreators } from 'redux';
import * as UserActions from '../actions/user'
import * as AccountActions from '../actions/account'

export class ActivityContainer extends Component{

    componentDidMount(){
        const {userActions, accountActions} = this.props;
        userActions.getUserData();
        accountActions.getAccountData(); 
        accountActions.getActivity();
    }

    willReceiveProps(nextProps){

    }

    render(){
        const {email, iban, bic, balance, limit, transfers} = this.props

        return  <div>

                <OverviewCard 
                    email={email}
                    iban={iban}
                    bic={bic}
                    balance={balance}
                    limit={limit}
                />
                <ActivityList transfers={transfers}/>
        </div>
    };
}

ActivityContainer.propTypes = {
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
        transfers: state.account.transfers

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
) (ActivityContainer);
