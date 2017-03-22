import React, { Component, PropTypes } from 'react';

export default class App extends Component {

        render() {debugger
        return <div>
                { this.props.nav }
                <div className={"container"}>{ this.props.main }</div></div>
    }
}



