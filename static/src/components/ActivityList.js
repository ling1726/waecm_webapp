import React, {Component} from 'react';
import ActivityListElement from './ActivityListElement';

export default class ActivityList extends Component{
    constructor(props){
        super(props);
    }

    render(){debugger
        let transfers = this.props.transfers;
        
        return  <ul className="collection with-header">
                    <li className="collection-header"><h4>Activity - past transactions</h4></li>
                    {
                        transfers
                            .sort((a, b) => {
                                return b.timestamp-a.timestamp
                            })
                            .map((transfer) => {
                            return(
                                <ActivityListElement
                                    key={transfer.id}
                                    externalParty={transfer.externalParty}
                                    amount={transfer.amount}
                                    date={transfer.date}
                                    type={transfer.type}
                                />
                                )
                            })            
                    }
                </ul> 
    }
}
