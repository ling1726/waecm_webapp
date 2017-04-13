import React, {Component} from 'react';
import TagList from './TagList';

export default class ActivityListElement extends Component{
    constructor(props){
        super(props);
    }

    render(){

        let amountDisplay = null
        if(this.props.type === 'out'){
            amountDisplay = <h5 className="secondary-content red-text text- accent-4" >-{this.props.amount} €</h5>
        }else{
            amountDisplay = <h5 className="secondary-content green-text text-accent-4" >+{this.props.amount} €</h5>
        }
         
        return     <li className="collection-item">
            <div>
                <h5 className="title">{this.props.externalParty}</h5>
                {amountDisplay}
            </div>
            <div>
                <span>{this.props.date}</span>
            </div>
            <div>
                <span>{this.props.time}</span>
            </div>

            <div>
                <span>{this.props.comment}</span>
            </div>
            <TagList tags={this.props.tags}/>
        </li>

    }
}   
