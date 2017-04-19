import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Transfer from '../components/Transfer'
import { bindActionCreators } from 'redux';
import * as UserActions from '../actions/user'
import * as AccountActions from '../actions/account'
import * as TransferActions from '../actions/transfer'

export class TransferContainer extends Component{

    componentDidMount(){
        const {userActions, accountActions} = this.props;
        userActions.getUserData();
        accountActions.getAccountData();
    }

    willReceiveProps(nextProps){

    }

    render(){
        const {transferActions, message} = this.props;

        if(message !== null){
            Materialize.toast(message, 4000);
        }

        return  <div>
                <h2>Bank Transfer</h2>

                <Transfer 
                    {...this.props}
                    createTransfer={transferActions.createTransfer}                
                />
        </div>
    };
}

TransferContainer.propTypes = {
    email: PropTypes.string,
    iban: PropTypes.string,
    message: PropTypes.string
};

function mapStateToProps(state){
    return{
        email: state.user.email,
        iban: state.account.iban,
        message: state.transfer.message
    };
}

function mapDispatchToProps(dispatch){
    return{
       userActions: bindActionCreators(UserActions, dispatch),
       accountActions: bindActionCreators(AccountActions, dispatch),
       transferActions: bindActionCreators(TransferActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (TransferContainer);
