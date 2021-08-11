import React, { Component } from  'react'
import ToDoListItem from './ToDoListItem';

class ToDoList extends Component {
    render() {
        return <section>
            <h4> To-Do List</h4>

            <ToDoListItem />
            <ToDoListItem />
            <ToDoListItem />
            <ToDoListItem />
        </section>
    }
};

export default ToDoList;