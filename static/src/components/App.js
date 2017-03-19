import React, { Component, PropTypes } from 'react';

export default class App extends Component {

        render() {
        return <div><nav>
                <a href="/html/">HTML</a> |
                <a href="/css/">CSS</a> |
                <a href="/js/">JavaScript</a> |
                <a href="/jquery/">jQuery</a>
                </nav>
                { this.props.main }</div>
    }
}



