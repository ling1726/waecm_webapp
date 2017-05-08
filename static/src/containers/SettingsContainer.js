import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Settings from '../components/Settings'
import { bindActionCreators } from 'redux'
import * as UserActions from '../actions/user'
import * as AccountActions from '../actions/account'
import * as SettingsActions from '../actions/settings'




export class SettingsContainer extends Component{


    constructor(props){
        super(props);
        this.state = {
            showMessage: false
        };
    }

     componentDidMount(){
        const {userActions, accountActions} = this.props;
        userActions.getUserData();
        accountActions.getAccountData();


     }

    componentWillReceiveProps(nextProps){
        if(this.props.message != nextProps.message){
            this.state.showMessage = true
        }else{
            this.state.showMessage = false
        }
     }

     render(){
         // ?
         const {settingsActions,message}=this.props

         if(this.state.showMessage){
             Materialize.toast(message,4000);
         }

        return  <div>
                <h2>Change limit</h2>

                <Settings {...this.props}
                          changeLimit={settingsActions.changeLimitAndUpdateUserData}
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
        firstname: state.user.firstName,
        lastname: state.user.lastName,
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
