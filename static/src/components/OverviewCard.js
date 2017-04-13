import React, {Component} from 'react';

export default class OverviewCard extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let color = "green-text text-accent-4";
        if(this.props.balance <= 0) color = "red-text text-accent-4" 
        
        return     <div>
            <div className="row">
                <div className="col s12">
                    <div className="card darken-1">
                        <div className="card-content">
                            <span className="card-title">{this.props.email}</span>
                            <div className="row">
                                <div className="col s12 subtitle">{this.props.email}</div>
                            </div>

                            <div>
                                <h5>Balance: <span className={color}> {this.props.balance} €</span></h5>
                            </div>
                            <div className="row">
                                <div className="col s12 m10 l10"><span className="mini_header">IBAN</span></div>

                                <div className="col s12 m10 l10">{this.props.iban}</div>

                            </div>
                            <div className="row">
                                <div className="col s12 m10 l10"><span className="mini_header">BIC</span></div>
                                <div className="col s12 m2 l2"><span className="mini_header">Limit</span></div>

                                <div className="col s12 m10 l10">{this.props.bic}</div><div className="col s12 m2 l2">{this.props.limit} €</div>
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
