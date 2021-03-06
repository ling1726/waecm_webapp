import React, {Component} from 'react';

export default class StatisticsFilter extends Component{
    constructor(props){
        super(props);
    }


    handleChoice() {
        if (document.getElementById('radio-daily').checked) {
            this.props.changeInterval('daily');
        } else if (document.getElementById('radio-monthly').checked) {
            this.props.changeInterval('monthly');
        } else if (document.getElementById('radio-yearly').checked) {
            this.props.changeInterval('yearly');
        }
    }

    handleCheckboxChange(){
        this.props.setShowDiff(document.getElementById('check-diff').checked);
    }

    componentDidMount(){
            document.querySelector('#radio-daily').addEventListener('change', this.handleChoice.bind(this));
            document.querySelector('#radio-monthly').addEventListener('change', this.handleChoice.bind(this));
            document.querySelector('#radio-yearly').addEventListener('change', this.handleChoice.bind(this));

            document.querySelector('#check-diff').addEventListener('change', this.handleCheckboxChange.bind(this));

            document.querySelector('#radio-' + this.props.interval).checked = true;
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
