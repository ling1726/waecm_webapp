import React, {Component} from 'react';

export default class StatisticsFilter extends Component{
    constructor(props){
        super(props);

    }

    isMonthly(){
        return this.props.interval == 'monthly';
    }
    isDaily(){
        return this.props.interval == 'daily';
    }
    isYearly(){
        return this.props.interval == 'yearly';
    }

    handleChoice(){
        console.log('onchange!!')
    }

    render(){
        return <div>
            <div className="row">
                <div className="col s12">
                    <div className="card darken-1">
                        <div className="card-content">
                            <div className="col s2">
                                <input name="statsFilter" className="with-gap" type="radio" id="radio-daily" onClick={e => this.handleChoice} value="daily" />
                                <label htmlFor="radio-daily" >Daily</label>
                            </div>
                            <div className="col s2">
                                <input name="statsFilter" className="with-gap" type="radio" id="radio-monthly"  onClick={e => this.handleChoice} value="monthly" />
                                <label htmlFor="radio-monthly" >Monthly</label>
                            </div>
                            <div className="col s6">
                                <input name="statsFilter" className="with-gap" type="radio" id="radio-yearly" onClick={e => this.handleChoice} value="yearly" />
                                <label htmlFor="radio-yearly">Yearly</label>
                            </div>
                            <div className="col s2">
                                <input type="checkbox" className="filled-in" id="check-diff" />
                                <label htmlFor="check-diff">Difference</label>
                            </div>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }

}
