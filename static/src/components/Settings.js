/**
 * Created by ubuntuvm on 18.04.17.
 */
import React, {Component} from 'react';


export default class Settings extends React.Component{

    constructor(props){
        super(props);
    }

    handleChangeLimit=(event)=>{debugger
        event.preventDefault();
    console.log(this.refs);
        const  changedLimit=this.refs['changeLimit'].value;
        this.props.changeLimit(changedLimit);
    }

     render(){
        return  <div>
                  <div className="row">
                    <div className="col s12">
                      <div className="card darken-1">
                        <div className="card-content">
                                <div className="row">
                                  <form onSubmit={this.handleChangeLimit} className="col s12">
                                    <div className="row">
                                      <div className="input-field col s6">
                                        <input disabled value={this.props.email} id="user_account" type="text" className="validate"/>
                                      </div>
                                      <div className="input-field col s6">
                                        <input disabled value={this.props.iban} id="user_iban" type="text" className="validate"/>
                                      </div>
                                    </div>
                                      <div className="row">
                                      <div className="input-field col s6">
                                           current limit: <input disabled value={this.props.limit} id="user_limit" type="text" className="validate"/>
                                      </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s3">
                                            <input ref="changeLimit" type="number" min="0.00" max="1000.00" className="validate"/>
                                            <label for="changeLimit">change limit</label>
                                        </div>
                                        <div className="col s2"/>
                                    </div>
                                    <div className="row">
                                        <div className="col s12">
                                            <button className="btn waves-effect waves-light btn" type="submit">Save </button>
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