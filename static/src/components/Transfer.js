import React, {Component} from 'react';

export default class Transfer extends Component{
    constructor(props){
        super(props);
    }

    handleTransfer = (event) =>{
        event.preventDefault();
        
        const formData = {};
        for (const field in this.refs) {
          formData[field] = this.refs[field].value;
          this.refs[field].value="";
        }

        this.props.createTransfer(formData);

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
                                        <label for="sender_name" class="active">Sender Name</label>
                                      </div>
                                      <div className="input-field col s6">
                                        <input disabled value={this.props.iban} ref="sender_iban" type="text" className="validate"/>
                                        <label for="sender_iban" class="active">Sender IBAN</label>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="input-field col s12"> 
                                        <input ref="receiver_name" type="text" className="validate"/>
                                        <label for="receiver_name">Receiver</label>
                                      </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s6"> 
                                          <input ref="receiver_iban" type="text" pattern="AT[0-9]{18}" className="validate"/>
                                          <label for="receiver_iban">IBAN</label>
                                        </div>
                                        <div className="input-field col s4"> 
                                          <input ref="comment" type="text" className="validate"/>
                                          <label for="comment">Payment Reference</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col s1 grey-text lighten-1">Amount</div>
                                        <div className="input-field col s3"> 
                                            <input ref="amount" type="number" min="0.00" steps="0.01" max="1000.00" className="validate"/>
                                            <label for="amount">Euro</label>
                                        </div>
                                        <div className="col s2"/>
                                        <div className="input-field col s4"> 
                                          <input ref="tag" type="text" className="validate"/>
                                          <label for="tag">Tag</label>
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
