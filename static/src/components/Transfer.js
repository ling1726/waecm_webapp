import React, {Component} from 'react';

export default class Transfer extends Component{
    constructor(props){
        super(props);
    }

    handleTransfer = (event) =>{
        event.preventDefault();
        
        const formData = {};
        var selectedTags = new Array();
        for (const field in this.refs) { 
          if(field=='tags') { 
            let selected = Array.from(this.refs['tags']).filter(option => option.selected).map(option => option.value).filter(Boolean);
            formData['tags'] = JSON.stringify(selected);
          }
          else {
            formData[field] = this.refs[field].value;
          }
        }

        this.props.createTransfer(formData);

    }

   componentDidMount(){
        Materialize.updateTextFields();
    }
 
    componentDidUpdate() {
        $('select').material_select();
    }

    render(){ 
        return  <div>
                  <div className="row">
                    <div className="col s12">
                      <div className="card darken-1">
                        <div className="card-content">
                                <div className="row">
                                  <form onSubmit={this.handleTransfer} className="col s12">
                                    <div className="row">
                                      <div className="input-field col s6">
                                        <input disabled value={this.props.firstname + " " + this.props.lastname} ref="sender_name" type="text" className="validate"/>
                                        <label for="sender_name">Sender Name</label>
                                      </div>
                                      <div className="input-field col s6">
                                        <input disabled value={this.props.iban} ref="sender_iban" type="text" className="validate"/>
                                        <label for="sender_iban">Sender IBAN</label>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="input-field col s6"> 
                                        <input ref="receiver_name" type="text" className="validate" required />
                                        <label for="receiver_name">Receiver Name</label>
                                      </div>
                                      <div className="input-field col s6"> 
                                        <input ref="receiver_iban" type="text" pattern="AT[0-9]{18}" className="validate" required />
                                        <label for="receiver_iban">IBAN</label>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="input-field col s6"> 
                                        <input ref="comment" type="text" className="validate" required />
                                        <label for="comment">Payment Reference</label>
                                      </div>
                                      <div className="input-field col s2"> 
                                        <input ref="amount" type="number" min="0.00" step="0.01" className="validate" required />
                                        <label for="amount">Amount (&euro;)</label>
                                      </div>
                                      <div className="input-field col s4"> 
                                        <select ref="tags" multiple>
                                          <option value="" disabled selected>Choose your Tags</option>
                                          {
                                            this.props.tags.map((tag) => {
                                                return <option value={tag}>{tag}</option>
                                            })
                                          }
                                        </select>
                                        <label>Tags</label>
                                      </div>
                                    </div>
                                    <div className="row">
                                        <div className="col s12">
                                            <button className="btn waves-effect waves-light btn" type="submit">Confirm</button>
                                        </div>
                                    </div>
                                  </form>
                                </div>                        
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                           
    }     
}
