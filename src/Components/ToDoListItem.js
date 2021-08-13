import React from 'react';

class ToDoListItem extends React.Component {

    render() {
        return <p>{this.props.item}</p>
    }
};

export default ToDoListItem;