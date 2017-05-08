import React, {Component} from 'react';

export default class TagChoice extends Component{
    constructor(props){
        super(props);
        let tags = []
        this.props.tags.forEach((tag) => {
            tags.push(tag[0]);
        })
        this.state = {tags: tags}
    }

    handleAssignTags(event){debugger
        event.preventDefault();
        this.props.assignTags(this.state.tags, this.props.transferId);
    }
    

    handleChange(event){ debugger
        this.setState({tags: event.target.value})
    }

    componentDidMount(){
        $('.modal').modal();
        $('select').material_select();
    }

    render(){
                return <div><a className="modal-trigger waves-effect waves-light btn-flat" href={`#modal${this.props.transferId}`}>Add Category</a>
                <div id={`modal${this.props.transferId}`} className="modal">
                <div className="modal-content">
                    <h4>Categories</h4>
                    <div className="input-field">
                        <select value={this.state.tags} onChange={this.handleChange.bind(this)} multiple>
                            <option value="Leisure">Leisure</option>
                            <option value="Insurance">Insurance</option>
                            <option value="Accomodation">Acomodation</option>
                            <option value="Subscriptions">Subscriptions</option>
                            <option value="Shopping">Shopping</option>
                            <option value="Utility">Utiity</option>
                        </select>
                        <label>Categories</label>
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="modal-action modal-close waves-effect waves-green btn-flat " onClick={this.handleAssignTags.bind(this)}>Confirm</button>
                </div>
                </div>    
                </div>
    }
}
