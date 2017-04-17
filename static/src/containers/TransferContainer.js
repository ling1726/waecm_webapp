import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Transfer from '../components/Transfer'
import { bindActionCreators } from 'redux';
import * as UserActions from '../actions/user'
import * as AccountActions from '../actions/account'

export class TransferContainer extends Component{

    componentDidMount(){
        const {userActions, accountActions} = this.props;
        userActions.getUserData();
        accountActions.getAccountData();
    }

    willReceiveProps(nextProps){

    }

    render(){

        return  <div>
                <h2>Bank Transfer</h2>

                <Transfer {...this.props}></Transfer>


        </div>
    };
}

TransferContainer.propTypes = {
    email: PropTypes.string,
    iban: PropTypes.string
};

function mapStateToProps(state){
    return{
        email: state.user.email,
        iban: state.account.iban
    };
}

function mapDispatchToProps(dispatch){
    return{
       userActions: bindActionCreators(UserActions, dispatch),
       accountActions: bindActionCreators(AccountActions, dispatch),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (TransferContainer);
