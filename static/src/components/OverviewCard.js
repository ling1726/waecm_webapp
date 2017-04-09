import React, {Component} from 'react';

export default class OverviewCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: 'erikatest@gmail.com',
            iban: 'AT83 1200 2453 2535 3522',
            bic: 'BKATUWW',
            balance: 2045.35,
            limit: 1100
        };
    }

    render(){
        return     <div>
            <div className="row">
                <div className="col s12">
                    <div className="card darken-1">
                        <div className="card-content">
                            <span className="card-title">{this.state.email}</span>
                            <div className="row">
                                <div className="col s12 subtitle">{this.state.email}</div>
                            </div>
                            <div className="row">
                                <div className="col s12 m10 l10"><span className="mini_header">IBAN</span></div>
                                <div className="col s12 m2 l2"><span className="mini_header">Balance</span></div>

                                <div className="col s12 m10 l10">{this.state.iban}</div><div className="col s12 m2 l2">{this.state.balance} €</div>

                            </div>
                            <div className="row">
                                <div className="col s12 m10 l10"><span className="mini_header">BIC</span></div>
                                <div className="col s12 m2 l2"><span className="mini_header">Limit</span></div>

                                <div className="col s12 m10 l10">{this.state.bic}</div><div className="col s12 m2 l2">{this.state.limit} €</div>
                            </div>

                        </div>
                        {/*<div className="card-action">*/}
                            {/*<a href="#">This is a link</a>*/}
                            {/*<a href="#">This is a link</a>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>

    }
}
