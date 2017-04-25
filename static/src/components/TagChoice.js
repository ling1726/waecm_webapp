import React, {Component} from 'react';

export default class TagChoice extends Component{
    constructor(props){
        super(props);
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
                        <select multiple>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                            <option value="4">Option 5</option>
                        </select>
                        <label>Categories</label>
                    </div>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat ">Confirm</a>
                </div>
                </div>    
                </div>
    }
}
