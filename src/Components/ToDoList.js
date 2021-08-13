import React, { Component } from  'react'
import ToDoListItem from './ToDoListItem';
import TaskInput from './TaskInput';

class ToDoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tasks: this.props.tasks
        }

    }
    
    
    render() {
        const listItems = this.props.tasks //( (item) => {<li key={this.props.tasks.indexOf(item)}>{item}</li>})
        console.log(listItems)
        console.log(this.props.tasks)

        return <section>
            <h4> To-Do List</h4>

            <TaskInput />

            <ul>
                {this.props.tasks.map(item => <li key={this.props.tasks.indexOf(item)}>{item}</li>)}
            </ul>

        </section>
    }
};

// // Functional Component
// function ToDoList(props) {
//     const tasks = props.tasks;
    
//     const listItems = this.state.tasks.map( (item) => {<li>{item}</li>})

//     return (<ul>{listItems}</ul>)
// } 

export default ToDoList;