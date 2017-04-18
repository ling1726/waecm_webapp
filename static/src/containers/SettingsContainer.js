/**
 * Created by ubuntuvm on 18.04.17.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Settings from '../components/Settings'
import { bindActionCreators } from 'redux';
import * as UserActions from '../actions/user'
import * as AccountActions from '../actions/account'




export class SettingsContainer extends Component{

     componentDidMount(){
        const {userActions, accountActions} = this.props;
        userActions.getUserData();
        accountActions.getAccountData();
     }

     willReceiveProps(nextProps){

    }

     render(){

        return  <div>
                <h2>Change limit</h2>

                <Settings {...this.props}></Settings>


        </div>
    };
}

     SettingsContainer.propTypes = { email: PropTypes.string, iban: PropTypes.string, limit: PropTypes.number};

        function mapStateToProps(state){
            return{
                email: state.user.email,
                iban: state.account.iban,
                limit: state.user.limit
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
) (SettingsContainer);
