import React, { Component} from 'react';
import Header from './Header'
import ToDoList from './ToDoList';

class MainDisplay extends Component {

    constructor(props){
        super(props);
            this.state = {
                title: `To-Do List`,
                tasks: [
                    "Clean bathroom",
                    "Make bed.",
                    "Take out the trash.",
                    "wash the dog.",
                    "Buy groceries.",
                ]
            }
    }

    render() {
        return <div className="main-display"> 
            <h1>This is the Main Display</h1>

            <Header title={this.state.title}/>
            
            <ToDoList tasks={this.state.tasks}/>
        </div>
    }
};

export default MainDisplay;