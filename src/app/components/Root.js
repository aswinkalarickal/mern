import React from 'react';

import {Header} from './Header';

export class Root extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <br/>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
