import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <header>
                <h3>{this.props.title}</h3>

                <h5>Task counter</h5>

                <h4>Date</h4>
            </header>
        )
    }
}

export default Header