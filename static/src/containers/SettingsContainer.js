import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Settings from '../components/Settings'
import { bindActionCreators } from 'redux'
import * as UserActions from '../actions/user'
import * as AccountActions from '../actions/account'
import * as SettingsActions from '../actions/settings'




export class SettingsContainer extends Component{

     componentDidMount(){
        const {userActions, accountActions} = this.props;
        userActions.getUserData();
        accountActions.getAccountData();
     }

     willReceiveProps(nextProps){

    }

     render(){
         // ?
         const {settingsActions,message}=this.props

         if(message!==null){
             Materialize.toast(message,4000);
         }

        return  <div>
                <h2>Change limit</h2>

                <Settings {...this.props}
                          changeLimit={settingsActions.changeLimit}
                />


        </div>
    };
}

     SettingsContainer.propTypes = {
         firstname: PropTypes.string,
         lastname:  PropTypes.string,
         iban: PropTypes.string,
         limit: PropTypes.number,
         message: PropTypes.string};

function mapStateToProps(state){
    return{
        firstname: state.user.firstname,
        lastname: state.user.lastname,
        iban: state.account.iban,
        limit: state.user.limit,
        message: state.settings.message
 };
}

function mapDispatchToProps(dispatch){
    return{
       userActions: bindActionCreators(UserActions, dispatch),
       accountActions: bindActionCreators(AccountActions, dispatch),
       settingsActions: bindActionCreators(SettingsActions,dispatch)

    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (SettingsContainer);
