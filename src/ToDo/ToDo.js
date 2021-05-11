import React, { Component } from 'react';
import '../ToDo/ToDo.css';

 class ToDo extends Component{
     constructor(props){
         super(props);
         this.state={
             isEdit: false,
             task: this.props.task
         }
         this.toggleForm=this.toggleForm.bind(this);
         this.handleChange = this.handleChange.bind(this);
         this.handleUpdate = this.handleUpdate.bind(this);
         this.handleToggle = this.handleToggle.bind(this);
     }
     toggleForm(){
         this.setState({
             isEdit: !this.state.isEdit
         });
     }
     handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    handleUpdate(e){
        e.preventDefault(); //does not refresh the page
        this.props.update(this.props.id, this.state.task);  //update the taskk
        //make the isEdit mode in false state
        this.setState({     
            isEdit: false
        });
    }
    handleToggle(e){
        this.props.toggleToDo(this.props.id);
    }
     render(){
         let result;
         if(this.state.isEdit){
             result=(
                 <div className="ToDo">
                    <form className="Todo-form-edit" onSubmit={this.handleUpdate}>
                     <input type='text' name='task' value={this.state.task} onChange={this.handleChange}/>
                     <button>Save</button>
                    </form>
                     
                 </div>
             );            
         }
         else{
           result=(
            <div className="ToDo">
                <li 
                onClick={this.handleToggle}
                className={this.props.completed ? 'Todo-task completed': 'Todo-task'}>
                    {this.props.task}
                </li>
                <div className="Todo-buttons">
                <button onClick={this.toggleForm}><i class="fas fa-pen"></i></button>
                <button onClick={this.props.remove}><i class="fas fa-trash"></i></button>
                </div>
                
            </div>
           );
           
         }
         return result;
     }
 }

 export default ToDo;