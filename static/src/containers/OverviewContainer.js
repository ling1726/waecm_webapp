import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import OverviewCard from '../components/OverviewCard'
import StatisticsFilter from '../components/StatisticsFilter'
import StatisticsGraph from '../components/StatisticsGraph'
import StatisticsTable from '../components/StatisticsTable'
import { bindActionCreators } from 'redux';
import * as UserActions from '../actions/user'
import * as AccountActions from '../actions/account'
import * as StatsActions from '../actions/stats'

export class OverviewContainer extends Component{

    componentDidMount(){
        const {userActions, accountActions, statsActions} = this.props;
        userActions.getUserData();
        accountActions.getAccountData();
        statsActions.getStatsForInterval(this.props.statsInterval)
    }

    willReceiveProps(nextProps){
        const {statsActions} = this.props;
        if(this.props.statsInterval !== nextProps.statsInterval){
            statsActions.getStatsForInterval(nextProps.statsInterval)
        }


    }

    render(){
        const {statsActions} = this.props;

        return  <div>
                <h2>Overview</h2>

                <OverviewCard {...this.props}></OverviewCard>
                <StatisticsFilter interval={this.props.statsInterval} changeInterval={statsActions.getStatsForInterval}
                                   setShowDiff={statsActions.setShowDifference}></StatisticsFilter>
                <StatisticsGraph interval={this.props.statsInterval} data={this.props.datapoints} diff={this.props.showDifference}></StatisticsGraph>
                <StatisticsTable data={this.props.datapoints} ></StatisticsTable>
        </div>
    };
}

OverviewContainer.propTypes = {
    fistName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    iban: PropTypes.string,
    bic: PropTypes.string,
    balance: PropTypes.number,
    limit: PropTypes.number,
    statsInterval: PropTypes.string,
    showDifference: PropTypes.bool,
};

function mapStateToProps(state){
    return{
        firstName: state.user.firstName,
        lastName: state.user.lastName,
        email: state.user.email,
        iban: state.account.iban,
        bic: state.account.bic,
        balance: state.user.balance,
        limit: state.user.limit,
        statsInterval: state.stats.interval,
        datapoints: state.stats.datapoints,
        showDifference: state.stats.showDifference,
    };
}

function mapDispatchToProps(dispatch){
    return{
        userActions: bindActionCreators(UserActions, dispatch),
        accountActions: bindActionCreators(AccountActions, dispatch),
        statsActions: bindActionCreators(StatsActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (OverviewContainer);
