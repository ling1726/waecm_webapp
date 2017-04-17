import React, {Component} from 'react';

export default class Transfer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return  <div>
                  <div className="row">
                    <div className="col s12">
                      <div className="card darken-1">
                        <div className="card-content">
                                <div className="row">
                                  <form action='#' className="col s12">
                                    <div className="row">
                                      <div className="input-field col s6">
                                        <input disabled value={this.props.email} id="sender_account" type="text" className="validate"/>
                                      </div>
                                      <div className="input-field col s6">
                                        <input disabled value={this.props.iban} id="sender_iban" type="text" className="validate"/>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="input-field col s12"> 
                                        <input id="receiver_account" type="text" className="validate"/>
                                        <label for="receiver_account">Receiver</label>
                                      </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s6"> 
                                          <input id="receiver_iban" type="text" pattern="AT[0-9]{2} [0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}" className="validate"/>
                                          <label for="receiver_iban">IBAN</label>
                                        </div>
                                        <div className="input-field col s4"> 
                                          <input id="reference" type="text" className="validate"/>
                                          <label for="reference">Payment Reference</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col s1 grey-text lighten-1">Amount</div>
                                        <div className="input-field col s3"> 
                                            <input id="amount_euro" type="number" min="0.00" steps="0.01" max="1000.00" className="validate"/>
                                            <label for="amount_euro">Euro</label>
                                        </div>
                                        <div className="col s2"/>
                                        <div className="col s1 grey-text lighten-1">Date</div>
                                            <div className="input-field col s3"> 
                                            <input id="date" type="date" className="datepicker"/>
                                        </div>
                                    </div>
                                    <div className="row">                                        
                                        <div className="input-field col s4"> 
                                          <input id="tag" type="text" className="validate"/>
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
