import React, {Component} from 'react';

export default class Auth extends Component{
    constructor(props){
        super(props);
        this.state = {username: null, password: null};
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

    render(){ 
        const {isLogged} = this.props;

        let login = null;
        if(!isLogged){
            login = <div className={"row"}>
                        <form onSubmit={this.handleAuth}>
                           <div className={"input-field col m4"}> 
                                <input id="username" type="text" 
                                    value={this.state.username} onChange={this.handleChangeUsername}/>
                                <label htmlFor="username" className={"black-text"}>username</label>
                            </div>
                            <div className={"input-field col m4"} style={{marginLeft:'35px'}}>
                                <input id="password" type="password"  
                                    value={this.state.password} onChange={this.handleChangePassword}/>
                                <label htmlFor="password" className={"black-text"}>password</label>
                            </div>
                            <button type="submit" className={"btn waves-effect waves-light"}>login </button>
                        </form>
                    </div>
        }
        else{
           login = <p>user is logged in</p>
        }

        return login;
    }
}
