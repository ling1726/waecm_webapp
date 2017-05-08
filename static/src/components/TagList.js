import React, {Component} from 'react';
import TagChoice from './TagChoice';

export default class TagList extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let tags = this.props.tags
        return     <div className="chips chips-initial chips-placeholder">
                     {
                        tags
                            .map((tag) => {
                            return(
                                <div className={"chip " + tag[1]}>
                                    <i className={tag[2]}> {tag[0]}</i>
                                </div>
                                )
                            })            
                    }
        </div>

    }
}
