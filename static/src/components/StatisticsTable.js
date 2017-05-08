import React, {Component} from 'react';


export default class StatisticsGraph extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div>
            <div className="row">
                <div className="col s12">
                    <div className="card darken-1">
                        <div className="card-content">
                            <span className="card-title">Statistics Table</span>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}