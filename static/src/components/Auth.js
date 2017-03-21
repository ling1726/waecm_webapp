import React, {Component} from 'react';

export default class Auth extends Component{
    constructor(props){
        super(props);
        this.state = {username: null, password: null};
    }

    handleAuth = (event) =>{ debugger
        event.preventDefault();
        this.props.getAuthToken({username: this.state.username, password: this.state.password})
    }

    handleChangeUsername = (event) => { debugger
        this.setState({username: event.target.value})
    }

    handleChangePassword = (event) => { debugger
        this.setState({password: event.target.value})
    }

    render(){ debugger
        const {isLogged} = this.props;

        let login = null;
        if(!isLogged){
            login = <form onSubmit={this.handleAuth}>
                        <input type="text" placeholder="username" 
                            value={this.state.username} onChange={this.handleChangeUsername}/>
                        <input type="password"  placeholder="password" 
                            value={this.state.password} onChange={this.handleChangePassword}/>
                        <button type="submit">login </button>
                    </form>
        }
        else{
           login = <p>user is logged in</p>
        }

        return login;
    }
}
