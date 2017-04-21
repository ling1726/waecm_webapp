import React, {Component} from 'react';
import placeholder from '../../img/category_placeholder.png'

export default class TagList extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let tags = this.props.tags

        return     <div className="chips chips-initial">
                     {
                        tags
                            .map((tag) => {
                            return(
                                <div className="chip">
                                    <img src={placeholder} alt={placeholder}></img>
                                    {tag}
                                </div>
                                )
                            })            
                    }
        </div>

    }
}
