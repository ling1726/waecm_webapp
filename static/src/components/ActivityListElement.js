import React, {Component} from 'react';

export default class ActivityListElement extends Component{
    constructor(props){
        super(props);
    }

    render(){

        let amountDisplay = null
        if(this.props.type === 'out'){
            amountDisplay = <span className="secondary-content red-text text- accent-4" >-{this.props.amount} €</span>
        }else{
            amountDisplay = <span className="secondary-content green-text text-accent-4" >+{this.props.amount} €</span>
        }
         
        return     <li className="collection-item">
            <div>
                <h5 className="title">{this.props.externalParty}</h5>
                {amountDisplay}
            </div>
            <div>
                <span>{this.props.date}</span>
            </div>
        </li>

    }
}   
