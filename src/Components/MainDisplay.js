import React, { Component} from 'react';
import Header from './Header'
import ToDoList from './ToDoList';

class MainDisplay extends Component {

    constructor(props){
        super(props);
            this.state = {
                title: ``,
                tasks: []
            }
    }

    render() {
        return <div className="main-display"> 
            <h1>This is the Main Display</h1>

            <Header />
            
            <ToDoList />
        </div>
    }
};

export default MainDisplay;