import React from 'react';

import './Home.scss';

export default class Home extends React.Component {
    render() {

        const logoImage = require('./logo.png');

        return (
                <div className="banner">
                    <div className="logo">
                        <p>
                            <img src={logoImage}/>
                        </p>
                    </div>
                    <h1>
                        React Basic Setup
                    </h1>
                </div>
        );

    }
}
