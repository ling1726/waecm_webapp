import React, {Component} from 'react';

export default class Auth extends Component{
    constructor(props){
        super(props);
        this.state = {username: '', password: ''};
    }

    handleAuth = (event) =>{ 
        event.preventDefault();
        this.props.getAuthToken({username: this.state.username, password: this.state.password})
    }

    handleChangeUsername = (event) => { 
        this.setState({username: event.target.value})
    }

    handleChangePassword = (event) => { 
        this.setState({password: event.target.value})
    }

    componentDidMount(){
        //Materialize.updateTextFields();
    }

    render(){
        let errorSpan = null;
        if(this.props.authError){
            errorSpan = <span>Login failed!</span>

        }else{
            errorSpan = <span></span>
        }

        return     <div>
                        <form onSubmit={this.handleAuth}>
                           <div className={"input-field"}> 
                                <input id="username" type="text" 
                                    value={this.state.username} onChange={this.handleChangeUsername} placeholder="john.doe@example.com"/>
                                <label htmlFor="username" className={"black-text"}>username</label>
                            </div>
                            <div className={"input-field"} >
                                <input id="password" type="password"  
                                    value={this.state.password} onChange={this.handleChangePassword} placeholder="*************"/>
                                <label htmlFor="password" className={"black-text"}>password</label>
                            </div>
                            <button type="submit" className={"btn waves-effect waves-light"}><i className="fa fa-sign-in"></i> Login</button>
                            {errorSpan}
                        </form>
                    </div>

    }
}
