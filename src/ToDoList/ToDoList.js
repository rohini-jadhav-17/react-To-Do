import React, { Component } from 'react';
import ToDo from '../ToDo/ToDo';
import NewToDoForm from '../newToDoForm/newToDoForm';
import "./ToDoList.css"

class ToDoList extends Component{
    constructor(props){
        super(props);
        this.state={
            todo:[]
        }
        this.createTodo= this.createTodo.bind(this);
        this.updateToDo= this.updateToDo.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }
    updateToDo(id,updatedTask){
        const updatedToDo = this.state.todo.map(t=>{
            if(t.id === id){
                return {...t, task: updatedTask};
            }
            return t;
        })
        this.setState({
            todo: updatedToDo
        })
    }
    removeTodo(id){
        this.setState({
            todo: this.state.todo.filter(todo=> todo.id !== id)
        })
    }
    createTodo(newTodo){
        this.setState({
            todo:[...this.state.todo,newTodo]
        });
    }
    toggleCompletion(id){
        const updatedToDo = this.state.todo.map(t=>{
            if(t.id === id){
                return {...t, completed: !t.completed};
            }
            return t;
        })
        this.setState({
            todo: updatedToDo
        })
    }
    render(){
        const todos=this.state.todo.map(todo=>{
           return <ToDo key={todo.id} 
           id={todo.id} 
           task={todo.task} 
           completed={todo.completed}
           toggleToDo={this.toggleCompletion}
           update={this.updateToDo} 
           remove={()=> this.removeTodo(todo.id)}/>
        });
        return(
            <div className="ToDoList">
                <h1>TO Do List:<span>A simple react to do app</span></h1>
                <ul>
                    {todos}
                </ul>
                <NewToDoForm  create={this.createTodo}/>
            </div>
        )
    }
}

export default ToDoList;