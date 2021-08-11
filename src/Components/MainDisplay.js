import React, { Component} from 'react';
import Header from './Header'
import ToDoList from './To-DoList';

class MainDisplay extends Component {

    render() {
        return <div className="main-display"> 
            <h1>This is the Main Display</h1>

            <Header />
            
            <ToDoList />
        </div>
    }
};

export default MainDisplay;