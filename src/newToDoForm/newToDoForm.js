import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './NewToDoForm.css';

class newToDoForm extends Component{
    constructor(props){
        super(props);
        this.state={task:""};
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    handleSubmit(e){
        e.preventDefault();
        const newToDo = {...this.state, id: uuidv4(), completed: false};
        this.props.create(newToDo);
        this.setState({
            task:""
        })
    }
    render(){
        return(
            <form className="NewToDoForm" onSubmit={this.handleSubmit}>
                <label htmlFor="task">New task </label>
                <input type="text" 
                name="task"
                value={this.state.task}
                onChange={this.handleChange}/>
                <button>Add task!</button>
            </form>
        )
    }
}

export default newToDoForm;