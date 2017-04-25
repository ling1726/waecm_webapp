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
                            <span className="card-title">{this.props.firstName} {this.props.lastName}</span>
                            <div className="row">
                                <div className="col s12 subtitle">{this.props.email}</div>
                            </div>

                            <div>
                                <h4>Balance: <span className={color}> {this.props.balance} €</span></h4>
                            </div>
                            <div className="row">
                                <div className="col s3 m3 l3">
                                    <span className="mini_header">Limit  </span>
                                    {this.props.limit} €
                                </div>
                             
                                <div className="col s3 m3 l3">
                                    <span className="mini_header">Remaining Amount  </span>
                                    {this.props.remaining} €
                                </div>
                                
                                <div className="col s3 m3 l3 right">
                                    <span className="mini_header">BIC  </span>
                                    {this.props.bic}
                                </div>
                                <div className="col s3 m3 l3 right">
                                    <span className="mini_header">IBAN  </span>
                                    {this.props.iban}
                                </div>
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
