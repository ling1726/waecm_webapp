import React, {Component} from 'react';

export default class ActivityListElement extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return     <li className="collection-item">
            <div>
                <span className="title">{this.props.senderName}</span>
                <span className="secondary-content">{this.amount}</span>
            </div>
        </li>

    }
}
~       
