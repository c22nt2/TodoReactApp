import React, {Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddTodo from './AddToDo';

export default class TodoList extends Component {

  state = {
     todos: [
       { Id: '1', Title: 'Push your code to github', Status: 'Done' },
       { Id: '2', Title: 'Email to your manager', Status: 'Pending' }
     ]
  };
  edit_ToDo = (x) => {
      console.log(x);
      this.setState(state => ({
          todos: state.todos.map(todo => {
            if (todo.Id === x.Id) {
                return {
                      ...todo,
                      Status: todo.Status === "Done" ? "Pending" : "Done"
                };
            } else {
                return todo;
            }
        })
    }));
  };
  delete_ToDo = (todo) => {
      const filteredItems = this.state.todos.filter(x => x.Id !== todo.Id);
      this.setState({
          todos: filteredItems
      });
  };
  add_ToDo = (todo) => {
      this.setState({
          todos: [...this.state.todos, todo]
      });
  };
  
  render() {
    return (
         <div>
             <AddTodo onAdd={this.add_ToDo}></AddTodo>
             <h1>TodoList </h1>
                <table className="table">
                   <thead>
                     <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Action</th>
                     </tr>
                   </thead>
                   <tbody>
                       {this.state.todos.map(x => {
                         return (
                              <tr key={x.Id}>
                              <td>{x.Id}</td>
                              <td>{x.Title}</td>
                              <td style={{ color: x.Status === "Done" ? "green" : "red" }}>{x.Status}</td>
                              <td>
                                <button className="btn btn-primary" onClick={() => this.delete_ToDo(x)}>
                                  <span>
                                    <FontAwesomeIcon icon="trash" color="#acacac"></FontAwesomeIcon>
                                  </span>
                                </button>
                                <button className="btn btn-primary" onClick={() => this.edit_ToDo(x)}>
                                  <span>
                                    <FontAwesomeIcon icon="edit"></FontAwesomeIcon>
                                  </span>
                                </button>
                              </td>
                              </tr>
                          );
                       })}
                    </tbody>
                </table>
          </div> 
      );
   }
  

  }