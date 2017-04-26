import React, {Component} from 'react';

export default class Transfer extends Component{
    constructor(props){
        super(props);
        this.formData = {};
    }

    requestTan = (event) =>{
        event.preventDefault();
        
        for (const field in this.refs) { 
          if(field=='tags') { 
            let selected = Array.from(this.refs['tags']).filter(option => option.selected).map(option => option.value).filter(Boolean);
            this.formData['tags'] = JSON.stringify(selected);
          }
          else {
            this.formData[field] = this.refs[field].value;
          }
        }
        this.props.getTAN();

    }
    handleTransfer = (event) => {
        event.preventDefault();
        this.formData["tan"] = this.refs["tan"].value;
        this.props.createTransfer(this.formData);
        this.formData = {};
    }

    componentDidMount(){
        Materialize.updateTextFields();
    }
 
    componentDidUpdate() {
        $('select').material_select();
        Materialize.updateTextFields();
    }

    render(){
        if(Object.keys(this.formData).length === 0) {
        return  <div>
                  <div className="row">
                    <div className="col s12">
                      <div className="card darken-1">
                        <div className="card-content">
                                <div className="row">
                                  <form onSubmit={this.requestTan} className="col s12">
                                    <div className="row">
                                      <div className="input-field col s6">
                                        <input disabled value={this.props.firstname + " " + this.props.lastname} ref="sender_name" key="sender_name" type="text" className="validate"/>
                                        <label for="sender_name">Sender Name</label>
                                      </div>
                                      <div className="input-field col s6">
                                        <input disabled value={this.props.iban} ref="sender_iban" key="sender_iban" type="text" className="validate"/>
                                        <label for="sender_iban">Sender IBAN</label>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="input-field col s6"> 
                                        <input ref="receiver_name" key="receiver_name" type="text" className="validate" required />
                                        <label for="receiver_name">Receiver Name</label>
                                      </div>
                                      <div className="input-field col s6"> 
                                        <input ref="receiver_iban" key="receiver_iban" type="text" pattern="AT[0-9]{18}" className="validate" required />
                                        <label for="receiver_iban">IBAN</label>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="input-field col s6"> 
                                        <input ref="comment" key="comment" type="text" className="validate" required />
                                        <label for="comment">Payment Reference</label>
                                      </div>
                                      <div className="input-field col s2"> 
                                        <input ref="amount" key="amount" type="number" min="0.00" step="0.01" className="validate" required />
                                        <label for="amount">Amount (&euro;)</label>
                                      </div>
                                      <div className="input-field col s4"> 
                                        <select ref="tags" key="tags" multiple>
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
         else {
             return  <div>
                  <div className="row">
                    <div className="col s12">
                      <div className="card darken-1">
                        <div className="card-content">
                                <div className="row">
                                  <form onSubmit={this.handleTransfer} className="col s12">
                                    <div className="row">
                                      <div className="input-field col s4"> 
                                        <input ref="tan" key="tan" type="text" pattern="[0-9]{4,}" className="validate" required />
                                        <label for="tan">TAN</label>
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
}
