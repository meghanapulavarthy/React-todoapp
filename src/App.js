import logo from './logo.svg';
import './App.css';
import React from "react";
import TaskList from "./TaskList";



class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      tasks:[],
      presentTask:{
        text:'',
        key:''
      }
      
    }
    this.handleTask=this.handleTask.bind(this);
    this.addTask=this.addTask.bind(this);
    this.deleteTasks=this.deleteTasks.bind(this);
    
  }
  handleTask(e){
    this.setState({
      presentTask:{
        text:e.target.value,
        key:Date.now()
      }
    })
  }

  addTask(e){
    e.preventDefault();
    const task=this.state.presentTask;
    if(task.text !== ""){
      const alltasks=[...this.state.tasks,task];
      this.setState({
        tasks:alltasks,
        presentTask:{
          text:'',
          key:''
        }
      }

      )
    }
  }

  deleteTasks(key){
    const remainingItems = this.state.tasks.filter(item => 
      item.key!==key);
      this.setState({
        tasks:remainingItems
      })
  }
  render(){
    return(
      <div className="app">
      <header>
        <form id="formelement" onSubmit={this.addTask}>
          <input type="text" placeholder="enter the task" value={this.state.presentTask.text} onChange={this.handleTask}></input>
          <button type="submit">Add</button>
        </form>
      </header>
      <TaskList tasks={this.state.tasks} deleteTasks={this.deleteTasks}></TaskList>
      </div>
      

    );
  }
}



export default App;
