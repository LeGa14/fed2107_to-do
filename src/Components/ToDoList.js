import React, { Component } from  'react'
import ToDoListItem from './ToDoListItem';
import TaskInput from './TaskInput';

class ToDoList extends Component {
    render() {
        return <section>
            <h4> To-Do List</h4>

            <TaskInput />

            <ToDoListItem />
            <ToDoListItem />
            <ToDoListItem />
            <ToDoListItem />
        </section>
    }
};

export default ToDoList;