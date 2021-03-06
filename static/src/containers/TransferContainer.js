import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Transfer from '../components/Transfer'
import { bindActionCreators } from 'redux';
import * as UserActions from '../actions/user'
import * as AccountActions from '../actions/account'
import * as TransferActions from '../actions/transfer'

export class TransferContainer extends Component{

    componentDidMount(){
        const {userActions, accountActions,transferActions} = this.props;
        userActions.getUserData();
        accountActions.getAccountData();
        transferActions.getTags();
    }

    willReceiveProps(nextProps){

    }

    render(){ 
        const {transferActions, message} = this.props;

        if(message !== null){
            Materialize.toast(message, 4000);
            transferActions.getTransfer();
        }

        return  <div>
                <h2>Bank Transfer</h2>

                <Transfer 
                    {...this.props}
                    createTransfer={transferActions.createTransfer}                
                    getTAN={transferActions.getTAN}                
                />
        </div>
    };
}

TransferContainer.propTypes = {
    lastname: PropTypes.string,
    firstname: PropTypes.string,
    iban: PropTypes.string,
    message: PropTypes.string,
    tags: PropTypes.array
};

function mapStateToProps(state){
    return{
        lastname: state.user.lastName,
        firstname: state.user.firstName,
        iban: state.account.iban,
        message: state.transfer.message,
        tags: state.transfer.tags
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
